import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../../../store/orderSlice";
import Forward from "../../../../assets/icons/Forward.svg";
import DeliverySelect from "../DeliverySelect";
import MasterCard from "../../../../assets/icons/MasterCard.svg";
import { isMasterCard } from "../AddCard";
import OrderList from "../OrderList";
import BottomPart from "../BottomPart";
import TabContainer from "../TabContainer";
import { useRouter } from "next/router";

const ShipAddress = () => {
  const router = useRouter();
  const { shippingAddress, card } = useSelector((state: any) => state.order);
  const dispatch = useDispatch();

  return (
    <TabContainer tabNumber={1} topTitle="Checkout">
      <div className="overflow-auto w-full flex-grow h-full pb-[100px]">
        <div className="max-w-[900px] mx-auto mb-7">
          <span className="uppercase text-base text-grayPlaceholder mb-3 flex">
            Shipping address
          </span>
          {shippingAddress ? (
            <div
              className="flex items-center"
              onClick={() => dispatch(changeTab(2))}
            >
              <div className="flex flex-col flex-grow">
                <span className="text-lg text-[#1A1A1A] mb-2">
                  {shippingAddress.fname} {shippingAddress.lname}
                </span>
                <span className="text-base text-grayLabel mb">
                  {shippingAddress.address}
                </span>
                <span className="text-base text-grayLabel mb">
                  {shippingAddress.city},{shippingAddress.state},{" "}
                  {shippingAddress.zipCode}
                </span>
                <span className="text-base text-grayLabel ">
                  {shippingAddress.phone}
                </span>
              </div>
              <Forward className="-rotate-90" />
            </div>
          ) : (
            <div
              className="flex items-center justify-between py-[13px] px-[20px] bg-[#F9F9F9] rounded-[44px] cursor-pointer"
              onClick={() => dispatch(changeTab(2))}
            >
              <span className="leading-">Add shipping address</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path d="M17.5 10.7118L2.5 10.7118" stroke="black" />
                <path d="M10 3.21179L10 18.2118" stroke="black" />
              </svg>
            </div>
          )}
          <span className="uppercase text-base text-grayPlaceholder mb-3 flex mt-8">
            Shipping Method
          </span>
          <DeliverySelect />
          <span className="uppercase text-base text-grayPlaceholder mb-3 flex mt-8">
            Payment Method
          </span>
          {card ? (
            <div
              className="flex items-center justify-between"
              onClick={() => dispatch(changeTab(3))}
            >
              <div className="flex items-center gap-2">
                {isMasterCard(card.cardNumber) ? (
                  <MasterCard />
                ) : (
                  <svg
                    width="52"
                    height="16"
                    viewBox="0 0 52 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.7975 0.651625C36.9606 0.339625 35.6476 0 34.0226 0C29.8675 0 26.9311 2.0995 26.9133 5.10412C26.8791 7.3125 28.9949 8.55725 30.5939 9.3015C32.2367 10.0636 32.786 10.5381 32.7779 11.2141C32.7697 12.2558 31.4649 12.7205 30.264 12.7205C28.5951 12.7205 27.69 12.493 26.2941 11.908L25.7758 11.6626L25.1843 15.1336C26.1999 15.548 28.0199 15.912 29.8984 15.9461C34.3249 15.9461 37.2109 13.8645 37.2434 10.6551C37.2775 8.89525 36.1449 7.5595 33.7317 6.45775C32.2757 5.74762 31.3641 5.26338 31.3641 4.53538C31.3641 3.89188 32.1425 3.21588 33.7675 3.21588C35.1634 3.18988 36.1465 3.49538 36.9151 3.79925L37.3132 3.97638L37.8966 0.633751L37.7975 0.651625ZM48.5989 0.287625H45.3489C44.3332 0.287625 43.5792 0.559 43.1307 1.5665L36.8842 15.7251H41.3026L42.1931 13.4062L47.5832 13.4144C47.7181 13.9555 48.0984 15.7235 48.0984 15.7235H52L48.5989 0.287625ZM20.93 0.160875H25.1371L22.5046 15.6049H18.2975L20.93 0.15275V0.160875ZM10.2326 8.66613L10.6632 10.816L14.7842 0.287625H19.2449L12.6084 15.6991H8.16725L4.52725 2.64875C4.45088 2.42125 4.35825 2.26687 4.12912 2.13362C2.90225 1.49012 1.52262 0.96525 0 0.60125L0.050375 0.277876H6.838C7.75288 0.312001 8.49713 0.60125 8.75063 1.58275L10.2326 8.67425V8.66613ZM43.3924 10.2489L45.0775 5.92475C45.0515 5.96537 45.4236 5.03588 45.6349 4.45088L45.9225 5.7785L46.8975 10.2391H43.3924V10.2489Z"
                      fill="black"
                    />
                  </svg>
                )}
                {isMasterCard(card.cardNumber) ? "Mastercard" : "Visa"} ending
                &bull;&bull;&bull;&bull;
                {card?.cardNumber.slice(-2)}
              </div>
              <Forward className="-rotate-90" />
            </div>
          ) : (
            <div
              className="flex items-center justify-between py-[13px] px-[20px] bg-[#F9F9F9] rounded-[44px] cursor-pointer"
              onClick={() => dispatch(changeTab(3))}
            >
              <span className="">Add payment method</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path d="M17.5 10.7118L2.5 10.7118" stroke="black" />
                <path d="M10 3.21179L10 18.2118" stroke="black" />
              </svg>
            </div>
          )}
        </div>
        <OrderList />
      </div>
      <BottomPart
        buttonText="Place order"
        onClick={() => {
          // dispatch(changeTab(2));
          router.push("/products");
        }}
      />
    </TabContainer>
  );
};

export default ShipAddress;
