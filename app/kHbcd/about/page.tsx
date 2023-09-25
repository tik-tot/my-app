import Article from "./Article";
import TableOfContents from "@/components/toc/TableOfContents";
import TocMobile from "@/components/toc/TocMobile";
import { Heading } from "@/components/toc/tocType";

const Page = () => {
  //for now we use manual data
  const headingsData: Heading[] = [
    {
      level: 2,
      text: "First",
      id: "first",
    },
    {
      level: 2,
      text: "Second",
      id: "second",
    },
    {
      level: 3,
      id: "h3-heading",
      text: "H3 Heading",
    },
    {
      level: 4,
      id: "h4-heading",
      text: "H4 Heading",
    },
    {
      level: 2,
      text: "Third",
      id: "third",
    },
    {
      level: 2,
      text: "Fourth heading",
      id: "fourth-heading",
    },
  ];
  return (
    <div className="px-6 md:px-4 lg:px-2 container max-w-7xl m-auto ">
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden md:block col-span-2">
          <div className="sticky top-4">
            <TableOfContents headings={headingsData} />
          </div>
        </div>
        <main className="prose col-span-12 md:col-span-10">
          <Article />
        </main>
        </div>
        <TocMobile headings={headingsData} />
    </div>
  );
};

export default Page;