import Counter from "@/components/common/counter";
import { Selector } from "@/components/common/selector";
import classNames from "classnames";

type VariantsPropType = {
  selectedColor: string;
  selectedSize: string;
  colors: { title: string; value: string }[];
  sizes: string[];
  amount?: number;
  className?: string;
  onSelect: (type: "size" | "color", value: string) => void;
  changeAmount?: (num: number) => void;
};

export default function Variants({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  amount,
  className,
  onSelect,
  changeAmount,
}: VariantsPropType) {
  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      {colors?.length && (
        <Selector
          title="Color"
          selected={selectedColor}
          list={colors}
          onSelect={(value) => onSelect("color", value)}
        />
      )}
      {sizes?.length && (
        <Selector
          title="Size"
          selected={selectedSize}
          list={sizes}
          onSelect={(value) => onSelect("size", value)}
        />
      )}
      {changeAmount && (
        <Counter
          title="Count"
          count={amount || 0}
          onClick={changeAmount}
        />
      )}
    </div>
  );
}
