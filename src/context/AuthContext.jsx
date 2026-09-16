import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const USERS_KEY = "campusbite_users";
const CURRENT_USER_KEY = "campusbite_user";

function getStoredUsers() {
  try {
    const stored = localStorage.getItem(USERS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(CURRENT_USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const register = ({ name, email, password }) => {
    const users = getStoredUsers();
    const existing = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
      return { success: false, error: "An account with this email already exists." };
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    const sessionUser = { name, email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);

    return { success: true };
  };

  const login = ({ email, password }) => {
    const users = getStoredUsers();
    const match = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!match) {
      return { success: false, error: "Invalid email or password." };
    }

    const sessionUser = { name: match.name, email: match.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}