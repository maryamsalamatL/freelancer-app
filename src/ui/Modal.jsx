import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Modal({ children, title, open, onClose }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="w-full h-screen backdrop-blur-sm bg-secondary-800 bg-opacity-30 z-40 fixed top-0 right-0">
        <div
          ref={ref}
          className="w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-secondary-0 shadow-lg rounded-lg fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-4 transition-all duration-500 z-50"
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 mb-6 pb-2">
            <p className="font-bold text-secondary-700 text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="icon text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
