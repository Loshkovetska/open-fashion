import classNames from "classnames";

type SelectorPropType = {
  title: string;
  list: Array<string | { title: string; value: string }>;
  selected: string;
  onSelect: (val: string) => void;
};

export const Selector = ({
  title,
  list,
  selected,
  onSelect,
}: SelectorPropType) => {
  return (
    <div className="flex flex-col gap-2">
      <span>{title}</span>
      <div className="flex items-center flex-wrap gap-3">
        {list?.map((c) => (
          <span
            className={classNames(
              "size-6 rounded-full border cursor-pointer flex items-center justify-center text-sm text-sm",
              typeof c !== "object" && selected === c
                ? "border-none text-white bg-gray-body"
                : typeof c === "object" && selected === c.title
                  ? "text-white border-gray-body"
                  : "border-gray-border"
            )}
            onClick={() => onSelect(typeof c === "object" ? c.title : c)}
            key={typeof c === "object" ? c.title : c}
          >
            {typeof c === "object" ? null : c}
            {typeof c === "object" && (
              <span
                className="flex w-4 h-4 rounded-full"
                style={{
                  backgroundColor: c.value,
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
