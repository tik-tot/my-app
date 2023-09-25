import SearchBar from "./SearchBar";
import TableUsers from "./TableUsers";
import type { User } from "@prisma/client";
import { Suspense } from "react";
import Loading from "../../../loading";
export default function FilteredTableUsers({
  users,
  search,
}: {
  users: User[];
  search: string | undefined;
}) {
  return (
    <div>
      <SearchBar search={search} />
      <Suspense fallback={<Loading />}>
        <TableUsers users={users} />
      </Suspense>
    </div>
  );
}
