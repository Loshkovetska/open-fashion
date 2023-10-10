/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import Export from "../../../../assets/icons/Export.svg";
import { useRouter } from "next/router";
import { ColorSelector, SizeSelector } from "../../../common/Selectors";
import {  useState } from "react";
import Button from "../../../common/Button";
import { addToCart } from "../../../../store/cartSlice";
import Slider from "../../../common/Slider";
import FullScreenIcon from "../../../../assets/icons/Resize.svg";
import { changeFullScreenState } from "../../../../store/globalSlice";
import ProductAccordion from "../ProductAccordion";
const ProductContent = () => {
  const dispatch = useDispatch();
  const [chosen, setChosen] = useState({
    color: "",
    size: "",
  });
  const router = useRouter();
  const { good } = useSelector((state: any) => state.products);

  const updateState = (prop: string, value: string) => {
    const obj = { ...chosen };

    if (prop == "color") {
      obj.color = obj.color == value ? "" : value;
    }
    if (prop == "size") {
      obj.size = obj.size == value ? "" : value;
    }
    setChosen({
      ...chosen,
      ...obj,
    });
  };

  const copy = () => navigator.clipboard.writeText(router.asPath);

  return (
    <section className="pt-[90px] px-4">
      <div className="flex gap-4 flex-wrap mb-8">
        <div className="flex w-2/3 product-content-slider relative">
          <Slider
            spaceBetween={0}
            slidesPerView={1}
            className="grey"
            sliderStyle={{
              width: "100%",
            }}
            slideClass="grey"
            slides={good?.src.map((c: any) => (
              <img
                src={c}
                alt=""
                className="object-cover w-full h-full"
                key={c}
              />
            ))}
          />
          <span
            className="absolute bottom-4 right-4 flex justify-center items-center p-3 rounded-full bg-black/50 z-[1] cursor-pointer"
            onClick={() => dispatch(changeFullScreenState())}
          >
            <FullScreenIcon />
          </span>
        </div>
        <div className="flex gap-1 flex-grow justify-between">
          <div className="flex flex-col flex-grow relative">
            <Export
              onClick={copy}
              className="cursor-pointer absolute right-0 top-0 z-[1]"
            />
            <span className="text-sm text-black mb-1 uppercase pr-6">
              {good?.title}
            </span>
            <p className="text-[12px] text-grayLabel line-clamp-1 mb-2">
              {good?.description}
            </p>
            <span className="text-primary text-sm ">${good?.price}</span>
            <div className=" flex flex-col gap-2 mt-6">
              {good?.colors?.length && (
                <ColorSelector
                  chosenColor={chosen?.color || ""}
                  colors={good?.colors}
                  onClick={(value) => updateState("color", value)}
                />
              )}
              {good?.sizes?.length && (
                <SizeSelector
                  chosenSize={chosen?.size || ""}
                  sizes={good?.sizes}
                  onClick={(value) => updateState("size", value)}
                />
              )}
            </div>
            <Button
              color="black"
              style="mt-6 w-full"
              onClick={() => {
                if (Object.values(chosen).every(Boolean)) {
                  dispatch(
                    addToCart({
                      _id: good._id,
                      title: good.title,
                      description: good.description,
                      price: good.price,
                      src: good.src[0],
                      count: 1,
                      ...chosen,
                    })
                  );
                }
              }}
            >
              Add TO cart
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-base mb-2 leading-5 uppercase">MATERIALS</span>
        <p className="text-base leading-6 mb-4 text-grayLabel">
          We work with monitoring programmes to ensure compliance with safety,
          health and quality standards for our products.{" "}
        </p>
        <span className="text-base mb-2 leading-5 uppercase">Care</span>
        <p className="text-base leading-6 mb-4 text-grayLabel">
          To keep your jackets and coats clean, you only need to freshen them up
          and go over them with a cloth or a clothes brush. If you need to dry
          clean a garment, look for a dry cleaner that uses technologies that
          are respectful of the environment.
        </p>
        <ul>
          <li className="flex items-center gap-2 text-base leading-6 mb-4">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M7.65101 11.4464L3.8407 18.5405H19.9806L11.9881 3.54681L8.73526 9.33982"
                  stroke="black"
                />
                <path d="M3.77869 6.95447L21.8082 16.0002" stroke="black" />
              </g>
            </svg>
            Do not use bleach
          </li>
          <li className="flex items-center gap-2 text-base leading-6 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.5">
                <rect
                  x="4.38623"
                  y="4.48956"
                  width="15"
                  height="15"
                  stroke="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.3549 16.3966L2.24756 7.38008L2.6933 6.48492L20.8006 15.5015L20.3549 16.3966Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.845 14.7508C14.1197 15.4898 13.1095 15.9481 11.9922 15.9481C9.78469 15.9481 7.99512 14.1586 7.99512 11.951C7.99512 11.7507 8.00985 11.5538 8.0383 11.3614L7.1064 10.8974C7.0335 11.2371 6.99512 11.5896 6.99512 11.951C6.99512 14.7109 9.2324 16.9481 11.9922 16.9481C13.5047 16.9481 14.8601 16.2763 15.7765 15.2147L14.845 14.7508ZM8.31483 10.382C8.92473 8.95439 10.3416 7.95392 11.9922 7.95392C14.1998 7.95392 15.9893 9.74349 15.9893 11.951C15.9893 12.6751 15.7968 13.3543 15.4601 13.94L16.3567 14.3865C16.7597 13.6659 16.9893 12.8353 16.9893 11.951C16.9893 9.1912 14.7521 6.95392 11.9922 6.95392C9.94954 6.95392 8.19312 8.17955 7.41823 9.93554L8.31483 10.382Z"
                  fill="black"
                />
              </g>
            </svg>
            Do not tumble dry
          </li>
          <li className="flex items-center gap-2 text-base leading-6 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M2.69629 5.23634L4.81603 19.2713H19.108L21.3883 4.78668"
                  stroke="black"
                />
                <path
                  d="M8.25888 6.65004C8.29179 7.72475 9.06165 9.87416 11.8778 9.87416C14.694 9.87416 15.6612 7.68087 15.7928 6.58423C16.0012 7.69183 17.4049 9.8873 20.4316 9.80834M3.37659 10.0942C4.01512 10.1514 5.46946 9.8998 6.17853 8.43593"
                  stroke="black"
                />
                <path d="M3.19226 2.7464L20.4393 20.3469" stroke="black" />
              </g>
            </svg>
            Dry clean with tetrachloroethylene
          </li>
          <li className="flex items-center gap-2 text-base leading-6 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M7.66513 6.05865H14.9542C16.4447 6.05865 19.5971 6.94068 20.2831 10.4688M20.2831 10.4688C20.9691 13.997 20.9773 17.0433 20.8956 18.1254H3.00989C3.1324 15.614 4.68824 10.5913 9.93146 10.5913C15.1747 10.5913 19.0172 10.5097 20.2831 10.4688Z"
                  stroke="black"
                />
                <circle cx="12.7492" cy="14.2665" r="0.735026" fill="black" />
              </g>
            </svg>
            Iron at a maximum of 110ºC/230ºF
          </li>
        </ul>
        <span className="text-base mb-5 leading-5 uppercase mt-10">FAQ</span>
        <div className="flex flex-col gap-3">
          <ProductAccordion
            title="Free Flat Rate Shipping"
            text="Estimated to be delivered on 
09/11/2021 - 12/11/2021.
"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.5654 6.87109H18.0525L22.4874 11.2538V17.9844H20.4914"
                  stroke="black"
                />
                <path d="M8.55664 18.0889H15.2872" stroke="black" />
                <circle cx="17.9482" cy="17.9843" r="2.4218" stroke="black" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.05217 19.9061C7.11356 19.9061 7.97398 19.0457 7.97398 17.9843C7.97398 16.9229 7.11356 16.0625 6.05217 16.0625C4.99079 16.0625 4.13037 16.9229 4.13037 17.9843C4.13037 19.0457 4.99079 19.9061 6.05217 19.9061ZM6.05217 20.9061C7.66584 20.9061 8.97398 19.598 8.97398 17.9843C8.97398 16.3706 7.66584 15.0625 6.05217 15.0625C4.43851 15.0625 3.13037 16.3706 3.13037 17.9843C3.13037 19.598 4.43851 20.9061 6.05217 20.9061Z"
                  fill="black"
                />
                <path
                  d="M1.49817 18.4932L1.49818 3.50098L13.501 3.52347V17.9844H8.4523"
                  stroke="black"
                />
                <path d="M1.19995 17.9844H3.70435" stroke="black" />
              </svg>
            }
          />
          <ProductAccordion
            title="COD Policy"
            text="Estimated to be delivered on 
09/11/2021 - 12/11/2021.
"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M10.446 1.01811L20.2367 10.8088L10.8086 20.2369L1.01794 10.4462L1.38056 1.38073L10.446 1.01811Z"
                    stroke="black"
                  />
                  <circle cx="6.7839" cy="6.2972" r="0.833333" stroke="black" />
                </g>
              </svg>
            }
          />
          <ProductAccordion
            title="Return Policy"
            text="Estimated to be delivered on 
09/11/2021 - 12/11/2021.
"
            icon={
              <svg
                className="w-5 h-5"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M3.37694 7.84086C3.83291 6.2507 4.78058 4.84572 6.08414 3.82727C7.3877 2.80882 8.98021 2.22919 10.6334 2.17146C12.2867 2.11373 13.9157 2.58086 15.2872 3.50589C16.6586 4.43093 17.702 5.76639 18.2677 7.32086"
                    stroke="black"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.124 13.0452C17.5347 14.4418 16.5529 15.6374 15.2976 16.487C14.0423 17.3367 12.5675 17.8039 11.0519 17.832C9.53637 17.8601 8.04523 17.4478 6.75932 16.6453C5.47341 15.8427 4.44797 14.6843 3.80737 13.3105"
                    stroke="black"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.33432 12.5202L3.62253 12.7632L2.24414 16.294"
                    stroke="black"
                  />
                  <path
                    d="M14.3956 7.80029L18.2503 7.79082L19.5665 4.28137"
                    stroke="black"
                  />
                </g>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ProductContent;


