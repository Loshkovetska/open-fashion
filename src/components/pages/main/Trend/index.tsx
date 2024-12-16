import HeadLine2 from "@/components/common/headline2";
import { TREND_TAGS } from "@/lib/constants";

export default function Trend() {
  return (
    <section className="py-16 px-4 max-w-[1280px] mx-auto">
      <div className="w-fit flex flex-col items-center justify-center mx-auto">
        <HeadLine2>@trending</HeadLine2>
      </div>
      <div className="flex flex-wrap gap-[10px] mt-2 items-center">
        {TREND_TAGS?.map((c) => (
          <span
            className="block px-[10px] py-2 rounded-[30px] bg-[#F9F9F9]"
            key={c}
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
