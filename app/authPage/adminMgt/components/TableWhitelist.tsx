import type { whitelistUser } from "@prisma/client";
import AdminConfirmBtn from "./AdminConfirmBtn";
import { LightningBoltIcon, TrashIcon } from "@radix-ui/react-icons";
import { toThaiDate } from "@/utils/timeMilliSec";

export default async function TableWhitelist({ whitelist, currentEmail }: { whitelist: whitelistUser[], currentEmail:string }) {
  if (!whitelist)
    return (
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full text-red-500">
        Not found any whitelist users!
      </div>
    );

  return (
    <div className="overflow-x-auto bg-white/30 p-6 md:p-11 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <h1 className="text-center text-2xl fornt-bold text-blue-500">Whitelist</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>email</th>
            <th>createdAt</th>
            <th ><LightningBoltIcon className="ml-2" /></th>
          </tr>
        </thead>
        <tbody>
          {whitelist.map((user) => (
            <tr key={user?.email}>
              <td>
                    <div className="font-bold">{user.email}</div>
              </td>
              <td>
                    <div className="text-gray-600">{toThaiDate(user.createdAt)}
                    </div>
              </td>
              <td>
                {(user.email!=currentEmail)?
                <AdminConfirmBtn user={user} />:
                <span className="text-gray-600 opacity-50"><TrashIcon className="w-8 h-8"/>
                    <div className="text-xs">current</div>
                </span>
                }
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>email</th>
            <th>createdAt</th>
            <th><LightningBoltIcon className="ml-2"/></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
