import AddToCart from "@/components/common/add-to-cart";
import CartItem from "@/components/common/cart-item";
import Variants from "@/components/common/variants";
import ModalClose from "@/components/ui/modal/modal-close";
import { useAppSelector } from "@/lib/hooks";
import { DialogPropType } from "@/lib/type";
import classNames from "classnames";
import { useCallback, useState } from "react";

export default function SelectionModal({ open, onOpenChange }: DialogPropType) {
  const { item } = useAppSelector((state) => state.cart);

  const [cartItem, setItem] = useState<{
    count: number;
    color?: string;
    size?: string;
  }>({
    count: 1,
  });

  const updateState = useCallback((prop: string, value: string) => {
    setItem((prev) => ({
      ...prev,
      [prop]: prev[prop as "color"] == value ? "" : value,
    }));
  }, []);

  const changeCount = useCallback((num: number) => {
    setItem((prev) => ({
      ...prev,
      count: prev?.count + num,
    }));
  }, []);

  const handleClose = useCallback(() => {
    onOpenChange();
    setItem({ count: 1 });
  }, [onOpenChange]);

  return (
    <section
      className={classNames(
        "fixed bottom-0 left-0 transition-all w-full h-screen bg-black/50 z-[1000] flex flex-col justify-end",
        open ? "opacity-1 visible" : "opacity-0 invisible"
      )}
      onClick={handleClose}
    >
      <div
        className={classNames(
          "bg-white shadow-md transition-all",
          open ? "opacity-1 translate-y-0" : "opacity-0 translate-y-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-6 px-4 w-full relative">
          <div className="flex justify-end absolute left-0 w-full top-0 py-6 px-4 pt-3">
            <ModalClose action={handleClose} />
          </div>
          {item && (
            <CartItem
              {...item}
              withCount={false}
              className="mb-4"
            />
          )}
          <Variants
            colors={item?.colors || []}
            sizes={item?.sizes || []}
            selectedColor={cartItem?.color || ""}
            selectedSize={cartItem?.size || ""}
            onSelect={updateState}
            amount={cartItem?.count}
            changeAmount={changeCount}
          />
          {item && (
            <AddToCart
              item={{
                ...item,
                ...cartItem,
                count: 1,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
