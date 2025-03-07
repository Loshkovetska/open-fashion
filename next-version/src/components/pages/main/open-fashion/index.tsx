import Divider from "@/components/common/divider";
import { About, Logo } from "@/components/icons";
import { OPEN_FASHION_LIST } from "@/lib/constants";
import Image from "next/image";

export default function OpenFashion() {
  return (
    <section className="bg-[#f2f2f280] py-[28px] px-4 ">
      <div className="flex flex-col items-center justify-center max-w-[285px] mx-auto">
        <Logo />
        <p className="text-base mt-4 text-center tracking-[0.14px] leading-5 mb-[5px]">
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </p>
        <Divider className="max-w-[124px] w-full" />
      </div>
      <div className="grid grid-cols-auto w-full mx-auto max-w-[720px] mt-4 gap-4">
        {OPEN_FASHION_LIST?.map((c, i) => (
          <div
            className="flex flex-col items-center justify-center"
            key={i}
          >
            <Image
              src={c.src}
              alt={c.text}
              className="w-14 h-[36px] mb-3"
              width={56}
              height={36}
            />
            <p className="text-center text-[13px] leading-5">{c.text}</p>
          </div>
        ))}
      </div>
      <About className="mx-auto mt-8" />
    </section>
  );
}
