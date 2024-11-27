import UsersTable from "../features/admin/users/UsersTable";

export default function Users() {
  return (
    <div>
      <h1 className="font-bold text-secondary-700 title__fontSize mb-8">کاربران</h1>
      <UsersTable />
    </div>
  );
}
