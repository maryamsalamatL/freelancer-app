import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";

export default function ProjectRow({ project, i }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const { removeProject, isRemoving } = useRemoveProject();

  return (
    <Table.Row>
      <td>{i + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap max-w-[200px] gap-1">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="icon text-primary-900" />
            </button>
            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={"modal title"}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsConfirmDeleteOpen(true)}>
              <HiOutlineTrash className="icon text-error" />
            </button>
            <Modal
              open={isConfirmDeleteOpen}
              onClose={() => setIsConfirmDeleteOpen(false)}
              title={`حذف پروژه ${project.title}`}
            >
              <ConfirmDelete
                recourseName={project.title}
                onClose={() => setIsConfirmDeleteOpen(false)}
                onConfirm={() => {
                  removeProject(project._id, {
                    onSuccess: () => setIsConfirmDeleteOpen(false),
                  });
                }}
                disabled={isRemoving}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
