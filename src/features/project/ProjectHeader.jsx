import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

export default function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-x-2 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight className="icon text-secondary-500" />
      </button>
      <p className="font-black text-secondary-900">
        لیست درخواست های {project.title}
      </p>
    </div>
  );
}
