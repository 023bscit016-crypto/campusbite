import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const grow = () => dot.classList.add("cursor-dot-hover");
    const shrink = () => dot.classList.remove("cursor-dot-hover");

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll(
      "button, a, .food-card, .category-card"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}

export default CustomCursor;