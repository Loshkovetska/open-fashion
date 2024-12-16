import { MasterCard, Visa } from "@/components/icons";
import { CardType } from "@/lib/type";
import { isMasterCard } from "@/lib/utils";
import { useMemo } from "react";

export default function CardItem(card: CardType) {
  const cardType = useMemo(() => isMasterCard(card.cardNumber), [card]);
  return (
    <div className="flex items-center gap-2">
      {cardType ? <MasterCard /> : <Visa className="[&>path]:fill-black" />}
      {cardType ? "Mastercard" : "Visa"} ending &bull;&bull;&bull;&bull;
      {card?.cardNumber.slice(-2)}
    </div>
  );
}
