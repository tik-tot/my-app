import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";
import HiddenDanger from "./HiddenDanger";
import Reference from "./Reference";
import Convention from "./Convention";
import Hbcd from "./Hbcd";
import Eps from "./Eps";

export const Article = () => {
  return (
    <div>
      <header className="leading-relaxed">
        <h1
          id="intro"
          className="text-blue-500 dark:text-blue-300 text-3xl text-right leading-relaxed"
        >
          อนุสัญญาสตอกโฮล์มว่าด้วยสารมลพิษที่ตกค้างยาวนาน กับสาร HBCD ในโฟม EPS
          เกรดไม่ลามไฟ
        </h1>
        <h2 className="text-2xl text-right leading-relaxed">
          (Stockholm Convention on Flame Retardant EPS Foam)
        </h2>
        <p className="text-right p-2">โดย ศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ</p>
      </header>
      <div className="mt-4 text-right">
        <Link
          className="text-sm hover:text-blue-500"
          href={`/pdf/HBCDandSC_Brief.pdf`}
          download
          target="_blank"
        >
          <span className="inline-flex items-baseline">
            <DownloadIcon className="text-blue-500" />
            &nbsp;download ไฟล์ pdf
          </span>
        </Link>
      </div>

      <section className="mx-0">
        <em className="mt-4 ml-auto block w-full md:w-10/12 text-right text-sm">
          สาร HBCD เป็นสารมลพิษที่ตกค้างยาวนาน สารนี้เป็นสารอันตราย
          อาจทำให้เกิดภาวะบกพร่องทางสมอง
          ระบบสืบพันธุ์และระบบภูมิคุ้มกันทำงานผิดปกติ
          ซึ่งไม่เพียงแต่เป็นอันตรายต่อผู้ได้รับโดยตรงแต่ยังส่งต่อถึงลูกหลานได้
          สาร HBCD
          ส่วนใหญ่อยู่ในโฟมโพลิสไตรีนเกรดไม่ลามไฟที่ใช้เป็นฉนวนอาคารที่ส่วนใหญ่ยังอยู่ระหว่างการใช้งาน
          ซึ่งหากไม่ระวังให้ดี สาร HBCD
          จะเล็ดลอดออกมาได้เมื่อมีการซ่อมแซมหรือรื้อถอนอาคาร
          อนุสัญญาสตอกโฮล์มกำหนดให้ประเทศภาคีสมาชิก ต้องจัดการสารนี้อย่างเหมาะสม
          เพื่อป้องกันไม่ให้สารนี้เล็ดลอดออกสู่สิ่งแวดล้อมและก่อผลเสียต่อสุขภาพอนามัยในระยะยาว
        </em>
      </section>
      <HiddenDanger baseURL="/kHbcd/stockholms"/>
      <Convention  baseURL="/kHbcd/stockholms"/>
      <Hbcd />
      <Eps />
      <Reference />
    </div>
  );
};
