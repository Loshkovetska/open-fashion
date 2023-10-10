import Twitter from "../../../assets/icons/Twitter.svg";
import Youtube from "../../../assets/icons/YouTube.svg";
import Instagram from "../../../assets/icons/Instagram.svg";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <Link href={"https://twitter.com/"} target="_blank">
        <Twitter />
      </Link>
      <Link href={"https://twitter.com/"} target="_blank">
        <Instagram />
      </Link>
      <Link href={"https://twitter.com/"} target="_blank">
        <Youtube />
      </Link>
    </div>
  );
};

export default Socials;
