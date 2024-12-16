import classNames from "classnames";
import Link from "next/link";

type ButtonPropType = {
  className?: string;
  href?: string;
  onClick?: () => void;
} & React.PropsWithChildren;

const Button = ({ children, className, href, onClick }: ButtonPropType) => {
  const classList = classNames(
    "w-full flex items-center justify-center uppercase py-4 px-5 text-4 gap-5 tracking-[1px] cursor-pointer hover:opacity-50 transition-all duration-300 bg-black text-white",
    className || ""
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classList}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={classList}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
