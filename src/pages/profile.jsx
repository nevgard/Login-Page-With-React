import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col p-6 h-40 w-60 shadow-md rounded-lg justify-center ">
        <h2 className=" text-3xl font-semibold">Profile</h2>
        <h2 className="">Username : {username}</h2>
      </div>
    </div>
  );
};

export default ProfilePage;
