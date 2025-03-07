import { Delivery, Discount } from "@/components/icons";
import Input from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeTab, updatePromoCode } from "@/lib/store/orderSlice";
import BottomBar from "../bottom-bar";
import OrderList from "../orders-list";
import TabContainer from "../tab-container";

export default function Main() {
  const { promocode } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  return (
    <TabContainer
      tabNumber={0}
      topTitle="checkout"
    >
      <div className="overflow-auto w-full flex-grow h-full pb-[100px]">
        <OrderList />
        <div className="flex items-center gap-2 py-4 px-7 border-b border-t border-gray-placeholder max-w-[900px] mx-auto">
          <Discount />
          <Input
            className="placeholder:text-gray-body focus:outline-none flex-grow"
            placeholder="Add promo code"
            value={promocode}
            onChange={(value) => dispatch(updatePromoCode(value))}
          />
        </div>
        <div className="flex items-center gap-2 py-4 px-7 border-b border-gray-placeholder justify-between max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <Delivery />
            <span>Delivery</span>
          </div>
          <span>Free</span>
        </div>
      </div>
      <BottomBar
        buttonText="Checkout"
        onClick={() => dispatch(changeTab(1))}
      />
    </TabContainer>
  );
}
