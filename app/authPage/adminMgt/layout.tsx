import { Metadata } from "next";
import AdminNavLink from "./components/AdminNavLink";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
    <div className="m-auto text-center text-white p-4 my-4 text-2xl bg-blue-500/60">
      Admin
    </div>
    <div className="md:grid md:grid-cols-3 lg:grid-cols-5 p-4 md:p-6 lg:p-12 max-w-full md:gap-4">
      <aside className="border-b-blue-400 border-b-2 md:border-b-0 xs:flex xs:flex-row md:col-span-1 border-r-2 border-blue-400 pr-2 md:h-screen">
        <h1 className="text-xl">
          การจัดการรายการผู้ใช้ (Manage Users)
        </h1>
        <ul className="sticky top-4 my-4 ml-4 flex flex-col gap-2">
          <li className="hover:text-blue-600 my-2 w-full" title="White list email">
            <AdminNavLink segLink="whitelist">
              รายการ email ที่ได้รับอนุญาต
            </AdminNavLink>
          </li>
          <li className="hover:text-blue-600 my-2 w-full">
            <AdminNavLink segLink="userlist">รายการผู้ใช้ (Users)</AdminNavLink>
          </li>
        </ul>
      </aside>
      <div className="md:col-span-2 lg:col-span-4">{children}</div>
    </div>
    </>
  );
}
