import Image from "next/image";
import type { User } from "next-auth";
type Props = {
  user: User & { isAdmin: Boolean };
};

const ProfilePage = ({ user }: Props) => {
  let usrImg = user?.image;
  if (!usrImg) usrImg = "/userAvatar.png";
  return (
    <div className="flex justify-center text-center items-center flex-col w-full m-auto">
      <h1>Hello</h1>
      <Image
        src={usrImg}
        width={100}
        height={100}
        className="rounded-full"
        alt="user image"
      />
      <p className="text-4xl font-bold mt-10">{user?.name}</p>
      <div className="flex justify-between items-center p-2 text-lg">
        <span className="mr-4">Is Admin?</span>{" "}
        {user.isAdmin ? (
          <span className="text-green-500">Yes</span>
        ) : (
          <span className="text-slate-400">No</span>
        )}
        {/* <label className="relative flex justify-between items-center group p-2 text-lg">
          Is admin?
          <input
            type="checkbox"
            checked={user.isAdmin ? true : false}
            className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
          />
          <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4  bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-blue-500 after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        </label> */}
      </div>
    </div>
  );
};

export default ProfilePage;
