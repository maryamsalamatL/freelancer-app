import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

export default function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container sm:max-w-screen-sm pt-10 space-y-6">
      <h1 className="font-bold text-xl text-secondary-700">
        صفحه مورد نظر یافت نشد.
      </h1>
      <button
        onClick={moveBack}
        className="flex gap-x-1 items-center text-secondary-500"
      >
        <HiArrowRight className="w-5 h-5 text-primary-800" /> <span>برگشت</span>
      </button>
    </div>
  );
}
