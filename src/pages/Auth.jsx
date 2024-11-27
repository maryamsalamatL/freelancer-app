import AuthContainer from "../features/authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="flex justify-center pt-10 px-3">
        <AuthContainer />
      </div>
    </div>
  );
}
