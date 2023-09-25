import { KnowledgeItem } from "@/types/menuTypeData";
import Link from 'next/link'
import Image from "next/image";
import cn from 'classnames';

const Featured = ({title, knowledgeItems, bgColor}: {title:string, knowledgeItems:KnowledgeItem[], bgColor?:string}) => {
  if (!bgColor)  
    bgColor= "blue-500";
  return (
    <>
    <div className={cn({"w-screen overflow-x-scroll":true, [`text-${bgColor}`]:true})}>
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {knowledgeItems.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[50vh] flex flex-col items-center justify-around p-4 hover:bg-violet-50/60 transition-all duration-300 md:w-[50vw] xl:w-[25vw] xl:h-[50vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[45deg] transition-all duration-500">
                <Image src={item.img} alt="a featured image" fill sizes="(max-width: 768px) 100vw,(max-width: 1024px) 50vw, 25vw" className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.name}</h1>
              <p className="p-4 2xl:p-8 text-gray-700">{item.desc}</p>
              {item.url && <Link href={item.url}>
              <button className={cn({"text-white p-2 rounded-md hover:transition-all ease-in-out duration-300 hover:scale-125":true, [`bg-${bgColor}`]:true})}>
                ดูรายละเอียด
              </button></Link> }
            </div>
          </div>
        ))}
      </div>
      </div></>
  );
};

export default Featured;

