import { useDispatch, useSelector } from "react-redux";
import Forward from "../../../../assets/icons/Forward.svg";
import { useState } from "react";
import classNames from "classnames";
import { updateDeliveryType } from "../../../../store/orderSlice";

const DeliverySelect = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { delivery } = useSelector((state: any) => state.order);
  const items = [
    {
      title: "Pickup at store",
      price: "FREE",
    },
    {
      title: "Delivery Post",
      price: 20,
    },
  ];
  return (
    <div className="relative">
      <div className="flex items-center justify-between py-[13px] px-[20px] bg-[#F9F9F9] rounded-[44px] cursor-pointer">
        <div
          className="flex items-center justify-between flex-grow"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="leading-">{delivery.title}</span>
          <span className="leading-">{`${delivery.price == "FREE" ? "" : "$"}${
            delivery.price
          }`}</span>
        </div>
        <Forward />
      </div>
      <div
        className={classNames(
          "bg-[#F9F9F9] px-4 py-2 rounded-[8px] absolute top-full left-0 w-full mt-2 gap-2 transition-all flex flex-col",
          isOpen ? "opacity-1 visible" : "opacity-0 invisible"
        )}
      >
        {items?.map((c) => (
          <div
            key={c.price}
            className="flex items-center justify-between flex-grow cursor-pointer"
            onClick={() => {
              dispatch(updateDeliveryType(c));
              setOpen(false);
            }}
          >
            <span className="leading-">{c.title}</span>
            <span className="leading-">
              {c.price == "FREE" ? c.price : `$${c.price}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverySelect;
