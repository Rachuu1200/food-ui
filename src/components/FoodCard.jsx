import { useState } from "react";

export default function FoodCard({ food }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="rounded-xl p-1 sm:p-2 space-y-1 sm:space-y-2 bg-white">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-16 sm:h-28 object-cover rounded-lg"
        onError={(e) => (e.target.src = "/placeholder.png")}
      />

      <p className="font-semibold text-xs sm:text-sm text-center truncate">
        {food.name}
      </p>

      <p className="font-bold text-center text-sm">NRs. {food.price}/-</p>

      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <button
          onClick={decrement}
          className={`border px-2 py-0.5 text-xs ${quantity === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="text-xs">{quantity}</span>
        <button
          onClick={increment}
          className="border px-2 py-0.5 text-xs"
        >
          +
        </button>
      </div>
    </div>
  );
}
