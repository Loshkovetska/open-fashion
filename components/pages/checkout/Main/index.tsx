import { useDispatch, useSelector } from "react-redux";
import { changeTab, updatePromoCode } from "../../../../store/orderSlice";
import BottomPart from "../BottomPart";
import OrderList from "../OrderList";
import TabContainer from "../TabContainer";

const Main = () => {
  const { promocode } = useSelector((state: any) => state.order);
  const dispatch = useDispatch();

  return (
    <TabContainer tabNumber={0} topTitle="checkout">
      <div className="overflow-auto w-full flex-grow h-full pb-[100px]">
        <OrderList />
        <div className="flex items-center gap-2 py-4 px-7 border-b border-t border-grayPlaceholder max-w-[900px] mx-auto">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.7 5.55994C2.0408 5.55994 1.5 6.10074 1.5 6.75994V10.9599H1.8C2.79767 10.9599 3.6 11.7623 3.6 12.7599C3.6 13.7576 2.79767 14.5599 1.8 14.5599H1.5V18.7599C1.5 19.4191 2.0408 19.9599 2.7 19.9599H21.3C21.9592 19.9599 22.5 19.4191 22.5 18.7599V14.5599H22.2C21.2023 14.5599 20.4 13.7576 20.4 12.7599C20.4 11.7623 21.2023 10.9599 22.2 10.9599H22.5V6.75994C22.5 6.10074 21.9592 5.55994 21.3 5.55994H2.7ZM2.7 6.15994H7.2C7.2 6.2395 7.23161 6.31581 7.28787 6.37207C7.34413 6.42833 7.42044 6.45994 7.5 6.45994C7.57957 6.45994 7.65587 6.42833 7.71213 6.37207C7.76839 6.31581 7.8 6.2395 7.8 6.15994H21.3C21.635 6.15994 21.9 6.42494 21.9 6.75994V10.4209C20.7254 10.5753 19.8 11.5443 19.8 12.7599C19.8 13.9756 20.7254 14.9445 21.9 15.099V18.7599C21.9 19.0949 21.635 19.3599 21.3 19.3599H7.8C7.8 19.2804 7.76839 19.2041 7.71213 19.1478C7.65587 19.0915 7.57957 19.0599 7.5 19.0599C7.42044 19.0599 7.34413 19.0915 7.28787 19.1478C7.23161 19.2041 7.2 19.2804 7.2 19.3599H2.7C2.365 19.3599 2.1 19.0949 2.1 18.7599V15.099C3.27462 14.9445 4.2 13.9756 4.2 12.7599C4.2 11.5443 3.27462 10.5753 2.1 10.4209V6.75994C2.1 6.42494 2.365 6.15994 2.7 6.15994ZM7.5 7.05994C7.42044 7.05994 7.34413 7.09154 7.28787 7.1478C7.23161 7.20407 7.2 7.28037 7.2 7.35994C7.2 7.4395 7.23161 7.51581 7.28787 7.57207C7.34413 7.62833 7.42044 7.65994 7.5 7.65994C7.57957 7.65994 7.65587 7.62833 7.71213 7.57207C7.76839 7.51581 7.8 7.4395 7.8 7.35994C7.8 7.28037 7.76839 7.20407 7.71213 7.1478C7.65587 7.09154 7.57957 7.05994 7.5 7.05994ZM7.5 8.25994C7.42044 8.25994 7.34413 8.29154 7.28787 8.3478C7.23161 8.40407 7.2 8.48037 7.2 8.55994C7.2 8.6395 7.23161 8.71581 7.28787 8.77207C7.34413 8.82833 7.42044 8.85994 7.5 8.85994C7.57957 8.85994 7.65587 8.82833 7.71213 8.77207C7.76839 8.71581 7.8 8.6395 7.8 8.55994C7.8 8.48037 7.76839 8.40407 7.71213 8.3478C7.65587 8.29154 7.57957 8.25994 7.5 8.25994ZM11.7293 9.0533C10.8356 9.0533 10.2 9.76854 10.2 10.7765C10.2 11.7896 10.8356 12.5045 11.7293 12.5045C12.623 12.5045 13.2539 11.7893 13.2539 10.7765C13.2539 9.76344 12.623 9.0533 11.7293 9.0533ZM15.985 9.17751L13.4725 12.6082L10.7361 16.3424H11.6496L14.1076 12.9808L16.8885 9.17751H15.985ZM7.5 9.45994C7.42044 9.45994 7.34413 9.49154 7.28787 9.5478C7.23161 9.60407 7.2 9.68037 7.2 9.75994C7.2 9.8395 7.23161 9.91581 7.28787 9.97207C7.34413 10.0283 7.42044 10.0599 7.5 10.0599C7.57957 10.0599 7.65587 10.0283 7.71213 9.97207C7.76839 9.91581 7.8 9.8395 7.8 9.75994C7.8 9.68037 7.76839 9.60407 7.71213 9.5478C7.65587 9.49154 7.57957 9.45994 7.5 9.45994ZM11.7293 9.68904C12.1763 9.68904 12.4594 10.106 12.4594 10.7765C12.4594 11.432 12.1661 11.8687 11.7293 11.8687C11.2874 11.8687 10.9945 11.4368 10.9945 10.7765C10.9945 10.1162 11.2823 9.68904 11.7293 9.68904ZM7.5 10.6599C7.42044 10.6599 7.34413 10.6915 7.28787 10.7478C7.23161 10.8041 7.2 10.8804 7.2 10.9599C7.2 11.0395 7.23161 11.1158 7.28787 11.1721C7.34413 11.2283 7.42044 11.2599 7.5 11.2599C7.57957 11.2599 7.65587 11.2283 7.71213 11.1721C7.76839 11.1158 7.8 11.0395 7.8 10.9599C7.8 10.8804 7.76839 10.8041 7.71213 10.7478C7.65587 10.6915 7.57957 10.6599 7.5 10.6599ZM7.5 11.8599C7.42044 11.8599 7.34413 11.8915 7.28787 11.9478C7.23161 12.0041 7.2 12.0804 7.2 12.1599C7.2 12.2395 7.23161 12.3158 7.28787 12.3721C7.34413 12.4283 7.42044 12.4599 7.5 12.4599C7.57957 12.4599 7.65587 12.4283 7.71213 12.3721C7.76839 12.3158 7.8 12.2395 7.8 12.1599C7.8 12.0804 7.76839 12.0041 7.71213 11.9478C7.65587 11.8915 7.57957 11.8599 7.5 11.8599ZM15.876 13.0154C14.9823 13.0154 14.3461 13.7306 14.3461 14.7386C14.3461 15.7517 14.9823 16.4666 15.876 16.4666C16.7697 16.4666 17.4 15.7514 17.4 14.7386C17.4 13.7255 16.7697 13.0154 15.876 13.0154ZM7.5 13.0599C7.42044 13.0599 7.34413 13.0915 7.28787 13.1478C7.23161 13.2041 7.2 13.2804 7.2 13.3599C7.2 13.4395 7.23161 13.5158 7.28787 13.5721C7.34413 13.6283 7.42044 13.6599 7.5 13.6599C7.57957 13.6599 7.65587 13.6283 7.71213 13.5721C7.76839 13.5158 7.8 13.4395 7.8 13.3599C7.8 13.2804 7.76839 13.2041 7.71213 13.1478C7.65587 13.0915 7.57957 13.0599 7.5 13.0599ZM15.876 13.6511C16.323 13.6511 16.6055 14.0681 16.6055 14.7386C16.6055 15.3941 16.3128 15.8308 15.876 15.8308C15.4341 15.8308 15.1406 15.3989 15.1406 14.7386C15.1406 14.0783 15.429 13.6511 15.876 13.6511ZM7.5 14.2599C7.42044 14.2599 7.34413 14.2915 7.28787 14.3478C7.23161 14.4041 7.2 14.4804 7.2 14.5599C7.2 14.6395 7.23161 14.7158 7.28787 14.7721C7.34413 14.8283 7.42044 14.8599 7.5 14.8599C7.57957 14.8599 7.65587 14.8283 7.71213 14.7721C7.76839 14.7158 7.8 14.6395 7.8 14.5599C7.8 14.4804 7.76839 14.4041 7.71213 14.3478C7.65587 14.2915 7.57957 14.2599 7.5 14.2599ZM7.5 15.4599C7.42044 15.4599 7.34413 15.4915 7.28787 15.5478C7.23161 15.6041 7.2 15.6804 7.2 15.7599C7.2 15.8395 7.23161 15.9158 7.28787 15.9721C7.34413 16.0283 7.42044 16.0599 7.5 16.0599C7.57957 16.0599 7.65587 16.0283 7.71213 15.9721C7.76839 15.9158 7.8 15.8395 7.8 15.7599C7.8 15.6804 7.76839 15.6041 7.71213 15.5478C7.65587 15.4915 7.57957 15.4599 7.5 15.4599ZM7.5 16.6599C7.42044 16.6599 7.34413 16.6915 7.28787 16.7478C7.23161 16.8041 7.2 16.8804 7.2 16.9599C7.2 17.0395 7.23161 17.1158 7.28787 17.1721C7.34413 17.2283 7.42044 17.2599 7.5 17.2599C7.57957 17.2599 7.65587 17.2283 7.71213 17.1721C7.76839 17.1158 7.8 17.0395 7.8 16.9599C7.8 16.8804 7.76839 16.8041 7.71213 16.7478C7.65587 16.6915 7.57957 16.6599 7.5 16.6599ZM7.5 17.8599C7.42044 17.8599 7.34413 17.8915 7.28787 17.9478C7.23161 18.0041 7.2 18.0804 7.2 18.1599C7.2 18.2395 7.23161 18.3158 7.28787 18.3721C7.34413 18.4283 7.42044 18.4599 7.5 18.4599C7.57957 18.4599 7.65587 18.4283 7.71213 18.3721C7.76839 18.3158 7.8 18.2395 7.8 18.1599C7.8 18.0804 7.76839 18.0041 7.71213 17.9478C7.65587 17.8915 7.57957 17.8599 7.5 17.8599Z"
              fill="black"
            />
          </svg>

          <input
            className="placeholder:text-grayBody focus:outline-none flex-grow"
            placeholder="Add promo code"
            onChange={(e) => dispatch(updatePromoCode(e.target.value))}
            value={promocode}
          />
        </div>
        <div className="flex items-center gap-2 py-4 px-7 border-b border-grayPlaceholder justify-between max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.946 0.480185C12.9021 0.48142 12.8585 0.488675 12.8166 0.501748L5.13661 2.90175C5.03898 2.93233 4.95368 2.99329 4.89313 3.07576C4.83259 3.15823 4.79998 3.25788 4.80005 3.36018V21.1202C4.80001 21.2273 4.83579 21.3314 4.9017 21.4158C4.96762 21.5002 5.05988 21.5602 5.1638 21.5861L12.8438 23.5061C12.9146 23.5238 12.9884 23.5251 13.0598 23.5099C13.1311 23.4947 13.1981 23.4635 13.2556 23.4186C13.3131 23.3737 13.3595 23.3163 13.3915 23.2507C13.4235 23.1851 13.4401 23.1131 13.44 23.0402V0.960185C13.4401 0.895952 13.4272 0.832367 13.4022 0.773198C13.3772 0.714029 13.3406 0.660478 13.2945 0.615719C13.2484 0.570959 13.1939 0.535901 13.134 0.51262C13.0741 0.489339 13.0102 0.47831 12.946 0.480185ZM12.48 1.61362V22.4252L5.76005 20.7452V3.71269L12.48 1.61362ZM14.4 2.40018V3.36018H18.24V12.9602H19.2V2.88019C19.2 2.75289 19.1495 2.6308 19.0594 2.54079C18.9694 2.45077 18.8473 2.4002 18.72 2.40018H14.4ZM11.52 11.5202C11.3927 11.5202 11.2707 11.596 11.1806 11.7311C11.0906 11.8661 11.04 12.0492 11.04 12.2402C11.04 12.4311 11.0906 12.6143 11.1806 12.7493C11.2707 12.8843 11.3927 12.9602 11.52 12.9602C11.6474 12.9602 11.7694 12.8843 11.8595 12.7493C11.9495 12.6143 12 12.4311 12 12.2402C12 12.0492 11.9495 11.8661 11.8595 11.7311C11.7694 11.596 11.6474 11.5202 11.52 11.5202ZM14.88 13.9202C14.7527 13.9202 14.6307 13.9708 14.5407 14.0608C14.4506 14.1508 14.4001 14.2729 14.4 14.4002V21.1202C14.4001 21.2475 14.4506 21.3696 14.5407 21.4596C14.6307 21.5496 14.7527 21.6002 14.88 21.6002H22.56C22.6873 21.6002 22.8094 21.5496 22.8994 21.4596C22.9895 21.3696 23.04 21.2475 23.04 21.1202V14.4002C23.04 14.2729 22.9895 14.1508 22.8994 14.0608C22.8094 13.9708 22.6873 13.9202 22.56 13.9202H14.88ZM15.36 14.8802H22.08V20.6402H15.36V14.8802ZM17.76 15.8402C17.6964 15.8393 17.6333 15.851 17.5743 15.8748C17.5152 15.8985 17.4615 15.9337 17.4162 15.9783C17.3709 16.023 17.335 16.0762 17.3104 16.1349C17.2859 16.1936 17.2732 16.2566 17.2732 16.3202C17.2732 16.3838 17.2859 16.4468 17.3104 16.5055C17.335 16.5641 17.3709 16.6174 17.4162 16.662C17.4615 16.7067 17.5152 16.7419 17.5743 16.7656C17.6333 16.7893 17.6964 16.8011 17.76 16.8002H19.68C19.7437 16.8011 19.8068 16.7893 19.8658 16.7656C19.9249 16.7419 19.9786 16.7067 20.0239 16.662C20.0692 16.6174 20.1051 16.5641 20.1297 16.5055C20.1542 16.4468 20.1669 16.3838 20.1669 16.3202C20.1669 16.2566 20.1542 16.1936 20.1297 16.1349C20.1051 16.0762 20.0692 16.023 20.0239 15.9783C19.9786 15.9337 19.9249 15.8985 19.8658 15.8748C19.8068 15.851 19.7437 15.8393 19.68 15.8402H17.76Z"
                fill="black"
              />
            </svg>
            <span>Delivery</span>
          </div>
          <span>Free</span>
        </div>
      </div>
      <BottomPart
        buttonText="Checkout"
        onClick={() => dispatch(changeTab(1))}
      />
    </TabContainer>
  );
};

export default Main;