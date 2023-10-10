import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

const Button = ({
  color,
  children,
  style = "",
  isLink = false,
  href = "",
  onClick,
}: {
  children: Array<ReactNode> | ReactNode;
  color: string;
  style: string;
  isLink?: boolean;
  href?: string;
  onClick?: () => void;
}) => {
  const styleCss = color == "black" ? "bg-black text-white" : "";

  const classList = classNames(
    "flex items-center justify-center uppercase py-4 px-5 text-[16px] gap-5 tracking-[1px] cursor-pointer hover:opacity-50 transition-all duration-300",
    styleCss,
    style
  );

  if (isLink) {
    return (
      <Link href={href} className={classList}>
        {children}
      </Link>
    );
  }
  return (
    <div className={classList} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
