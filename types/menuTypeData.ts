export type KnowledgeItem = {
  id: string;
  name: string;
  desc?: string;
  img?: string;
  url: string;
};

export type NavItem = {
  name: string;
  children?: { name: string; url: string, desc?:string }[] | KnowledgeItem[];
  url?: string;
};

const kHBCDMenu: KnowledgeItem[] = [
  {
    id: "hbcd1",
    name: "เกี่ยวกับ HBCD",
    desc: "ความรู้พื้นฐานเกี่ยวข้องกับ HBCD",
    img: "/kmMenu/about.png",
    url: "/kHbcd/about",
  },
  {
    id: "hbcd2",
    name: "Stockholms Convention",
    desc: "ความเป็นมาและกฏหมายที่เกี่ยวข้องกับ Stockholms Convention",
    img: "/kmMenu/stockholm.png",
    url: "/kHbcd/stockholms",
  },
  {
    id: "hbcd3",
    name: "HBCD Guidelines",
    desc: "แนวปฏิบัติเกี่ยวกับสาร HBCD ในผลิตภัณฑ์",
    img: "/kmMenu/guideline.png",
    url: "/kHbcd/guideline",
  },
  {
    id: "hbcd4",
    name: "เอกสารการอบรม HBCD",
    desc: "เอกสารการอบรมการสร้างความตระหนักเกี่ยวกับ HBCD",
    img: "/kmMenu/event.png",
    url: "/kHbcd/eventDocs",
  },
];

const kPFASMenu: KnowledgeItem[] = [
  {
    id: "pfas1",
    name: "เกี่ยวกับ PFAS",
    desc: "ความรู้พื้นฐานเกี่ยวข้องกับ PFAS",
    img: "/kmMenu/about.png",
    url: "/kPfas/about",
  },
  {
    id: "pfas2",
    name: "Stockholms Convention",
    desc: "ความเป็นมาและกฏหมายที่เกี่ยวข้องกับ Stockholms Convention",
    img: "/kmMenu/stockholm.png",
    url: "/kPfas/stockholms",
  },
  {
    id: "pfas3",
    name: "PFAS Guidelines",
    desc: "แนวปฏิบัติเกี่ยวกับสาร PFAS ในผลิตภัณฑ์",
    img: "/kmMenu/guideline.png",
    url: "/kPfas/guideline",
  },
  {
    id: "pfas4",
    name: "เอกสารการอบรม PFAS",
    desc: "เอกสารการอบรมการสร้างความตระหนักเกี่ยวกับ PFAS",
    img: "/kmMenu/event.png",
    url: "/kPfas/eventDocs",
  },
];

const itemsNav: NavItem[] = [
  { name: "Home", url: "/" },
  {
    name: "Knowledge HBCD",
    children: kHBCDMenu,
  },
  {
    name: "Knowledge PFAS",
    children: kPFASMenu,
  },
  {
    name: "DBs",
    children: [
      { name: "HBCD", url: "/db/HBCD", desc:  "ฐานข้อมูลห้องเย็นที่อาจมี HBCD ในโครงการ" },
      { name: "PFAS", url: "/db/PFAS", desc: "ฐานข้อมูลแหล่งที่ตั้งน้ำยาดับเพลิงที่มี PFAS ที่พบในโครงการ" },
    ],
  },
];

export default itemsNav;
export { kHBCDMenu, kPFASMenu };
