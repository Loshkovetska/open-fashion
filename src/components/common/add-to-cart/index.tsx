import Button from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart, changeModalState } from "@/lib/store/cartSlice";
import { CartItemType } from "@/lib/type";
import classNames from "classnames";
import { useCallback } from "react";

type AddToCartPropType = {
  className?: string;
  item: CartItemType;
  canBeAdded?: boolean;
};

export default function AddToCart({
  className,
  item,
  canBeAdded = true,
}: AddToCartPropType) {
  const dispatch = useAppDispatch();

  const onAdd = useCallback(() => {
    if (canBeAdded) {
      dispatch(
        addToCart({
          ...item,
          _id: item._id,
          title: item.title,
          description: item.description,
          price: item.price,
          src: item.src,
        })
      );
      dispatch(changeModalState(null));
    }
  }, [canBeAdded]);

  return (
    <Button
      className={classNames("mt-6", className)}
      onClick={onAdd}
    >
      Add To cart
    </Button>
  );
}
