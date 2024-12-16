import { Forward, Plus } from "@/components/icons";
import { AddressItem } from "@/components/pages/checkout/ship-address/saved-block/address-item";
import CardItem from "@/components/pages/checkout/ship-address/saved-block/card-item";
import { AddressType, CardType } from "@/lib/type";

type SavedBlockPropType = {
  address?: AddressType | null;
  card?: CardType | null;
  type: "card" | "address";
  onClick: () => void;
};

export default function SavedBlock({
  address,
  card,
  type,
  onClick,
}: SavedBlockPropType) {
  const TITLE = type === "address" ? "Shipping address" : "Payment Method";
  const EMPTY_TITLE =
    type === "address" ? "Add shipping address" : "Add payment method";
  return (
    <>
      <span className="uppercase text-base text-gray-placeholder mb-3 flex">
        {TITLE}
      </span>
      {address || card ? (
        <div
          className="flex items-center justify-between"
          onClick={onClick}
        >
          {address && <AddressItem {...address} />}
          {card && <CardItem {...card} />}
          <Forward className="-rotate-90" />
        </div>
      ) : (
        <div
          className="flex items-center justify-between py-[13px] px-5 bg-[#F9F9F9] rounded-[44px] cursor-pointer"
          onClick={onClick}
        >
          {EMPTY_TITLE}
          <Plus />
        </div>
      )}
    </>
  );
}
