import { foods } from "../data/foods";
import FoodCard from "./FoodCard";

export default function Item({ category, onBack }) {
  const categoryFoods = foods.filter((f) => f.category === category);

  return (
    <div className="p-4 space-y-4">
      <button onClick={onBack} className="text-blue-500 text-lg">← Back</button>

      <h2 className="text-xl font-bold capitalize">{category}</h2>

      {/* GRID: 3 items on mobile → 5 items on PC */}
      <div className="
        grid 
        grid-cols-3
        sm:grid-cols-4
        lg:grid-cols-5
        gap-4
      ">
        {categoryFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
