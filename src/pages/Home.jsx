import { useState } from "react";
import { foods } from "../data/foods";
import { categories } from "../data/categories";
import { filters } from "../components/Filters";
import CategoryIcons from "../components/CategoryIcons";
import FilterChips from "../components/FilterChips";
import FoodCard from "../components/FoodCard";
import Item from "../components/Item";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // If a category is selected, show Item component
  if (selectedCategory) {
    return (
      <div className="p-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-4 text-blue-500"
        >
          ← Back
        </button>
        <Item category={selectedCategory} />
      </div>
    );
  }

  // Filter foods based on selectedFilter
  const filteredFoods =
    selectedFilter === "All"
      ? foods
      : foods.filter((f) => f.tags.includes(selectedFilter));

  return (
    <div className="p-4 space-y-6 max-w-5xl mx-auto">
      {/* Category icons */}
      <CategoryIcons
        categories={categories}
        onSelect={(key) => setSelectedCategory(key)}
      />

      {/* Filter chips */}
      <FilterChips
        filters={filters}
        selected={selectedFilter}
        setSelected={setSelectedFilter}
      />

      {/* Section title */}
      <h2 className="text-xl font-bold">{selectedFilter}</h2>

      {/* Food grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
