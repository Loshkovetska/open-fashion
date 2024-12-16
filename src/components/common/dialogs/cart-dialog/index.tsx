import CartItem from "@/components/common/cart-item";
import { ShopBag } from "@/components/icons";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import ModalClose from "@/components/ui/modal/modal-close";
import { useAppSelector } from "@/lib/hooks";
import { DialogPropType } from "@/lib/type";
import { getTotalPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Cart({ open, onOpenChange }: DialogPropType) {
  const router = useRouter();
  const { cartList } = useAppSelector((state) => state.cart);

  const totalPrice = useMemo(() => getTotalPrice(cartList), [cartList]);

  return (
    <Modal isOpen={open}>
      <ModalClose action={onOpenChange} />
      <span className="text-4 tracking-[3px] uppercase">Cart</span>

      {!!!cartList?.length ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-4 text-gray-placeholder text-center">
            You have no items in your Shopping Bag.
          </p>
        </div>
      ) : (
        <div className="flex-grow flex flex-col gap-4 mt-5 h-full overflow-auto mb-[70px]">
          {cartList?.map((c) => (
            <CartItem
              {...c}
              key={c._id}
            />
          ))}
          <div className="w-full h-[1px] bg-gray-light"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm tracking-[3px] uppercase">Sub total</span>
            <span className="text-4 tracking-[3px] uppercase text-primary">
              ${totalPrice}
            </span>
          </div>
          <p className="text-gray-placeholder text-sm pr-3">
            *shipping charges, taxes and discount codes are calculated at the
            time of accounting.
          </p>
        </div>
      )}
      <Button
        className="absolute bottom-0 left-0 w-full"
        onClick={() => {
          onOpenChange();
          cartList.length && router.push("/checkout");
        }}
      >
        <ShopBag className="[&>path]:stroke-[#FCFCFC] size-5" />
        {!cartList?.length ? "Continue shopping" : "BUY NOW"}
      </Button>
    </Modal>
  );
}
