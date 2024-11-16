const colors = {
  primary: "bg-primary-200 text-primary-900",
  green: "bg-green-200 text-green-900",
  yellow: "bg-yellow-200 text-yellow-900",
  purple: "bg-purple-200 text-purple-900",
};

export default function Stat({ value, title, icon, color }) {
  return (
    <div className="rounded-lg bg-secondary-0 px-4 py-8 grid grid-cols-2 auto-rows-max gap-x-4">
      <span
        className={`row-span-2 w-24 h-24 rounded-full flex items-center justify-center ${colors[color]}`}
      >
        {icon}
      </span>
      <span className="font-bold text-secondary-500 text-lg">{title}</span>
      <span className="text-secondary-800 font-black sm:text-xl lg:text-3xl">
        {value}
      </span>
    </div>
  );
}
