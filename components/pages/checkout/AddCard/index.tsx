import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MasterCard from "../../../../assets/icons/MasterCard.svg";
import Visa from "../../../../assets/icons/VisaSvg.svg";
import { InputMask } from "primereact/inputmask";
import Button from "../../../common/Button";
import { changeTab, updateCardDetails } from "../../../../store/orderSlice";
import TabContainer from "../TabContainer";
import BottomPart from "../BottomPart";

export const isMasterCard = (cardNumber: string) => {
  return ["2", "5"].find((c) => cardNumber[0] == c);
};
const AddCard = () => {
  const [cardDetails, setDetails] = useState({
    cardOwner: "",
    cardNumber: "",
    expiredDate: "",
    CVV: "",
  });
  const [rotateCard, setRotate] = useState(false);
  const dispatch = useDispatch();
  const { card } = useSelector((state: any) => state.order);

  useEffect(() => {
    if (card && !Object.values(cardDetails).every(Boolean)) {
      setDetails({
        ...cardDetails,
        ...card,
      });
    }
  }, [card, cardDetails]);

  const inputStyle =
    "pb-4 border-b border-[#D4D4D4] focus:outline-none hover:outline-none autofill:bg-none";

  return (
    <TabContainer tabNumber={3} topTitle="Payment method">
      <div className="max-w-[316px] h-[190px] mx-auto w-full relative">
        <div
          className={classNames(
            "transition-all duration-500 bg-gradient-to-r from-[#434343] to-[#000] h-full rounded-2xl absolute  mx-auto w-full p-3 items-end pb-5 flex justify-between"
          )}
          style={{
            transform: rotateCard ? "rotateY(90deg)" : "rotateY(0deg)",
          }}
        >
          {!isMasterCard(cardDetails.cardNumber) ? (
            <Visa className="absolute top-3 right-3" />
          ) : (
            <MasterCard className="absolute top-3 right-3" />
          )}
          <div className="flex justify-between flex-col">
            <span className="text-[16px] text-white mb-2 flex leading-none">
              {cardDetails.cardOwner}
            </span>
            <span className="text-lg text-white mb flex tracking-[1px] leading-none">
              {cardDetails.cardNumber}
            </span>
          </div>
          <span className="text-lg text-white mb flex">
            {cardDetails.expiredDate}
          </span>
        </div>
        <div
          style={{
            transform: !rotateCard ? "rotateY(90deg)" : "rotateY(0deg)",
          }}
          className="bg-gradient-to-r from-[#434343] to-[#000] rounded-2xl absolute  mx-auto w-full h-full  flex transition-all duration-500"
        >
          <div className="flex flex-col w-full">
            <div className="w-full h-8 bg-black mt-4"></div>
            <div className="w-full h-6 bg-white mt-4 px-4 text-right">
              {cardDetails.CVV}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-[900px] w-full mx-auto gap-6 flex flex-grow flex-col">
        <input
          className={classNames(inputStyle)}
          placeholder="Name on Card"
          onChange={(e: any) => {
            setRotate(false);
            setDetails({ ...cardDetails, cardOwner: e.target.value });
          }}
          value={cardDetails?.cardOwner}
        />
        <InputMask
          placeholder="Card Number"
          mask="9999 9999 9999 9999"
          className={classNames(inputStyle)}
          onChange={(e: any) => {
            setRotate(false);
            setDetails({ ...cardDetails, cardNumber: e.target.value });
          }}
          value={cardDetails?.cardNumber}
          slotChar={""}
        />
        <InputMask
          placeholder="Exp date"
          mask="99/99"
          className={classNames(inputStyle)}
          value={cardDetails?.expiredDate}
          onChange={(e: any) => {
            setRotate(false);
            setDetails({ ...cardDetails, expiredDate: e.target.value });
          }}
          slotChar={""}
        />
        <InputMask
          placeholder="CVV"
          mask="999"
          className={classNames(inputStyle)}
          value={cardDetails?.CVV}
          onChange={(e: any) => {
            setRotate(true);
            setDetails({ ...cardDetails, CVV: e.target.value });
          }}
          slotChar={""}
        />
      </div>
      <BottomPart
        buttonText="Add Card"
        withTotal={false}
        onClick={() => {
          if (Object.values(cardDetails).every(Boolean)) {
            dispatch(updateCardDetails(cardDetails));
            dispatch(changeTab(1));
          }
        }}
      />
    </TabContainer>
  );
};

export default AddCard;
