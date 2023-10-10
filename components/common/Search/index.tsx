import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import SearchIcon from "../../../assets/icons/Search.svg";
import Close from "../../../assets/icons/Close.svg";
import { changeSearchState } from "../../../store/globalSlice";
import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Search = () => {
  const { isSearchOpen } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();
  const router = useRouter();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/search");
  };

  return (
    <Modal isOpen={isSearchOpen}>
      <form
        className="flex border-grayLabel border-b pb-2 placeholder:text-grayLabel placeholder:text-sm mt-2 gap-3"
        onSubmit={submit}
      >
        <SearchIcon />{" "}
        <input className="flex-grow" placeholder="Search items" />
        <span
          onClick={() => dispatch(changeSearchState())}
          className="cursor-pointer"
        >
          <Close />
        </span>
      </form>
      <span className="text-sm text-grayPlaceholder my-3">Recent search</span>
      <div className="flex flex-wrap gap-4">
        <span className="flex gap-1 text-[13px] text-grayLabel rounded-[33px] bg-grayOpacity py-[10px] px-[12px] items-center ">
          Dress <Close />
        </span>
      </div>
      <span className="text-sm text-grayPlaceholder mt-4 mb-3">
        Popular search items
      </span>
      {["Trend"]?.map((c) => (
        <Link href="/" key={c} className="leading-3">
          {c}
        </Link>
      ))}
    </Modal>
  );
};

export default Search;
