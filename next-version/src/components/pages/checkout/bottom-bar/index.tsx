import { ShopBag } from "@/components/icons";
import Button from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { getTotalPrice } from "@/lib/utils";
import { useMemo } from "react";

type BottomPartPropType = {
  withTotal?: boolean;
  buttonText: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function BottomBar({
  withTotal = false,
  buttonText,
  disabled,
  onClick,
}: BottomPartPropType) {
  const {
    cart: { cartList },
    order: { delivery },
  } = useAppSelector((state) => state);

  const totalPrice = useMemo(() => getTotalPrice(cartList), [cartList]);

  return (
    <div className="fixed bottom-0 left-0 w-full">
      {withTotal && (
        <div className="flex items-center justify-between px-4 py-6 bg-white">
          <span className="text-sm tracking-[3px] uppercase">Total</span>
          <span className="text-4 tracking-[3px] uppercase text-primary">
            $
            {totalPrice +
              (delivery.price === "FREE" ? 0 : (delivery.price as number))}
          </span>
        </div>
      )}
      <Button
        onClick={onClick}
        className={disabled ? "pointer-events-none opacity-50" : ""}
      >
        <ShopBag className="[&>path]:stroke-[#FCFCFC] size-5" />
        {buttonText}
      </Button>
    </div>
  );
}
