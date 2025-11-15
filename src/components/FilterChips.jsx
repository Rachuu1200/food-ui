export default function FilterChips({ filters, selected, setSelected }) {
return (
<div className="flex gap-2 flex-wrap">
{filters.map((f) => (
<button
key={f}
onClick={() => setSelected(f)}
className={`px-3 py-1 rounded-full border text-sm sm:text-base duration-200 ${
selected === f ? "bg-black text-white" : "bg-gray-200"
}`}
>
{f}
</button>
))}
</div>
);
}