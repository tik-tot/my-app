"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import cn from "classnames";

const UserLinks = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  const handleClick = () => setOpen(false);

  if (status !== "authenticated") {
    return <Link href="/login">Login</Link>;
  } else {
    let usrImg = session?.user?.image;
    if (!usrImg) usrImg = "/userAvatar.png";

    return (
      <div>
        <div
          className={cn({
            "dropdown dropdown-bottom dropdown-end": true,
            "dropdown-open": open,
          })}
          ref={ref}
        >
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image
              src={usrImg}
              width={40}
              height={40}
              className="rounded-full"
              alt="user image"
              title={session?.user?.name || "user"}
            />
          </label>
          <ul
            tabIndex={0}
            className={cn({
              "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48":
                true,
              hidden: !open,
            })}
          >
            <li onClick={handleClick}>
              <Link href="/authPage/userMenu">Profile</Link>
            </li>
            {session.user.isAdmin && 
              <li onClick={handleClick}>
                <Link href="/authPage/adminMgt">Admin</Link>
              </li>
            }
            <li onClick={handleClick}>
              <span className="cursor-pointer" onClick={() => signOut({ callbackUrl: '/' })}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
export default UserLinks;
