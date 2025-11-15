export default function FoodCard({ food }) {
return (
<div className="border rounded-xl p-3 space-y-2 shadow-sm hover:shadow-md duration-200">
<img
src={food.img}
alt={food.name}
className="w-full h-36 sm:h-40 object-cover rounded-lg"
/>
<p className="font-semibold text-sm sm:text-base">{food.name}</p>
<p className="font-bold">NRs. {food.price}/-</p>


<div className="flex items-center gap-2">
<button className="border px-3 py-1">-</button>
<span>0</span>
<button className="border px-3 py-1">+</button>
</div>
</div>
);
}