import { useDispatch, useSelector } from "react-redux";
import Select from "../../../common/Select";
import { updateFilters } from "../../../../store/productSlice";
import GridView from "../../../../assets/icons/gridView.svg";
import ListView from "../../../../assets/icons/Listview.svg";
import classNames from "classnames";

const ProductsFilter = () => {
  const dispatch = useDispatch();
  const { goodsList, filters } = useSelector((state: any) => state.products);

  return (
    <div className="px-4 py-1 pt-[77px] flex items-center justify-between max-w-[1280px] m-auto">
      <span className="text-base uppercase leading-4 text-grayBody">
        {goodsList?.length} apparel
      </span>
      <div className="flex items-center gap-3">
        <Select
          value={filters.sortBy}
          list={["New", "Rating", 'Price']}
          onChange={(value) =>
            dispatch(
              updateFilters({
                ...filters,
                sortBy: value,
              })
            )
          }
        />
        <div
          className="flex items-center justify-center w-fit px-3 py-3 bg-grayOpacity rounded-[33px] cursor-pointer"
          onClick={() => {
            dispatch(
              updateFilters({
                ...filters,
                view: filters.view == "grid" ? "list" : "grid",
              })
            );
          }}
        >
          {filters.view == "grid" ? <GridView /> : <ListView />}
        </div>
        <div
          className="flex items-center justify-center w-fit px-3 py-3 bg-grayOpacity rounded-[33px] cursor-pointer"
          onClick={() => {
            dispatch(
              updateFilters({
                ...filters,
                dir: filters.dir == "down" ? "up" : "down",
              })
            );
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              "w-[20px] h-[20px]",
              filters.dir == "down" ? "fill-black" : "fill-primary"
            )}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 7.5V8.5H21V7.5H3ZM10 16.5H14V15.5H10V16.5ZM18 12.5H6V11.5H18V12.5Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
