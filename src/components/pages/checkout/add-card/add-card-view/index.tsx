import { MasterCard, Visa } from "@/components/icons";
import { CardType } from "@/lib/type";
import { isMasterCard } from "@/lib/utils";
import classNames from "classnames";
import { useMemo } from "react";

type AddCardViewPropType = {
  cardDetails: CardType;
  rotateCard: boolean;
};

export default function AddCardView({
  cardDetails,
  rotateCard,
}: AddCardViewPropType) {
  const Icon = useMemo(
    () => (isMasterCard(cardDetails.cardNumber) ? MasterCard : Visa),
    [cardDetails]
  );
  return (
    <div className="max-w-[316px] h-[190px] mx-auto w-full relative">
      <div
        className={classNames(
          "transition-all duration-500 bg-gradient-to-r from-[#434343] to-[#000] h-full rounded-2xl absolute  mx-auto w-full p-3 items-end pb-5 flex justify-between"
        )}
        style={{
          transform: rotateCard ? "rotateY(90deg)" : "rotateY(0deg)",
        }}
      >
        <Icon className="absolute top-3 right-3" />
        <div className="flex justify-between flex-col">
          <span className="text-4 text-white mb-2 flex leading-none">
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
          <div className="w-full h-8 bg-black mt-4/">
            <div className="w-full h-6 bg-white mt-4 px-4 text-right">
              {cardDetails.CVV}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
