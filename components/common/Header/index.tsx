import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../assets/icons/Logo.svg";
import Menu from "../../../assets/icons/Menu.svg";
import Search from "../../../assets/icons/Search.svg";
import ShopBag from "../../../assets/icons/shopbag.svg";
import { changeMenuState, changeSearchState } from "../../../store/globalSlice";
import { changeCartState } from "../../../store/cartSlice";
import classNames from "classnames";
import Link from "next/link";
const Header = ({ headerColor }: { headerColor: string }) => {
  const dispatch = useDispatch();
  return (
    <header
      className={classNames(
        "w-full flex items-center justify-between fixed top-0 left-0 pr-6 pl-4 pt-5 pb-2 z-20",
        headerColor
      )}
    >
      <span
        onClick={() => dispatch(changeMenuState())}
        className="cursor-pointer"
      >
        <Menu />
      </span>
      <Link href={"/"} className="cursor-pointer">
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <span
          onClick={() => dispatch(changeSearchState())}
          className="cursor-pointer"
        >
          <Search />
        </span>
        <span
          onClick={() => dispatch(changeCartState())}
          className="cursor-pointer"
        >
          <ShopBag />
        </span>
      </div>
    </header>
  );
};

export default Header;
