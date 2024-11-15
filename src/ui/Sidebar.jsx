export default function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 py-8 px-4 row-start-1 row-span-2 col-start-1 col-span-1 border-l border-secondary-200">
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}
