import { Forward } from "@/components/icons";
import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const NavigationNextButton = (props: any) => (
  <Forward
    className="-rotate-90 cursor-pointer"
    {...props}
  />
);

const NavigationPrevButton = (props: any) => (
  <Forward
    className="rotate-90 cursor-pointer"
    {...props}
  />
);

const NavigationBreak = () => (
  <div className="flex items-center justify-center text-lg leading-6 bg-[#f3f3f3] cursor-pointer py-[4px] px-[12px] hover:bg-gray-body hover:text-white transition-all duration-300">
    ...
  </div>
);

const NavigationPage = (props: any) => props.pageNum;

type PaginationPropType = {
  countPerPage: number;
  totalCount: number;
  setOffsets: (val: { start: number; end: number }) => void;
};

export default function Pagination({
  countPerPage,
  totalCount,
  setOffsets,
}: PaginationPropType) {
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(totalCount / countPerPage);

  const handlePageClick = useCallback(
    (selectedItem: { selected: number }) => {
      const newOffset = (selectedItem.selected * countPerPage) % totalCount;
      setItemOffset(newOffset);
    },
    [totalCount]
  );

  useEffect(() => {
    const endOffset = itemOffset + countPerPage;
    setOffsets({ start: itemOffset, end: endOffset });
  }, [itemOffset, countPerPage, setOffsets]);

  return (
    <div className="max-w-[1280px] mx-auto w-full">
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
        activeClassName="bg-gray-body text-white"
        pageClassName="flex items-center justify-center text-lg leading-6 bg-[#f3f3f3] cursor-pointer py-[4px] px-[12px] hover:bg-gray-body hover:text-white transition-all duration-300"
      />
    </div>
  );
}
