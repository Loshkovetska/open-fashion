import Divider from "@/components/common/divider";
import HeadLine2 from "@/components/common/headline2";

export default function TopTitle({ title }: { title: string }) {
  return (
    <div className="w-fit flex flex-col items-center justify-center mx-auto gap-2 mb-5">
      <HeadLine2>{title}</HeadLine2>
      <Divider />
    </div>
  );
}
