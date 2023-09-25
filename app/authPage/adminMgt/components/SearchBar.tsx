// example from: https://github.com/HamedBahram/next-pagination/tree/main

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useDebounce } from "use-debounce";

const SearchBar = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/authPage/adminMgt/userlist`);
    } else {
      router.push(`/authPage/adminMgt/userlist?query=${query}`);
    }
  }, [query,router]);

  return (
    <div className="relative rounded-md shadow-sm max-w-xl w-full mx-auto my-5 md:mt-0">
      <div className="flex items-stretch">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 self-start">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        value={text}
        name="searchInput"
        placeholder="Search users..."
        onChange={(e) => setText(e.target.value)}
        className="w-full block rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
      />
      </div>
    </div>
  );
};

export default SearchBar;
