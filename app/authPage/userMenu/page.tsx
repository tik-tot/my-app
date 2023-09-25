import { getAuthSession } from "@/utils/auth";
import ProfilePage from "./components/ProfilePage";
import NeedToLogin from "@/components/NeedToLogin";

// later---> usermenu update may use: https://next-auth.js.org/getting-started/client

const UserMenuPage = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return (<NeedToLogin />);
  } else {
    return (
      <>
        <div className="m-auto text-center text-white p-4 my-4 text-2xl bg-blue-500">
          Profile
        </div>
        <ProfilePage user={session.user} />
      </>
    );
  }
};
export default UserMenuPage;
