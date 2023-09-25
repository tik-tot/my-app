"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { Heading } from "./tocType";

type Props = {
  headings: Heading[];
};

const TableOfContents = (props: Props) => {
  const { headings } = props;
  const [activeId, setActiveId] = useState("");
  const scrollRef = useRef(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")!;
          if (entry.isIntersecting) {
            setActiveId(id);
            scrollRef.current = window.scrollY;
          } else {
            const diff = scrollRef.current - window.scrollY;
            const isScrollingUp = diff > 0;
            const currentIndex = headings.findIndex((h) => h.id === id);
            const prevEntry = headings[currentIndex - 1];
            const prevId = prevEntry?.id;
            if (isScrollingUp && prevId) {
              setActiveId(id);
            }
          }
        });
      },
      {
        rootMargin: "0% 0% -85% 0%",
      }
    );
    headings.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) {
        observer.observe(elem);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-theme="light">
      <div className="flex flex-row justify-center align-middle tracking-widest ml-4 mt-8 text-gray-700 hover:underline hover:underline-offset-4" 
      onClick={()=>{window.scrollTo({ top: 0, left: 0 });}}
      ><DoubleArrowUpIcon />Top</div>
      <h2 className="uppercase font-bold tracking-widest my-2 text-accent">
        Table Of Contents
      </h2>
      <ul>
        {headings.map((heading) => {
          const id = heading.id;
          const activeClass = activeId === id ? "link-accent" : "";
          const indentation = {
            3: " pl-4",
            4: " pl-8",
          };
          const level = heading.level as keyof typeof indentation;
          const paddingClass = indentation[level] ?? "";
          return (
            <li key={id} onClick={() => setActiveId(id)}>
              <Link
                href={`#${id}`}
                className={
                  "link-hover transition-all my-2 " +
                  activeClass +
                  paddingClass
                }
              >
                {heading.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;