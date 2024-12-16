import Cart from "@/components/common/dialogs/cart-dialog";
import Nav from "@/components/common/dialogs/menu-dialog";
import Search from "@/components/common/dialogs/search-dialog";
import SelectionModal from "@/components/common/dialogs/selection-modal";
import { useAppSelector } from "@/lib/hooks";
import { changeModalState } from "@/lib/store/cartSlice";
import { changeDialogState } from "@/lib/store/globalSlice";
import { useEffect, useMemo } from "react";

export default function Dialogs({
  dispatch,
  q,
}: {
  dispatch: any;
  q?: string;
}) {
  const { isMenuOpen, isSearchOpen, isGalleryOpen, isCartOpen } =
    useAppSelector((state) => state.global);
  const { item } = useAppSelector((state) => state.cart);

  const isOpen = useMemo(
    () =>
      [isCartOpen, !!item, isMenuOpen, isSearchOpen, isGalleryOpen].some(
        Boolean
      ),
    [isCartOpen, item, isMenuOpen, isSearchOpen, isGalleryOpen]
  );

  useEffect(() => {
    const classList = document.body.classList;

    isOpen
      ? classList.add("overflow-hidden")
      : classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <>
      <Nav
        open={isMenuOpen}
        onOpenChange={() => dispatch(changeDialogState("isMenuOpen"))}
      />
      <Cart
        open={isCartOpen}
        onOpenChange={() => dispatch(changeDialogState("isCartOpen"))}
      />
      <Search
        open={isSearchOpen}
        onOpenChange={() => dispatch(changeDialogState("isSearchOpen"))}
        q={q}
      />
      <SelectionModal
        open={!!item}
        onOpenChange={() => dispatch(changeModalState(null))}
      />
    </>
  );
}
