import HiddenDanger from "../../kHbcd/stockholms/HiddenDanger";
import Convention from "../../kHbcd/stockholms/Convention";

export const Article = () => {
  return (
    <div>
      <header className="leading-relaxed">
        <h1
          id="intro"
          className="text-blue-500 dark:text-blue-300 text-3xl text-right leading-relaxed"
        >
          อนุสัญญาสตอกโฮล์มว่าด้วยสารมลพิษที่ตกค้างยาวนาน กับสาร PFAS ในโฟมดับเพลิง
        </h1>
        <h2 className="text-2xl text-right leading-relaxed">
          (Stockholm Convention on PFAS)
        </h2>
        <p className="text-right p-2">โดย ศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ</p>
      </header>

      <section className="mx-0">
        <em className="mt-4 ml-auto block w-full md:w-10/12 text-right text-sm">
          สาร PFAS เป็นสารมลพิษที่ตกค้างยาวนาน สารนี้เป็นสารอันตราย
          อาจทำให้เกิดภาวะบกพร่องทางสมอง
          ระบบสืบพันธุ์และระบบภูมิคุ้มกันทำงานผิดปกติ
          ซึ่งไม่เพียงแต่เป็นอันตรายต่อผู้ได้รับโดยตรงแต่ยังส่งต่อถึงลูกหลานได้
          อนุสัญญาสตอกโฮล์มกำหนดให้ประเทศภาคีสมาชิก ต้องจัดการสารนี้อย่างเหมาะสม
          เพื่อป้องกันไม่ให้สารนี้เล็ดลอดออกสู่สิ่งแวดล้อมและก่อผลเสียต่อสุขภาพอนามัยในระยะยาว
        </em>
      </section>
      <HiddenDanger baseURL="/kPfas/stockholms"/>
      <Convention  baseURL="/kPfas/stockholms"/>
    </div>
  );
};
