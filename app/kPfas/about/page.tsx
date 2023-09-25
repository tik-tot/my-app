import ScrollLink from "@/components/toc/ScrollLink";
import { NextPage } from "next";
import React from "react";
const Page: NextPage = () => {
  return (
    <>
      <div
        className="grid place-content-center min-h-screen bg-gray-900 text-gray-50"
        id="section-0"
      >
        <section className="flex flex-col items-center gap-4">
          {/* add href with hash to an elementId */}
          <ScrollLink className="btn" href="#section-1">
            Scroll to Section 1
          </ScrollLink>
          <ScrollLink className="btn" href="#section-2">
            Scroll to Section 2
          </ScrollLink>
        </section>
      </div>
      {/* add id to section */}
      <section
        className="grid place-content-center min-h-screen bg-gray-100"
        id="section-1"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Section 1</h2>
          <ScrollLink className="btn" href="#section-0">
            Back to Top
          </ScrollLink>
          <ScrollLink className="btn" href="#section-2">
            To next section
          </ScrollLink>
        </div>
      </section>
      <section
        className="grid place-content-center min-h-screen bg-gray-100"
        id="section-2"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Section 2</h2>
          <ScrollLink className="btn" href="#section-0">
            Back to Top
          </ScrollLink>
          <ScrollLink className="btn" href="#section-1">
            Back to Previous
          </ScrollLink>
          <ScrollLink className="btn" href="#section-2">
            Scroll to Section 2
          </ScrollLink>
        </div>
      </section>
    </>
  );
};
export default Page;
