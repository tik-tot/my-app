import Link from "next/link";
import Image from "next/image";
// import { BsQuote } from "react-icons/bs";
import { QuoteIcon } from '@radix-ui/react-icons'

export default function Hbcd() {
  const baseURL = "/kHbcd/stockholms"
  return (
    <section>
      <div className="m-auto">
        <blockquote id="hbcd">
          <QuoteIcon className="text-slate-400 w-6 h-6 dark:text-blue-300/70 rotate-180" />
          <h1 className="text-3xl text-blue-600 font-semibold -mt-3 ml-6">
          สาร HBCD 
          </h1>
        </blockquote>
      </div>
      <p>
      สารเฮกซะโบรโมไซโคลโดเดเคน (Hexabromocyclododecane) หรือสาร HBCD เป็นสารเคมีสังเคราะห์ ที่มนุษย์สร้างขึ้นเพื่อใช้เติมลงในวัสดุที่ลุกเป็นไฟได้ง่ายเพื่อลดความเสี่ยงจากก่ออัคคีภัย เช่น พลาสติกและสิ่งทอ สาร HBCD เป็นสารมลพิษที่ตกค้างยาวนาน ที่ได้ถูกขึ้นบัญชีเป็นสาร POPs ภายใต้อนุสัญญาสตอกโฮล์มมาตั้งแต่ปี ค.ศ. 2013
      </p>
      <div className="text-center m-4">
        <figure>
          <Image src="/shcFig/Figure2.png" width={600} height={600} alt="Figure 2" className="m-auto  bg-slate-100"/>
          <figcaption className="m-auto">
         รูปที่ ๒: โครงสร้างทั่วไปของ HBCD 3 ไอโซเมอร์สเตอริโอหลัก &alpha;-, &beta;- และ &gamma;-HBCD (ประยุกต์จาก PubChem) 
          </figcaption>
        </figure>
      </div>
      <p>
      สาร HBCD (สูตรเคมี C<sub>12</sub>H<sub>18</sub>Br<sub>6</sub>) มีลักษณะเป็นผงสีขาวไม่มีกลิ่น ในทางทฤษฎี HBCD สามารถมีรูปแบบการเรียงตัวในโครงสร้างโมเลกุล (ไอโซเมอร์สเตอริโอ) ได้ 16 แบบ (6 คู่ และ 4 เดี่ยว) ซึ่งแต่ละแบบมีสมบัติทางเคมีฟิสิกส์ที่แตกต่างกัน แต่จากการสำรวจสาร HBCD ที่มีใช้จริงในภาคอุตสาหกรรม พบว่า Technical HBCD ที่สังเคราะห์ขึ้นจะเป็น 1,2,5,6,9,10-HBCD เป็นหลัก ซึ่ง HBCD ชนิดนี้มี 3 คู่ไอโซเมอร์สเตอริโอหลัก ได้แก่ (+/-) &alpha;-, &beta;-, &gamma;- HBCD โดยมีสัดส่วน (+/-) &alpha;-HBCD ประมาณ 9–13% (+/-) &beta;- HBCD ประมาณ 0.5–12% และ (+/-) &gamma;-HBCD ประมาณ 72–90% โดย HBCD ที่ผลิตจากผู้ผลิตแต่ละรายอาจมีสัดส่วน &alpha;-, &beta;-, &gamma;- HBCD แตกต่างกันเล็กน้อย (<Link href={`${baseURL}#ref11`}>Schrenk et al. 2021</Link>) สาร HBCD ที่ใช้ในงานอุตสาหกรรมยังสามารถแบ่งเป็น 2 กลุ่มคือ กลุ่มจุดหลอมเหลวต่ำ (LM หรือ low-melting) สำหรับงานที่ใช้อุณหภูมิต่ำ (เช่น การผลิตโฟมและการทาทับหลังสิ่งทอ) และ กลุ่มจุดหลอมเหลวสูง (HM หรือ high-melting) สำหรับกระบวนการผลิตที่ต้องใช้อุณหภูมิสูง (เช่น งานฉีดขึ้นรูปพลาสติก) โดย HBCD กลุ่ม LM มี &gamma;- HBCD อยู่ประมาณ 70-80% ในขณะที่กลุ่ม HM มี &gamma;- HBCD อยู่มากกว่า 90% (<Link href={`${baseURL}#ref05`}>European Commission 2008</Link>) สาร HBCD มีความหนาแน่นมากกว่าน้ำ และละลายน้ำได้น้อยมาก โดย &gamma;- HBCD ละลายน้ำได้น้อยกว่า &alpha;- และ &beta;-HBCD มาก จึงคาดว่าสาร HBCD ที่รั่วไหลลงสู่แหล่งน้ำจะแยกตัวออกจากน้ำและเกาะติดกับตะกอนดิน (ดู <Link href={`${baseURL}#shcTable1`}>ตารางที่ ๑</Link>)  
      </p>
      <table id="shcTable1" className="m-auto table-auto w-full my-4 md:w-4/5  border-separate border-spacing-x-2">
      <caption className="caption-top">
      ตารางที่ ๑: สมบัติทางฟิสิกส์เคมีที่สำคัญของสาร HBCD (<Link href={`${baseURL}#ref05`}>European Commission 2008</Link>) 
  </caption>
        <thead>
            <tr className="bg-blue-400 dark:bg-slate-500"> <th>คุณสมบัติ</th> <th>&alpha;-HBCD</th> <th>&beta;-HBCD</th> <th>&gamma;- HBCD </th>
            </tr>
        </thead>
        <tbody>
            <tr className="even:bg-blue-200 odd:bg-white dark:even:bg-slate-400 dark:odd:bg-slate-800">
            <td>ความหนาแน่น (กรัม/ลบ.ซม.)</td>
            <td colSpan={3} className="text-center">2.24-2.38</td>
            </tr>
            <tr className="even:bg-blue-200 odd:bg-white dark:even:bg-slate-400 dark:odd:bg-slate-800">
            <td>การละลายน้ำ (ไมโครกรัม/ลิตร) </td>
            <td>48.8±1.9</td>
            <td>14.7±0.5</td>
            <td>2.1±0.2 </td>
            </tr>
            <tr className="even:bg-blue-200 odd:bg-white dark:even:bg-slate-400 dark:odd:bg-slate-800">
            <td>สัมประสิทธิ์กระจายสารในออกทานอลต่อน้ำ (Log Kow) </td>
            <td>5.07</td>
            <td>5.12</td>
            <td>5.47 </td>
            </tr>
            <tr className="even:bg-blue-200 odd:bg-white dark:even:bg-slate-400 dark:odd:bg-slate-800"><td>จุดเดือด (°C)</td><td colSpan={3}  className="text-center">สลายตัวที่ &gt; 190°C </td></tr>
            <tr className="even:bg-blue-200 odd:bg-white dark:even:bg-slate-400 dark:odd:bg-slate-800"><td>ความดันไอ (Pa ที่ 21°C) </td><td colSpan={3}  className="text-center">6.3x10<sup>-5</sup> </td></tr>
        </tbody>
        </table>
      <p>
      สาร HBCD ที่มีการผลิตขึ้นเกือบทั้งหมด (&gt;95%) ใช้เป็นสารหน่วงการติดไฟสำหรับโฟม expanded polystyrene foams (EPS) และโฟม extruded polystyrene foams (XPS) สำหรับใช้เป็นฉนวนในอาคารและสิ่งก่อสร้าง (เช่นคลังสินค้า ห้องคลีนรูม และห้องเย็น ฯลฯ) สาร HBCD บางส่วนยังถูกนำไปใช้เป็นสารหน่วงการติดไฟใน high impact polystyrene (HIPS) สำหรับผลิตชิ้นส่วนเครื่องใช้ไฟฟ้าและอิเล็กทรอนิกส์ (<Link href={`${baseURL}#ref10`}>Rani et al. 2014</Link>; <Link href={`${baseURL}#ref14`}>UNEP 2017</Link>) และทาทับหลังสิ่งทอ (<Link href={`${baseURL}#ref19`}>US EPA 2010</Link>) และผ้าในงานยานยนต์ (<Link href={`${baseURL}#ref07`}> Ministry of Environment and Food of Denmark 2018</Link>) นอกจากนี้ ยังมีรายงานว่ามีการใช้ HBCD เป็นฟลักซสำหรับการบัดกรีโลหะ (<Link href={`${baseURL}#ref20`}>US EPA 2020</Link>) สำหรับในประเทศไทย ในอดีตเคยมีการใช้ HBCD เป็นสารหน่วงการติดไฟในโฟม EPS เกรดไม่ลามไฟ (Self-Extinguishing EPS หรือ SE-EPS) (<Link href={`${baseURL}#ref08`}>MTEC 2020</Link>) 
      </p>
    <p>
    สาร HBCD ที่ใช้ในเชิงพาณิชย์ มีชื่อทางการค้าแตกต่างกันตามผู้ผลิตและเกรดของสินค้า ตัวอย่างชื่อที่ทางการค้าที่เคยมีการรายงานได้แก่ Bromkal 73-6CD; Nikkafainon CG 1; Pyroguard F 800; Pyroguard SR 103; Pyroguard SR 103A; Pyrovatex 3887; Great Lakes CD-75P™; Great Lakes CD-75; Great Lakes CD75XF; Great Lakes CD75PC (compacted); Dead Sea Bromine Group Ground FR 1206 I-LM; Dead Sea Bromine Group Standard FR 1206 I-LM; Dead Sea Bromine Group Compacted FR 1206 I-CM; FR-1206; HBCD ILM; HBCD IHM (<Link href={`${baseURL}#ref17`}>UNEP 2021b</Link>) 
    </p>
    <p>สาร HBCD เป็นสารเคมีที่เป็นอันตราย สลายตัวในสิ่งแวดล้อมได้ยาก สามารถสะสมและเพิ่มปริมาณสูงขึ้นในสิ่งมีชีวิต ทำให้สาร HBCD ที่รั่วไหลลงสู่สิ่งแวดล้อมสามารถไหลผ่านห่วงโซ่อาหารทั้งในน้ำและบนบก จากด้านล่างสู่ด้านบนของห่วงโซ่อาหารได้ง่าย แม้จะเป็นการรั่วไหลเพียงระดับต่ำๆ (<Link href={`${baseURL}#ref20`}>US EPA 2020</Link>) เมื่ออยู่ในสิ่งแวดล้อม HBCD สลายตัวได้ช้ามาก โดยอัตราการสลายตัวจะเร็วกว่าเมื่ออยู่ในตะกอนดินเมื่อเทียบกับในดิน เร็วกว่าเมื่ออยู่ในสภาวะไร้ออกซิเจนเมื่อเทียบสภาวะที่มีออกซิเจน เร็วกว่าเมื่อมีเชื้อจุลินทรีย์ช่วยย่อยเทียบกับไม่มี และสลายตัวในอัตราที่ไม่เท่ากัน (&alpha;-HBCD สลายตัวช้ากว่า &gamma;- และ &beta;-HBCD) (<Link href={`${baseURL}#ref20`}>US EPA 2020</Link>) และเมื่อสาร HBCD เข้าไปสะสมในสิ่งมีชีวิตพบว่าส่วนใหญ่จะแปรสภาพไปเป็น &alpha;-HBCD ทั้งนี้เชื่อว่าอาจเป็นผลมาจากสมบัติทางฟิสิกส์เคมีที่แตกต่างกันของสาร HBCD แต่ละไอโซเมอร์สเตอริโอ และจากการแปรสภาพจาก &gamma;- และ &beta;- ไปเป็น &alpha;-HBCD เมื่อได้รับความร้อนและเมื่อถูกย่อยสลายในสิ่งมีชีวิต (<Link href={`${baseURL}#ref09`}>NICNAS 2012</Link>; <Link href={`${baseURL}#ref01`}>M. A. E. Abdallah et al. 2008</Link>)
    </p>
    <p>
    ปัจจุบันได้มีการตรวจพบว่าสาร HBCD ได้แพร่กระจายไปทั่วโลก โดยพบการสะสมในปริมาณมากในสัตว์ผู้ล่าที่อยู่ด้านบนของห่วงโซ่อาหาร (Top predators) (<Link href={`${baseURL}#ref13`}>UNEP 2015</Link>) ทั้งยังมีรายงานตรวจพบสาร HBCD ในมนุษย์ ซึ่งเป็นสัตว์ผู้ล่าที่อยู่ด้านบนสุดของห่วงโซ่อาหาร ทั้งในเนื้อเยื่อไขมัน ในเลือด/น้ำเหลือง น้ำนมมารดา เส้นผม รกและเนื้อเยื่อทารกในครรภ์ (<Link href={`${baseURL}#ref20`}>US EPA 2020</Link>; <Link href={`${baseURL}#ref03`}>Brandon et al. 2019</Link>) โดยมนุษย์มีโอกาสได้รับสารนี้ ทั้งทางตรง (จากการทำงาน) และทางอ้อม (จากอาหารและสิ่งแวดล้อม รวมถึงฝุ่น ที่ปลดปล่อยออกจากสิ่งของเครื่องใช้ที่มีสาร HBCD ในตัว) โดยสาร HBCD สามารถเข้าสู่ร่างกายมนุษย์ ได้ทั้งทางปากโดยการบริโภคอาหารและฝุ่นที่มีสาร HBCD ปนเปื้อน ทางจมูกโดยการหายใจนำอนุภาคฝุ่นที่มีสาร HBCD ปะปน/เกาะติดอยู่ และทางผิวหนังโดยการดูดซึมสาร HBCD จากฝุ่น สำหรับเด็กและบุคคลทั่วไป เส้นทางหลักในการได้รับสัมผัสสารนี้ ส่วนใหญ่เป็นการได้รับทางอ้อมจากการบริโภคอาหารและฝุ่นที่ปนเปื้อน เด็กทารกยังมีโอกาสได้รับสาร HBCD ผ่านนมแม่ ทั้งยังมีโอกาสได้รับสารนี้ผ่านสายรกตั้งแต่ในอยู่ในครรภ์มารดา (<Link href={`${baseURL}#ref15`}>UNEP 2010</Link>) สำหรับการได้รับสัมผัสทางตรงจากการทำงานที่เกี่ยวข้องกับ HBCD ส่วนใหญ่เกิดจากการได้รับฝุ่น ทั้งที่เป็นฝุ่น HBCD โดยตรงและฝุ่นที่เกิดจากกระบวนการทำงาน (เช่น การตัด การบดย่อยชิ้นส่วนที่มี HBCD ในตัว) (<Link href={`${baseURL}#ref05`}>European Commission 2008</Link>; <Link href={`${baseURL}#ref09`}>NICNAS 2012</Link>; <Link href={`${baseURL}#ref20`}>US EPA 2020</Link>) 
    </p>
    <p>
    สาร HBCD มีความเป็นพิษสูงต่อสิ่งมีชีวิตในน้ำ แต่สำหรับในสัตว์เลี้ยงลูกด้วยนม สาร HBCD มีความเป็นพิษแบบเฉียบพลันในระดับต่ำ แต่เป็นพิษเรื้อรังต่อมนุษย์และสัตว์เลี้ยงลูกด้วยนมในส่วนของระบบต่อมไร้ท่อ ตับ และ ระบบประสาทและสมอง สาร HBCD มีผลต่อระบบการสืบพันธุ์ ก่อภาวะบกพร่องทางสมอง ซึ่งส่งผลต่อพัฒนาการและพฤติกรรม โดยผลบางอย่างสามารถสืบทอดสู่ลูกหลานในรุ่นถัดไปแม้ไม่เคยได้รับสัมผัสสารนี้ได้ (<Link href={`${baseURL}#ref12`}>UNEP 2010</Link>) ในกลุ่มประเทศสหภาพยุโรป สาร HBCD ถูกจัดเป็นสารที่เป็นพิษต่อระบบการสืบพันธุ์ประเภท 2 (Reproductive toxicity, Category 2)       
    </p>
    </section>
  );
}
