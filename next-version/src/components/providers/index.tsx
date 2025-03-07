"use client";
import store from "@/lib/store";
import { Provider } from "react-redux";

export default function Providers(props: React.PropsWithChildren) {
  return <Provider store={store()}>{props.children}</Provider>;
}
