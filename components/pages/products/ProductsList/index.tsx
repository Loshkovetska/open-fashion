import { useSelector } from "react-redux";
import GoodItem from "../../../common/GoodItem";
import classNames from "classnames";
import { useState } from "react";
import Pagination from "../../../common/Pagination";

const ProductsList = () => {
  const countPerPage = 10;
  const { goodsList, filters } = useSelector((state: any) => state.products);
  const [currentItems, setItems] = useState(Array());
  return (
    <section className={classNames("w-full px-4 pt-4")}>
      <div
        className={classNames(
          "max-w-[1280px] m-auto w-full gap-x-[12px] gap-y-4",
          filters.view == "grid" ? "grid grid-cols-auto" : "flex flex-col"
        )}
      >
        {currentItems?.map((c: any) => (
          <GoodItem key={c._id} item={c} vertical={filters.view == "grid"} />
        ))}
      </div>
      <Pagination
        countPerPage={countPerPage}
        list={goodsList}
        setItems={setItems}
      />
    </section>
  );
};

export default ProductsList;
