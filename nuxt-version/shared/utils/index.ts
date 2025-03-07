import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CartItemType } from "../type";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formateExpiredDate = (value: string) => {
  const limitedValue = value.trim().replace("/", "").slice(0, 4);
  const month = Number(limitedValue.slice(0, 2));

  if (month > 12) return "12";

  return limitedValue.length > 1
    ? `${limitedValue.slice(0, 2)}/${limitedValue.slice(2)}`
    : limitedValue;
};

export const handleInputValue = (value: string, type: "string" | "number") => {
  const isNumeric = typeof Number(value.replace(/[-\/]/g, "")) === "number";
  const isNumberInside = /\d+/g.test(value);

  return (
    !value.length ||
    (isNumeric && type === "number") ||
    (!isNumberInside && type === "string")
  );
};

export const formateCCV = (value: string) =>
  value.replace(/[-/]/g, "").trim().slice(0, 4);

export const formatePhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  return !match ? value : `${match[1]}-${match[2]}-${match[3]}`;
};

export const formateCardNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{4})(\d{4})?(\d{4})?(\d{4})?$/);

  if (!match) return value.trim().slice(0, 19);

  return match
    .slice(1, 5)
    .filter((s) => s)
    .join("-");
};

export const formateInputValue = (
  type: "ccv" | "exp_date" | "card_number" | "text" | "phone",
  value: string
) => {
  switch (type) {
    case "ccv":
      return formateCCV(value);
    case "card_number":
      return formateCardNumber(value);
    case "exp_date":
      return formateExpiredDate(value);
    case "phone":
      return formatePhoneNumber(value);
    default:
      return value;
  }
};

export const getTotalPrice = (cartList: { value: CartItemType[] }) =>
  cartList.value.reduce((a, b) => a + b.price * b.count, 0);

export const isMasterCard = (cardNumber: string) =>
  /^5[1-5][0-9]{14}$/g.test(cardNumber);
