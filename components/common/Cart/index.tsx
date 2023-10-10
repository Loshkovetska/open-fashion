import { useDispatch, useSelector } from "react-redux";
import ModalClose from "../ModalClose";
import { changeCartState } from "../../../store/cartSlice";
import Modal from "../Modal";
import Button from "../Button";
import ShopBag from "../../../assets/icons/shopbag.svg";
import CartItem from "../CartItem";
import { useRouter } from "next/router";

export const getTotalPrice = (list: any) => {
  return list?.length
    ? list.reduce((a: any, b: any) => {
        return a + b.price * b.count;
      }, 0)
    : 0;
};

const Cart = () => {
  const router = useRouter();
  const { isCartOpen, cartList } = useSelector((state: any) => state.cart);
  const totalPrice = getTotalPrice(cartList);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isCartOpen}>
      <ModalClose func={changeCartState} />
      <span className="text-[16px] tracking-[3px] uppercase">Cart</span>

      {!!!cartList?.length ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-[16px] text-grayPlaceholder text-center">
            You have no items in your Shopping Bag.
          </p>
        </div>
      ) : (
        <div className="flex-grow flex flex-col gap-4 mt-5 h-full overflow-auto mb-[70px]">
          {cartList?.map((c: any) => (
            <CartItem cartItem={c} key={c._id} />
          ))}
          <div className="w-full h-[1px] bg-grayLight"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm tracking-[3px] uppercase">Sub total</span>
            <span className="text-[16px] tracking-[3px] uppercase text-primary">
              ${totalPrice}
            </span>
          </div>
          <p className="text-grayPlaceholder text-sm pr-3">
            *shipping charges, taxes and discount codes are calculated at the
            time of accounting.
          </p>
        </div>
      )}

      <Button
        color="black"
        style="absolute bottom-0 left-0 w-full"
        onClick={() => {
          dispatch(changeCartState());
          cartList.length && router.push("/checkout");
        }}
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00082 20.2315L3.67238 6.59877H17.1365L17.8081 20.2315H3.00082Z"
            stroke="#FCFCFC"
          />
          <path
            d="M6.80029 9.37242L6.80029 5.54102C6.80029 4.58517 7.18 3.66848 7.85589 2.99259C8.53177 2.31671 9.44847 1.937 10.4043 1.937C11.3602 1.937 12.2769 2.31671 12.9527 2.99259C13.6286 3.66848 14.0083 4.58517 14.0083 5.54102V9.37242"
            stroke="#FCFCFC"
          />
        </svg>
        {!cartList?.length ? "Continue shopping" : "BUY NOW"}
      </Button>
    </Modal>
  );
};

export default Cart;
