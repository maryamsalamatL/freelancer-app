import { Switch } from "@headlessui/react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";

export default function ToggleProjectStatus({ project }) {
  const { status, _id: id } = project;
  const enabled = status === "OPEN" ? true : false;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const handleToggle = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id, data: { status: newStatus } });
  };

  return (
    <div className="w-[5rem] flex items-center justify-center gap-x-2">
      {isUpdating ? (
        <Loading height={20} width={40} />
      ) : (
        <>
          <label>{status === "OPEN" ? "باز" : "بسته"}</label>
          <Switch
            checked={enabled}
            onChange={handleToggle}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-300 transition data-[checked]:bg-primary-900"
          >
            <span className="size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6" />
          </Switch>
        </>
      )}
    </div>
  );
}
