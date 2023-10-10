import { useEffect, useState } from "react";
import Forward from "../../../assets/icons/Forward.svg";
import ReactPaginate from "react-paginate";

const NavigationNextButton = (props: any) => {
  return <Forward className="-rotate-90 cursor-pointer" {...props} />;
};

const NavigationPrevButton = (props: any) => {
  return <Forward className="rotate-90 cursor-pointer" {...props} />;
};

const NavigationBreak = (props: any) => {
  return (
    <div
      className="flex items-center justify-center text-lg leading-6 bg-[#f3f3f3] cursor-pointer py-[4px] px-[12px] hover:bg-grayBody hover:text-white transition-all duration-300"
      {...props}
    >
      ...
    </div>
  );
};

const NavigationPage = (props: any) => {
  return <>{props.pageNum}</>;
};

const Pagination = ({
  countPerPage,
  list,
  setItems,
}: {
  countPerPage: number;
  list: Array<any>;
  setItems: (val: any) => void;
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(list.length / countPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * countPerPage) % list.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + countPerPage;
    setItems(list.slice(itemOffset, endOffset));
  }, [itemOffset, list, countPerPage]);

  return (
    <div className="max-w-[1280px] m-auto w-full">
      <ReactPaginate
        breakLabel={<NavigationBreak />}
        nextLabel={<NavigationNextButton />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<NavigationPrevButton />}
        pageLabelBuilder={(pageNum) => <NavigationPage pageNum={pageNum} />}
        renderOnZeroPageCount={null}
        className="flex items-center gap-[12px] justify-center mt-[50px]"
        disabledClassName="hidden"
        activeClassName="bg-grayBody text-white"
        pageClassName="flex items-center justify-center text-lg leading-6 bg-[#f3f3f3] cursor-pointer py-[4px] px-[12px] hover:bg-grayBody hover:text-white transition-all duration-300"
      />
    </div>
  );
};

export default Pagination;
