import { formateInputValue, handleInputValue } from "@/lib/utils";
import { useCallback } from "react";

type InputPropType = {
  inputType?: "ccv" | "card_number" | "exp_date" | "text" | "phone";
  onChange: (value: string) => void;
} & Omit<React.ComponentPropsWithoutRef<"input">, "onChange">;

export default function Input({
  inputType,
  onChange,
  ...props
}: InputPropType) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!inputType) onChange(value);

      const isValid = handleInputValue(
        value,
        inputType === "text" ? "string" : "number"
      );

      isValid && onChange(value);
    },
    [inputType, onChange]
  );

  return (
    <input
      {...props}
      value={
        inputType
          ? formateInputValue(inputType, String(props.value || ""))
          : props.value
      }
      onChange={handleChange}
    />
  );
}
