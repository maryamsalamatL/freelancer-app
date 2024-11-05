import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { HiOutlinePlus } from "react-icons/hi";

export default function ProjectsHeader() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="font-bold text-xl text-secondary-700">پروژه های شما</h2>
      <button onClick={() => setIsFormOpen(true)} className="btn btn--primary flex items-center gap-x-2">
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
      <Modal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="اضافه کردن پروژه جدید"
      >
        <CreateProjectForm onClose={() => setIsFormOpen(false)} />
      </Modal>
    </div>
  );
}
