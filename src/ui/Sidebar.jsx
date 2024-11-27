import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden absolute top-[1.1rem] sm:top-[1.25rem] right-[1.3rem]"
      >
        <HiMenu
          className={`${
            open ? "rotate-180" : ""
          } transition-all ease-in-out duration-500 icon text-secondary-700`}
        />
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } md:block bg-secondary-0 py-8 px-4 row-start-1 row-span-2 col-start-1 col-span-1 border-b border-secondary-200 md:border-b-0 md:border-l md:border-secondary-200 transition-all duration-500 `}
      >
        <ul className="space-y-2">{children}</ul>
      </div>
    </>
  );
}
