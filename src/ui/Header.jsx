import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200 ">
      <div
        className={`flex items-center gap-x-8 justify-end container xl:max-w-screen-lg ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}
