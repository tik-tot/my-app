import { getAuthSession } from "@/utils/auth";
import type { User } from "@prisma/client";
import FilteredTableUsers from "../components/FilterTableUsers";
import AccessDenied from "@/components/AccessDenied";
import NeedToLogin from "@/components/NeedToLogin";

// later---> usermenu update may use: https://next-auth.js.org/getting-started/client

export const revalidate = 30;
const getUsers = async (query: string|undefined) => {
  let serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/user`;
  if (query !== "") serverUrl =  `${serverUrl}?query=${query}`
  const res = await fetch(serverUrl);

  if (!res.ok) {
    return undefined;
  }
  return res.json();
};

const UsersPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return (<NeedToLogin />);
  } 
  if (session?.user && !session?.user.isAdmin) {
    <AccessDenied /> 
   }
  else {

    const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10

  const search =
    typeof searchParams.query === 'string' ? searchParams.query : undefined

    const users: User[] = await getUsers(search);

    return (
      <div data-theme="light" className="m-auto">
        {session.user.isAdmin && (
          // <div className="flex flex-col items-stretch md:flex-row gap-2">
            <FilteredTableUsers users={users} search={search}/>
          // </div>
        )}
      </div>
    );  
  }
};
export default UsersPage;