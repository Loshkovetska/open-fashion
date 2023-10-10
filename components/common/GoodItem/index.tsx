import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeModalState } from "../../../store/cartSlice";
import Link from "next/link";
import Star from "../../../assets/icons/Star.svg";
const GoodItem = ({ item, vertical }: { item: any; vertical: boolean }) => {
  const { cartList } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const isSaved = cartList.find((c: any) => c._id == item._id);
  if (vertical) {
    return (
      <div className="flex flex-col w-full">
        <div className="w-full relative mb-3">
          <img src={item.src[0]} alt="" className="object-cover w-full h-56" />
          <svg
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              "w-4 h-4 absolute bottom-2 right-2 z-[1] cursor-pointer",
              isSaved && "fill-primary"
            )}
            onClick={() => dispatch(changeModalState(item))}
          >
            <path
              d="M1.84806 2.69799C0.272813 4.27325 0.272814 6.82723 1.84806 8.40248L7.95796 14.5124L7.99995 14.4704L8.042 14.5124L14.1519 8.40253C15.7271 6.82728 15.7271 4.2733 14.1519 2.69805C12.5766 1.12279 10.0227 1.1228 8.44741 2.69805L8.35356 2.79189C8.1583 2.98716 7.84171 2.98716 7.64645 2.79189L7.55255 2.69799C5.9773 1.12274 3.42331 1.12274 1.84806 2.69799Z"
              stroke="#A8715A"
            />
          </svg>
        </div>
        <Link href={`/products/${item._id}`}>
          <span className="text-sm text-black mb-1 uppercase">
            {item.title}
          </span>
          <p className="text-[12px] text-grayLabel line-clamp-1 mb-2">
            {item.description}
          </p>
          <span className="text-primary text-sm ">${item.price}</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex items-stretch">
      <img
        src={item.src[0]}
        alt=""
        className="w-[100px] h-[134px] flex object-cover mr-[12px]"
      />
      <div className="flex flex-col flex-grow">
        <Link href={`/products/${item._id}`}>
          <span className="text-sm text-black uppercase">{item.title}</span>
          <p className="text-[12px] text-grayLabel line-clamp-1 mb-2">
            {item.description}
          </p>
          <span className="text-primary text-sm mb-[10px] flex">
            ${item.price}
          </span>
          <span className="flex items-center text-sm text-grayLabel gap-[3px]">
            <Star /> {item.rate} Ratings
          </span>
        </Link>
        <div className="flex justify-between items-center mt-[11px]">
          {!!item?.sizes?.length ? (
            <div className="flex items-center gap-[6px]">
              <span className="text-[10px] text-grayLabel">Size</span>
              {item.sizes?.map((c: any) => (
                <span
                  key={c}
                  className="flex items-center justify-center px-[8px] py-[6px] border border-grayBorder rounded-full text-[10px]"
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    {c}
                  </span>
                </span>
              ))}
            </div>
          ) : (
            <div className="flex">No sizes</div>
          )}
          <svg
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              "w-4 h-4 cursor-pointer",
              isSaved && "fill-primary"
            )}
            onClick={() => dispatch(changeModalState(item))}
          >
            <path
              d="M1.84806 2.69799C0.272813 4.27325 0.272814 6.82723 1.84806 8.40248L7.95796 14.5124L7.99995 14.4704L8.042 14.5124L14.1519 8.40253C15.7271 6.82728 15.7271 4.2733 14.1519 2.69805C12.5766 1.12279 10.0227 1.1228 8.44741 2.69805L8.35356 2.79189C8.1583 2.98716 7.84171 2.98716 7.64645 2.79189L7.55255 2.69799C5.9773 1.12274 3.42331 1.12274 1.84806 2.69799Z"
              stroke="#A8715A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GoodItem;
