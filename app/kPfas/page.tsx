import Featured from "@/components/Featured";
import { kPFASMenu } from "@/types/menuTypeData";

export default function Page() {
  return (
    <Featured title="PFAS" knowledgeItems={kPFASMenu} bgColor="sky-500" />
  )
}
