import Divider from "@/components/common/divider";
import {
  Boss,
  Burberry,
  Catier,
  Gucci,
  Prada,
  Tifany,
} from "@/components/icons";

export default function Logos() {
  return (
    <section className="flex flex-col items-center px-4">
      <Divider className="w-[124px]" />
      <div className="grid grid-cols-3 my-[35px] gap-5 items-center justify-center max-w-[400px]">
        <Prada />
        <Burberry />
        <Boss />
        <Catier />
        <Gucci />
        <Tifany />
      </div>
      <Divider className="w-[124px]" />
    </section>
  );
}
