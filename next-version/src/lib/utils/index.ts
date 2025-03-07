import { CartItemType } from "@/lib/type";
export * from "./text";

export const getTotalPrice = (cartList: CartItemType[]) =>
  cartList.reduce((a, b) => a + b.price * b.count, 0);

export const isMasterCard = (cardNumber: string) =>
  /^5[1-5][0-9]{14}$/g.test(cardNumber);
