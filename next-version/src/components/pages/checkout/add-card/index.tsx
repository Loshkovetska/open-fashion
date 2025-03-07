import AddCardView from "@/components/pages/checkout/add-card/add-card-view";
import Input from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeTab, updateCardDetails } from "@/lib/store/orderSlice";
import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import BottomPart from "../bottom-bar";
import TabContainer from "../tab-container";

export default function AddCard() {
  const dispatch = useAppDispatch();
  const { card } = useAppSelector((state) => state.order);

  const [rotateCard, setRotate] = useState(false);

  const [cardDetails, setDetails] = useState({
    cardOwner: card?.cardOwner || "",
    cardNumber: card?.cardNumber || "",
    expiredDate: card?.expiredDate || "",
    CVV: card?.CVV || "",
  });

  const onChange = useCallback(
    (key: keyof typeof cardDetails, value: string, rotate: boolean) => {
      setDetails((prev) => ({ ...prev, [key]: value }));
      setRotate(rotate);
    },
    []
  );

  const isValid = useMemo(
    () => Object.values(cardDetails).every(Boolean),
    [cardDetails]
  );

  const onAddCard = useCallback(() => {
    if (isValid) {
      dispatch(updateCardDetails(cardDetails));
      dispatch(changeTab(1));
    }
  }, [cardDetails, isValid]);

  const inputStyle =
    "pb-4 border-b border-[#D4D4D4] focus:outline-none hover:outline-none autofill:bg-none";

  return (
    <TabContainer
      tabNumber={3}
      topTitle="Payment method"
    >
      <AddCardView
        rotateCard={rotateCard}
        cardDetails={cardDetails}
      />
      <div className="mt-8 max-w-[900px] w-full mx-auto gap-6 flex flex-grow flex-col">
        <Input
          className={classNames(inputStyle)}
          placeholder="Name on Card"
          inputType="text"
          value={cardDetails?.cardOwner}
          onChange={(value) => onChange("cardOwner", value, false)}
        />
        <Input
          className={classNames(inputStyle)}
          placeholder="Card Number"
          inputType="card_number"
          value={cardDetails?.cardNumber}
          onChange={(value) => onChange("cardNumber", value, false)}
        />
        <Input
          className={classNames(inputStyle)}
          placeholder="Exp date"
          inputType="exp_date"
          value={cardDetails?.expiredDate}
          onChange={(value) => onChange("expiredDate", value, false)}
        />

        <Input
          placeholder="CVV"
          inputType="ccv"
          className={classNames(inputStyle)}
          value={cardDetails?.CVV}
          onChange={(value) => onChange("CVV", value, true)}
        />
      </div>
      <BottomPart
        buttonText={`${!card ? "Add" : "Update"} Card`}
        onClick={onAddCard}
        disabled={!isValid}
      />
    </TabContainer>
  );
}
