import { Forward } from "@/components/icons";
import { DELIVERY_TYPES } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateDeliveryType } from "@/lib/store/orderSlice";
import classNames from "classnames";
import { Fragment, useCallback, useState } from "react";

export default function DeliverySelect() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { delivery } = useAppSelector((state) => state.order);

  const getItem = useCallback((del: typeof delivery, callback: () => void) => {
    return (
      <div
        className="flex items-center justify-between flex-grow"
        onClick={callback}
      >
        <span>{del.title}</span>
        <span>{del.price == "FREE" ? del.price : `$${del.price}`}</span>
      </div>
    );
  }, []);
  return (
    <div className="my-8">
      <span className="uppercase text-base text-gray-placeholder mb-3 flex">
        Shipping Method
      </span>
      <div className="relative">
        <div className="flex items-center justify-between py-[13px] px-5 bg-[#F9F9F9] rounded-[44px] cursor-pointer">
          {getItem(delivery, () => setOpen(!isOpen))}
          <Forward />
        </div>
        <div
          className={classNames(
            "bg-[#F9F9F9] px-4 py-2 rounded-2 absolute top-full left-0 w-full mt-2 gap-2 transition-all flex flex-col",
            isOpen ? "opacity-1 visible" : "opacity-0 invisible"
          )}
        >
          {DELIVERY_TYPES?.map((c) => (
            <Fragment key={c.title}>
              {getItem(c, () => {
                dispatch(updateDeliveryType(c));
                setOpen(false);
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
