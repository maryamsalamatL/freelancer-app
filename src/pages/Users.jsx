import UsersTable from "../features/admin/users/UsersTable";

export default function Users() {
  return (
    <div>
      <h1 className="font-bold text-secondary-700 text-xl mb-8">کاربران</h1>
      <UsersTable />
    </div>
  );
}
