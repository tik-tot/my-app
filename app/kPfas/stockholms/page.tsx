import {Article} from "./Article";
import TableOfContents from "@/components/toc/TableOfContents";
import TocMobile from "@/components/toc/TocMobile";
import { Heading } from "@/components/toc/tocType";

const Page = () => {
  //for now we use manual data
  const headingsData: Heading[] = [
    { level: 2, text: "เกริ่นนำ", id: "intro" },
    {
      level: 2,
      text: "สาร PFASs ภัยเงียบใกล้ตัว",
      id: "hiddenDanger",
    },
    {
      level: 2,
      id: "convention",
      text: "อนุสัญญาสตอกโฮล์ม",
    },
  ];

  return (
    <div className="px-6 md:px-4 lg:px-2 container max-w-7xl m-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden md:block col-span-2">
          <div className="sticky top-4">
            <TableOfContents headings={headingsData} />
          </div>
        </div>
        <main className="prose prose-p:block col-span-12 md:col-span-10">
          <Article />
        </main>
        <TocMobile headings={headingsData} />
      </div>
    </div>
    
  );
};

export default Page;