import SavedBlock from "@/components/pages/checkout/ship-address/saved-block";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeTab } from "@/lib/store/orderSlice";
import { useRouter } from "next/navigation";
import BottomPart from "../bottom-bar";
import DeliverySelect from "../delivery-select";
import OrderList from "../orders-list";
import TabContainer from "../tab-container";

export default function ShipAddress() {
  const router = useRouter();
  const { shippingAddress, card } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  return (
    <TabContainer
      tabNumber={1}
      topTitle="Checkout"
    >
      <div className="overflow-auto w-full flex-grow h-full pb-[100px]">
        <div className="max-w-[900px] mx-auto mb-7">
          <SavedBlock
            type="address"
            address={shippingAddress}
            onClick={() => dispatch(changeTab(2))}
          />

          <DeliverySelect />
          <SavedBlock
            type="card"
            card={card}
            onClick={() => dispatch(changeTab(3))}
          />
        </div>
        <OrderList />
      </div>
      <BottomPart
        withTotal
        buttonText="Place order"
        onClick={() => router.push("/products")}
      />
    </TabContainer>
  );
}
