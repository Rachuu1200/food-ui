export default function FoodCard({ food }) {
  return (
    <div className="rounded-xl p-1 sm:p-2 space-y-1 sm:space-y-2 bg-white">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-16 sm:h-28 object-cover rounded-lg"
      />

      <p className="font-semibold text-xs sm:text-sm text-center truncate">
        {food.name}
      </p>

      <p className="font-bold text-center text-sm">NRs. {food.price}/-</p>

      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <button className="border px-2 py-0.5 text-xs">-</button>
        <span className="text-xs">0</span>
        <button className="border px-2 py-0.5 text-xs">+</button>
      </div>
    </div>
  );
}
