import Featured from "@/components/Featured";
import { kHBCDMenu } from "@/types/menuTypeData";

export default function Page() {
  return (
    <Featured title="HBCD" knowledgeItems={kHBCDMenu} bgColor="blue-500" />
  )
}
