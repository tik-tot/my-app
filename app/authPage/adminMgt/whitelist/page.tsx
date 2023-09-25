import { Suspense } from "react";
import { getAuthSession } from "@/utils/auth";
import type { whitelistUser } from "@prisma/client";
import TableWhitelist from "../components/TableWhitelist";
import AddWhitelist from "../components/AddWhitelist";
import AccessDenied from "@/components/AccessDenied";
import Loading from "../../../loading";
import NeedToLogin from "@/components/NeedToLogin";

// later---> usermenu update may use: https://next-auth.js.org/getting-started/client

export const revalidate = 30;
const getWhitelist = async () => {
  const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/whitelist`;
  const res = await fetch(serverUrl);

  if (!res.ok) {
    return undefined;
  }
  return res.json();
};

const WhitelistPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return (<NeedToLogin />)
  } 
  if (session?.user && !session?.user.isAdmin) {
     <AccessDenied /> 
  }
  else {
    const whitelist: whitelistUser[] = await getWhitelist();

    return (
      <div data-theme="light" className="">
        {session.user.isAdmin && (
           <div className="flex flex-col gap-2">
            <AddWhitelist />
            <Suspense fallback={<Loading />}>
                <TableWhitelist whitelist={whitelist} currentEmail={session.user.email!}/>
            </Suspense>
           </div>
        )}
      </div>
    );  
  }
};
export default WhitelistPage;