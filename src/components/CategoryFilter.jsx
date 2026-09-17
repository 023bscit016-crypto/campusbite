 function CategoryFilter({ categories, activeCategory, onSelect, counts }) {
  return (
    <div className="category-sidebar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-sidebar-item ${activeCategory === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          <span className="category-sidebar-icon">{cat.charAt(0)}</span>
          <span className="category-sidebar-label">{cat}</span>
          <span className="category-sidebar-count">{counts[cat] ?? 0}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;