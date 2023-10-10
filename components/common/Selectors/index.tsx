import classNames from "classnames";

export const ColorSelector = ({
  colors,
  chosenColor,
  onClick,
}: {
  colors: Array<{
    title: string;
    value: string;
  }>;
  chosenColor: string;
  onClick: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <span className="mb-2">Color</span>
      <div className="flex items-center flex-wrap gap-2">
        {colors?.map((c: any) => (
          <span
            className={classNames(
              "w-6 h-6 rounded-full border  cursor-pointer flex justify-center items-center transition-all",
              chosenColor == c.title ? "border-grayBorder" : "border-none"
            )}
            onClick={() => onClick(c.title)}
            key={c.title}
          >
            <span
              className="flex w-4 h-4 rounded-full"
              style={{
                backgroundColor: c.value,
              }}
            ></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export const SizeSelector = ({
  sizes,
  chosenSize,
  onClick,
}: {
  sizes: Array<string>;
  chosenSize: string;
  onClick: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <span className="mb-2">Size</span>
      <div className="flex items-center flex-wrap gap-3">
        {sizes?.map((c: any) => (
          <span
            className={classNames(
              "w-6 h-6 rounded-full border cursor-pointer flex items-center justify-center text-sm",
              chosenSize == c
                ? "border-none text-white bg-grayBody"
                : "border-grayBorder"
            )}
            onClick={() => onClick(c)}
            key={c}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
};
