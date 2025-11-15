export default function CategoryIcons({ categories, onSelect }) {
  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => onSelect(c.key)}
          className="flex flex-col items-center text-center text-xs sm:text-sm p-1 rounded hover:bg-gray-200"
        >
          <img
            src={c.icon}
            alt={c.label}
            className="w-10 h-10 mx-auto object-contain"
          />
          <p>{c.label}</p>
        </button>
      ))}
    </div>
  );
}
