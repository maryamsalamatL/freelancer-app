import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { HiOutlineLogin, HiOutlineUser } from "react-icons/hi";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-end bg-secondary-0 z-10 placeholder-opacity-60 p-3 md:px-6">
        <div className="flex gap-x-2 h-full">
          <button
            onClick={() => {
              if (user) navigate(`/${user.role.toLowerCase()}`);
              else navigate("/auth");
            }}
            className="text-secondary-700  hover:text-primary-900 p-2 flex items-end"
          >
            {user ? (
              <HiOutlineUser className="icon" />
            ) : (
              <HiOutlineLogin className="icon" />
            )}
          </button>
        </div>
        <h1 className="text-secondary-900 font-bold text-xl md:text-2xl">
          <span className="text-primary-900">FREELANCER</span> IRAN
        </h1>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] absolute top-16 bg-[rgb(247,247,247)] md:flex md:items-center">
        <h2 className="text-center md:text-start text-[rgb(24,33,47)] title__fontSize mt-6 flex-1 md:mr-4 lg:mr-8">
          به <span className="font-bold text-primary-900">فریلنسر ایران </span>
          خوش آمدید
        </h2>
        <img
          src="/images/bg3.gif"
          alt=""
          className="object-contain max-h-full"
        />
      </div>
    </div>
  );
}
