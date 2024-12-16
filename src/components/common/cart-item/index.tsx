import Counter from "@/components/common/counter";
import { useAppDispatch } from "@/lib/hooks";
import { updateCount } from "@/lib/store/cartSlice";
import { CartItemType } from "@/lib/type";
import classNames from "classnames";
import Image from "next/image";
import { useCallback } from "react";

export default function CartItem(
  item: CartItemType & { withCount?: boolean; className?: string }
) {
  const { withCount = true, className, ...cartItem } = item;
  const dispatch = useAppDispatch();

  const handleCount = useCallback(
    (num: number) =>
      dispatch(
        updateCount({
          num,
          _id: cartItem._id,
        })
      ),
    [updateCount, cartItem]
  );

  return (
    <div className={classNames("flex items-center gap-3", className)}>
      <Image
        src={cartItem?.src || ""}
        alt={cartItem.title}
        className="object-cover w-25"
        width={100}
        height={133}
      />
      <div className="flex flex-col flex-grow">
        <span className="text-sm text-black mb-1 uppercase">
          {cartItem.title}
        </span>
        <p className="text-[12px] text-gray-label line-clamp-1">
          {cartItem.description}
        </p>
        {withCount && (
          <Counter
            className="my-3"
            count={cartItem.count}
            onClick={handleCount}
          />
        )}
        <span
          className={classNames(
            "text-primary text-sm",
            withCount ? "" : "mt-[10px]"
          )}
        >
          ${cartItem.price}
        </span>
      </div>
    </div>
  );
}
