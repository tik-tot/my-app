import { timeAgo } from "@/utils/timeMilliSec";
import Image from "next/image";
import type { User } from "@prisma/client";
// import { Pencil1Icon } from "@radix-ui/react-icons";
// import DialogEdit from "./DialogEdit";
import AdminToggleSwitch from "./AdminToggleSwitch";

export default async function TableUsers({ users }: { users: User[] }) {
  const startTime = Date.now();
  if (!users)
    return (
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full text-red-500">
        Not found any users!
      </div>
    );

  return (
    <div className="overflow-x-auto bg-white/30 p-6 md:p-11 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <h1 className="text-center text-2xl fornt-bold text-blue-500">Users</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th title="กดสวิทซ์เพื่อเปลี่ยนบทบาท">Is admin?</th>
            <th>Created</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.name}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={user.image ? user.image : "/userAvatar.png"}
                        alt={user.name ? user.name : "Unknown Name"}
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <AdminToggleSwitch user={user} hasLabel={false} />
              </td>
              <td>{timeAgo(user.createdAt)}</td>
              {/* <td>
                <DialogEdit user={user} />
              </td> */}
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Is admin?</th>
            <th>Created</th>
            {/* <th></th> */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
