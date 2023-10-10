import { ReactNode, useEffect, useState } from "react";
import Header from "../Header";
import Nav from "../Nav";
import Cart from "../Cart";
import Search from "../Search";
import Footer from "../Footer";
import { setAllGoods } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ChoosingModal from "../ChoosingModal";
import { setList } from "../../../store/cartSlice";
import { useRouter } from "next/router";

const Layout = ({
  children,
  headerColor = "bg-[#E7EAEF]",
}: {
  children: ReactNode | Array<ReactNode>;
  headerColor?: string;
}) => {
  const { asPath } = useRouter();
  const {
    cart: { isCartOpen, isModalOpen },
    global: { isMenuOpen, isSearchOpen, isFullScreenSliderOpen },
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllGoods());
    dispatch(setList());
  }, []);

  useEffect(() => {
    if (
      [
        isCartOpen,
        isModalOpen,
        isMenuOpen,
        isSearchOpen,
        isFullScreenSliderOpen,
      ].some(Boolean)
    ) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [
    isCartOpen,
    isModalOpen,
    isMenuOpen,
    isSearchOpen,
    isFullScreenSliderOpen,
  ]);
  return (
    <>
      <Header headerColor={headerColor} />
      <Nav />
      <Cart />
      <Search />
      <ChoosingModal />
      {children}
      {!asPath.includes("/checkout") && <Footer />}
    </>
  );
};

export default Layout;
