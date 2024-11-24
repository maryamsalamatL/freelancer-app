import Table from "../../../ui/Table";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

export default function UsersTable() {
  const { isLoading, users } = useUsers();
 
  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resourceName={"کاربری"} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, i) => (
          <UserRow key={user._id} user={user} i={i} />
        ))}
      </Table.Body>
    </Table>
  );
}
