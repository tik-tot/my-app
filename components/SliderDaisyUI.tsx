"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cn from "classnames";

const data = [
  {
    id: 1,
    title: "HBCD Knowledgebase",
    image: "/slide1.png",
    href: "/kHbcd",
    desc: "ฐานความรู้เกี่ยวกับ HBCD",
  },
  {
    id: 2,
    title: "PFAS Knowledgebase",
    image: "/slide4.png",
    href: "/kPfas",
    desc: "ฐานความรู้เกี่ยวกับ PFAS",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  const size = data.length as number;
  const hoverColor =
    currentSlide % size === 0 ? "hover:bg-blue-600/70" : "hover:bg-sky-600/70";
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-10rem)] max-h-full w-auto"
        style={{ backgroundImage: `url(${data[currentSlide].image})` }}
      >
        <div className="hero-overlay bg-gradient-to-r from-yellow-300/40 via-gray-500/40 to-pink-500/40"></div>
        <div className="hero-content text-center text-neutral-content">
          {/* <div className="hero-content bg-opacity-60"></div>
        <div className="bg-opacity-1 text-center text-neutral-content"> */}
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {data[currentSlide].title}
            </h1>
            <p className="mb-5 block text-lg text-sky-400">
              {data[currentSlide].desc}
            </p>
            <Link href={data[currentSlide].href}>
              <button
                className={cn({
                  "group align-middle text-xl rounded-lg border-2 text-white py-4 inline-block px-8 shadow-md shadow-blue-200":
                    true,
                  [`${hoverColor}`]: true,
                })}
              >
                เริ่มต้นเรียนรู้
                <span className="inline-block transform transition-all group-hover:duration-150 group-hover:translate-x-1">
                  ⏩
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-max relative z-0">
        {/* Selected Control */}
        <div className="absolute -top-10 left-[calc(50vw-2rem)] text-center  bg-violet-50/30 rounded-xl">
          {data.map((item, idx) => (
            <span key={`${idx}-${item.id}`}>
              {item.href && (
                <Link href={data[idx].href}>
                  <span
                    title={data[idx].title}
                    className="mx-1 text-xs hover:scale-110 rounded-full transition-all duration-300"
                  >
                    {currentSlide === idx ? "🔵" : "⚪"}
                  </span>
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
