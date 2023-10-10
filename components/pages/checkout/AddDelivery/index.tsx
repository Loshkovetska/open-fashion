import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "../../../common/Button";
import { changeTab, updateShippingAddress } from "../../../../store/orderSlice";
import { InputMask } from "primereact/inputmask";
import TabContainer from "../TabContainer";
import BottomPart from "../BottomPart";

const AddDelivery = () => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state: any) => state.order);
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  useEffect(() => {
    if (shippingAddress && !Object.values(values).every(Boolean)) {
      setValues({ ...values, ...shippingAddress });
    }
  }, [shippingAddress, values]);

  const inputStyle =
    "pb-4 border-b border-[#D4D4D4] focus:outline-none hover:outline-none";

  return (
    <TabContainer tabNumber={2} topTitle="Add Shipping Address">
      <div className="flex flex-col gap-6 max-w-[900px] mx-auto mt-8 flex-grow">
        <div className="flex flex-wrap gap-3">
          <input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.fname || ""}
            onChange={(e) => setValues({ ...values, fname: e.target.value })}
            placeholder="First name"
          />
          <input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.lname || ""}
            onChange={(e) => setValues({ ...values, lname: e.target.value })}
            placeholder="Last name"
          />
        </div>
        <input
          className={inputStyle}
          value={values?.address || ""}
          onChange={(e) => setValues({ ...values, address: e.target.value })}
          placeholder="Address"
        />
        <input
          className={inputStyle}
          value={values?.city || ""}
          onChange={(e) => setValues({ ...values, city: e.target.value })}
          placeholder="City"
        />
        <div className="flex flex-wrap gap-3">
          <input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.state || ""}
            onChange={(e) => setValues({ ...values, state: e.target.value })}
            placeholder="State"
          />
          <input
            className={classNames(inputStyle, "flex-grow")}
            value={values?.zipCode || ""}
            onChange={(e) => setValues({ ...values, zipCode: e.target.value })}
            placeholder="ZIP code"
          />
        </div>
        <InputMask
          className={inputStyle}
          value={values?.phone || ""}
          onChange={(e: any) => setValues({ ...values, phone: e.target.value })}
          placeholder="Phone"
          mask="+99 (999) 999 999"
          slotChar={""}
        />
      </div>

      <BottomPart
        buttonText="Place order"
        withTotal={false}
        onClick={() => {
          console.log("jhrer");
          if (Object.values(values).every(Boolean)) {
            dispatch(updateShippingAddress(values));
            dispatch(changeTab(1));
          }
        }}
      />
    </TabContainer>
  );
};

export default AddDelivery;
