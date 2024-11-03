export default function ConfirmDelete({
  recourseName,
  onClose,
  onConfirm,
  disabled,
}) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {recourseName} مطمئن هستید؟
      </h2>
      <div className="flex items-center justify-between gap-x-4">
        <button
          onClick={onClose}
          className="btn btn--primary flex-1"
          disabled={disabled}
        >
          لغو
        </button>
        <button
          onClick={onConfirm}
          className="btn btn--danger flex-1"
          disabled={disabled}
        >
          تایید
        </button>
      </div>
    </div>
  );
}
