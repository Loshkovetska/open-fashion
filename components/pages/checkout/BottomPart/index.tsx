import { useSelector } from "react-redux";
import Button from "../../../common/Button";
import { getTotalPrice } from "../../../common/Cart";

const BottomPart = ({
  withTotal = true,
  buttonText,
  onClick,
}: {
  withTotal?: boolean;
  buttonText: string;
  onClick: () => void;
}) => {
  const { cartList } = useSelector((state: any) => state.cart);
  const { delivery } = useSelector((state: any) => state.order);

  const totalPrice = getTotalPrice(cartList);
  return (
    <div className="fixed bottom-0 left-0 w-full">
      {withTotal && (
        <div className="flex items-center justify-between px-4 py-6 bg-white">
          <span className="text-sm tracking-[3px] uppercase">Total</span>
          <span className="text-[16px] tracking-[3px] uppercase text-primary">
            ${totalPrice + (delivery.price == "FREE" ? 0 : delivery.price)}
          </span>
        </div>
      )}
      <Button style="" color="black" isLink={false} onClick={onClick}>
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
        {buttonText}
      </Button>
    </div>
  );
};

export default BottomPart;
