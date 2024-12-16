import { Instagram, Twitter, Youtube } from "@/components/icons";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-8">
      <Link
        href="https://twitter.com/"
        target="_blank"
      >
        <Twitter />
      </Link>
      <Link
        href="https://twitter.com/"
        target="_blank"
      >
        <Instagram />
      </Link>
      <Link
        href="https://twitter.com/"
        target="_blank"
      >
        <Youtube />
      </Link>
    </div>
  );
}
