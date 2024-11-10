import useUser from "./useUser";

export default function UserAvatar() {
  const { user } = useUser();
  
  return (
    <div className="flex items-center gap-x-2">
      <img className="w-7 h-7 rounded-full border-2 border-secondary-500 object-contain object-center" src={"/profile-icon.png"} alt="user-profile" />
      <p className="text-secondary-700">{user?.name}</p>
    </div>
  );
}
