import { Logo, Menu, Search, ShopBag } from "@/components/icons";
import { useAppDispatch } from "@/lib/hooks";
import { changeDialogState } from "@/lib/store/globalSlice";
import classNames from "classnames";
import Link from "next/link";

export default function Header({ headerColor }: { headerColor: string }) {
  const dispatch = useAppDispatch();
  return (
    <header
      className={classNames(
        "w-full flex items-center justify-between fixed top-0 left-0 pr-6 pl-4 pt-5 pb-2 z-20",
        headerColor
      )}
    >
      <Menu
        onClick={() => dispatch(changeDialogState("isMenuOpen"))}
        className="cursor-pointer"
      />
      <Link
        href="/"
        className="cursor-pointer ml-10"
      >
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <Search
          onClick={() => dispatch(changeDialogState("isSearchOpen"))}
          className="cursor-pointer"
        />
        <ShopBag
          onClick={() => dispatch(changeDialogState("isCartOpen"))}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
