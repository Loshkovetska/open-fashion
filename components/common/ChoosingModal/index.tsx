import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeModalState } from "../../../store/cartSlice";
import { useState } from "react";
import ModalClose from "../ModalClose";
import Button from "../Button";
import Counter from "../Counter";
import { ColorSelector, SizeSelector } from "../Selectors";
const ChoosingModal = () => {
  const { item, isModalOpen } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const [cartItem, setItem] = useState<any>({
    count: 1,
  });

  const updateState = (prop: string, value: string) => {
    const obj = { ...cartItem };

    if (prop == "color") {
      obj.color = obj.color == value ? "" : value;
    }
    if (prop == "size") {
      obj.size = obj.size == value ? "" : value;
    }
    setItem({
      ...cartItem,
      ...obj,
    });
  };

  const changeCount = (action: string) => {
    const obj = { ...cartItem };
    if (action == "plus") {
      obj.count++;
    } else {
      if (obj.count - 1 > 0) {
        obj.count--;
      }
    }

    setItem({
      ...cartItem,
      ...obj,
    });
  };
  return (
    <section
      className={classNames(
        "fixed bottom-0 left-0 transition-all w-full h-screen bg-black/50 z-[1000] flex flex-col justify-end",
        isModalOpen ? "opacity-1 visible" : "opacity-0 invisible"
      )}
      onClick={() => {
        dispatch(changeModalState(null));
        setItem({});
      }}
    >
      <div
        className={classNames(
          "bg-white shadow-md transition-all",
          isModalOpen ? "opacity-1 translate-y-0" : "opacity-0 translate-y-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-6 px-4 w-full relative">
          <div className="flex justify-end absolute left-0 w-full top-0 py-6 px-4 pt-3">
            <ModalClose func={() => changeModalState(null)} />
          </div>
          <div className="flex items-center mb-4 gap-3">
            <img
              src={item?.src[0] || ""}
              alt=""
              className="object-cover w-25"
            />
            <div className="flex-grow">
              <span className="text-sm text-black mb-1 uppercase">
                {item?.title}
              </span>
              <p className="text-[12px] text-grayLabel line-clamp-1	">
                {item?.description}
              </p>
              <span className="text-primary text-sm mt-[10px] flex">
                ${item?.price}
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            {item?.colors?.length && (
              <ColorSelector
                chosenColor={cartItem?.color || ""}
                colors={item?.colors}
                onClick={(value) => updateState("color", value)}
              />
            )}
            {item?.sizes?.length && (
              <SizeSelector
                chosenSize={cartItem?.size || ""}
                sizes={item?.sizes}
                onClick={(value) => updateState("size", value)}
              />
            )}
            <div className="flex flex-col">
              <span className="mb-2">Count</span>
              <Counter
                count={cartItem?.count}
                plusClick={() => changeCount("plus")}
                minusClick={() => changeCount("minus")}
              />
            </div>
          </div>

          <Button
            color="black"
            style="mt-6"
            onClick={() => {
              dispatch(
                addToCart({
                  _id: item._id,
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  src: item.src[0],
                  ...cartItem,
                })
              );
              dispatch(changeModalState(null));
              setItem({});
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChoosingModal;
