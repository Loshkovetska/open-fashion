import Input from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeTab, updateShippingAddress } from "@/lib/store/orderSlice";
import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import BottomPart from "../bottom-bar";
import TabContainer from "../tab-container";

export default function AddDelivery() {
  const dispatch = useAppDispatch();
  const { shippingAddress } = useAppSelector((state) => state.order);

  const [values, setValues] = useState(
    shippingAddress
      ? shippingAddress
      : {
          fname: "",
          lname: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          phone: "",
        }
  );

  const isValid = useMemo(() => Object.values(values).every(Boolean), [values]);

  const onChange = useCallback((key: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onAddAddress = useCallback(() => {
    if (isValid) {
      dispatch(updateShippingAddress(values));
      dispatch(changeTab(1));
    }
  }, [values, isValid]);

  const inputStyle =
    "pb-4 border-b border-[#D4D4D4] focus:outline-none hover:outline-none";

  return (
    <TabContainer
      tabNumber={2}
      topTitle="Add Shipping Address"
    >
      <div className="flex flex-col gap-6 max-w-[900px] mx-auto mt-8 flex-grow">
        <div className="flex flex-wrap gap-3">
          <Input
            placeholder="First name"
            inputType="text"
            className={classNames(inputStyle, "flex-grow")}
            value={values?.fname || ""}
            onChange={(e) => onChange("fname", e)}
          />
          <Input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.lname || ""}
            placeholder="Last name"
            inputType="text"
            onChange={(e) => onChange("lname", e)}
          />
        </div>
        <Input
          className={classNames(inputStyle)}
          value={values?.address || ""}
          placeholder="Address"
          onChange={(e) => onChange("address", e)}
        />
        <Input
          className={classNames(inputStyle)}
          value={values?.city || ""}
          placeholder="City"
          inputType="text"
          onChange={(e) => onChange("city", e)}
        />
        <div className="flex flex-wrap gap-3">
          <Input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.state || ""}
            placeholder="State"
            inputType="text"
            onChange={(e) => onChange("state", e)}
          />
          <Input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.zipCode || ""}
            placeholder="ZIP code"
            onChange={(e) => onChange("zipCode", e)}
          />
        </div>
        <Input
          className={classNames(inputStyle)}
          value={values?.phone || ""}
          placeholder="Phone"
          inputType="phone"
          onChange={(e) => onChange("phone", e)}
        />
      </div>
      <BottomPart
        buttonText={`${!shippingAddress ? "Add" : "Update"} delivery`}
        disabled={!isValid}
        onClick={onAddAddress}
      />
    </TabContainer>
  );
}
