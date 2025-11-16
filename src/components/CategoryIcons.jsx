export default function CategoryIcons({ categories, onSelect }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
      {categories.map((c) => (
        <div
          key={c.key}
          className="text-center cursor-pointer"
          onClick={() => onSelect(c.key)}
        >
          <img
            src={c.icon}
            alt={c.label}
            className="w-12 h-12 mx-auto rounded-full object-cover"
            onError={(e) => (e.target.src = "/placeholder.png")} // fallback
          />
          <p className="text-sm">{c.label}</p>
        </div>
      ))}
    </div>
  );
}
