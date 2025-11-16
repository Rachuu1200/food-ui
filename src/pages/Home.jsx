import { useState } from "react";
import { foods } from "../data/foods";
import { categories } from "../data/categories";
import { filters } from "../components/FilterChips";
import CategoryIcons from "../components/CategoryIcons";
import FilterChips from "../components/FilterChips";
import FoodCard from "../components/FoodCard";
import Item from "../components/Item";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (selectedCategory) {
    return <Item category={selectedCategory} onBack={() => setSelectedCategory(null)} />;
  }

  const filteredFoods =
    selectedFilter === "All"
      ? foods
      : foods.filter((f) => f.category === selectedFilter);

  return (
    <div className="p-4 space-y-6 max-w-5xl mx-auto">
      <CategoryIcons categories={categories} onSelect={(key) => setSelectedCategory(key)} />
      <FilterChips filters={filters} selected={selectedFilter} setSelected={setSelectedFilter} />

      <h2 className="text-xl font-bold">{selectedFilter}</h2>

      <div className="relative">
        <div id="foodScroll" className="flex gap-4 overflow-x-auto scroll-smooth pb-4">
          {filteredFoods.map((food) => (
            <div className="min-w-[150px] sm:min-w-[180px]" key={food.id}>
              <FoodCard food={food} />
            </div>
          ))}
        </div>

        <button
          onClick={() =>
            document.getElementById("foodScroll").scrollBy({ left: 200, behavior: "smooth" })
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          ➜
        </button>
      </div>
    </div>
  );
}
