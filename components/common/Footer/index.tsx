import Link from "next/link";
import Divider from "../Divider";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="">
      <div className="py-6 px-14 flex flex-col items-center">
        <Socials />
        <div className="w-full max-w-[124px] m-auto mb-[20px] mt-6">
          <Divider />
        </div>
        <Link
          href={"mailto:support@openui.design"}
          className="text-center text-[16px]"
        >
          support@openui.design
        </Link>
        <Link href="tel:+60 825 876" className="text-center">
          +60 825 876{" "}
        </Link>
        <span className="text-center">08:00 - 22:00 - Everyday</span>
        <div className="w-full max-w-[124px] m-auto  mt-[20px]">
          <Divider />
        </div>
      </div>
      <div className="bg-grayOpacity py-3 px-6">
        <p className="text-sm leading-5 text-center">
          Copyright© OpenUI All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
