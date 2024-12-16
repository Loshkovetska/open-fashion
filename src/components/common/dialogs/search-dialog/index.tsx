import { Close, Search as SearchIcon } from "@/components/icons";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import { DialogPropType } from "@/lib/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";

export default function Search({
  open,
  q,
  onOpenChange,
}: DialogPropType & { q?: string }) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (value.length) {
        router.push("/products?q=" + value);
        onOpenChange();
      }
    },
    [value, onOpenChange]
  );

  useEffect(() => {
    q && setValue(q);
  }, [q]);

  return (
    <Modal isOpen={open}>
      <form
        className="flex border-gray-label border-b pb-2 placeholder:text-gray-label placeholder:text-sm mt-2 gap-3"
        onSubmit={onSubmit}
      >
        <SearchIcon />
        <Input
          value={value}
          onChange={setValue}
          className="flex-grow"
          placeholder="Search items"
        />
        <Close
          onClick={onOpenChange}
          className="cursor-pointer"
        />
      </form>
      <span className="text-sm text-gray-placeholder my-3">Recent search</span>
      <div className="flex flex-wrap gap-4">
        <span className="flex gap-1 text-[13px] text-gray-label rounded-[33px] bg-gray-opacity py-[10px] px-[12px] items-center ">
          Dress <Close />
        </span>
      </div>
      <span className="text-sm text-gray-placeholder mt-4 mb-3">
        Popular search items
      </span>
      {["Trend"]?.map((c) => (
        <Link
          href="/"
          key={c}
          className="leading-3"
        >
          {c}
        </Link>
      ))}
    </Modal>
  );
}
