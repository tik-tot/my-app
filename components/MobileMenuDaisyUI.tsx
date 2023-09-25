"use client";
// navbar using daisyUI https://daisyui.com/components/navbar/
import Link from "next/link";
// to change the menu items --- change the contents in menyTypeData.ts file
import itemsNav from "../types/menuTypeData";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import cn from "classnames";

export default function MobileMenuDaisyUI() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  const handleClick = () => setOpen(false);

  const mobileMenuList = itemsNav.map((e) => {
    if (!e.children) {
      return (
        <li key={"MB" + e.name} onClick={handleClick}>
          <Link href={e.url!}>{e.name}</Link>
        </li>
      );
    } else {
      return (
        <li key={"MB" + e.name} tabIndex={0}>
          <details>
            <summary>{e.name}</summary>
            <ul className="p-2">
              {e.children.map((ec) => (
                <li key={"MB" + ec.name} onClick={handleClick}>
                  <Link href={ec.url}>{ec.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      );
    }
  });
  return (
    <div className={cn({ dropdown: true, "dropdown-open": open })} ref={ref}>
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>

      <ul
        tabIndex={0}
        className={cn({
          "menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-60 lg:hidden":
            true,
          hidden: !open,
        })}
      >
        {mobileMenuList}
      </ul>
    </div>
  );
}
