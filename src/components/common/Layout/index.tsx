"use client";
import Dialogs from "@/components/common/dialogs";
import Footer from "@/components/common/footer";
import { useAppDispatch } from "@/lib/hooks";
import { setList } from "@/lib/store/cartSlice";
import { setAllGoods } from "@/lib/store/productSlice";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Header from "../header";

export default function Layout({
  children,
  headerColor = "bg-[#E7EAEF]",
}: {
  headerColor?: string;
} & React.PropsWithChildren) {
  const pathname = usePathname();
  const params = useSearchParams();
  const query = params.get("q") || undefined;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllGoods(query));
  }, [query]);

  useEffect(() => {
    dispatch(setList());
  }, []);

  return (
    <>
      <Header headerColor={headerColor} />
      <Dialogs
        dispatch={dispatch}
        q={query}
      />
      {children}
      {!pathname.includes("/checkout") && <Footer />}
    </>
  );
}
