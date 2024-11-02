import useUser from "../features/authentication/useUser";

export default function Header() {
  const { data } = useUser();
  return <div>header</div>;
}
