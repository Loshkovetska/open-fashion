import Divider from "@/components/common/divider";
import Socials from "@/components/common/socials";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="py-6 px-14 flex flex-col items-center">
        <Socials />
        <Divider className="w-full max-w-[124px] mx-auto mb-5 mt-6" />
        <Link
          href="mailto:support@openui.design"
          className="text-center text-4"
        >
          support@openui.design
        </Link>
        <Link
          href="tel:+60 825 876"
          className="text-center"
        >
          +60 825 876{" "}
        </Link>
        <span className="text-center">08:00 - 22:00 - Everyday</span>
        <Divider className="w-full max-w-[124px] mx-auto mt-5" />
      </div>
      <div className="bg-gray-opacity py-3 px-6">
        <p className="text-sm leading-5 text-center">
          Copyright© OpenUI All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
