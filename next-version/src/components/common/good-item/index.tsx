import { Heart, Star } from "@/components/icons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeModalState } from "@/lib/store/cartSlice";
import { ProductType } from "@/lib/type";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";

export default function GoodItem(
  props: {
    vertical: boolean;
  } & ProductType
) {
  const { vertical, ...item } = props;
  const { cartList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const isSaved = useMemo(
    () => cartList.find((c) => c._id == item._id),
    [cartList, item]
  );

  const addToCart = useCallback(() => {
    dispatch(
      changeModalState({
        ...item,
        count: 1,
        src: item.src[0],
      })
    );
  }, [item]);

  return (
    <div className={vertical ? "flex flex-col w-full" : "flex items-stretch"}>
      <div className={vertical ? "w-full relative mb-3" : ""}>
        <Image
          src={item.src[0]}
          alt={item.title}
          width={vertical ? 120 : 100}
          height={vertical ? 56 : 134}
          className={
            vertical
              ? "object-cover w-full h-56"
              : "w-[100px] h-[134px] flex object-cover mr-[12px]"
          }
        />
        {vertical && (
          <Heart
            className={classNames(
              "w-4 h-4 absolute bottom-2 right-2 z-[1] cursor-pointer",
              isSaved && "fill-primary"
            )}
            onClick={addToCart}
          />
        )}
      </div>
      <div className={classNames("flex flex-col", vertical ? "" : "grow")}>
        <Link href={`/products/${item._id}`}>
          <span
            className={classNames(
              "text-sm text-black uppercase line-clamp-2 h-10 flex items-center",
              vertical ? "mb-1" : ""
            )}
          >
            {item.title}
          </span>
          <p className="text-[12px] text-gray-label line-clamp-1 mb-2">
            {item.description}
          </p>
          <span
            className={classNames(
              "text-primary text-sm",
              !vertical ? "mb-[10px] flex" : ""
            )}
          >
            ${item.price}
          </span>
          {!vertical && (
            <span className="flex items-center text-sm text-gray-label gap-[3px]">
              <Star />
              {item.rate} Ratings
            </span>
          )}
        </Link>
        {!vertical && (
          <div className="flex justify-between items-center mt-[11px]">
            {!!item?.sizes?.length ? (
              <div className="flex items-center gap-[6px]">
                <span className="text-[10px] text-gray-label">Size</span>
                {item.sizes?.map((c) => (
                  <span
                    key={c}
                    className="flex items-center justify-center px-2 py-[6px] border border-gray-border rounded-full text-[10px]"
                  >
                    <span className="size-4 flex items-center justify-center">
                      {c}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <div className="flex">No sizes</div>
            )}
            {!vertical && (
              <Heart
                className={classNames(
                  "size-4 cursor-pointer",
                  isSaved && "fill-primary"
                )}
                onClick={addToCart}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
