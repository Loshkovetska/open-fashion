"use client";
import AddCard from "../add-card";
import AddDelivery from "../add-delivery";
import Main from "../main";
import ShipAddress from "../ship-address";

export default function Content() {
  return (
    <section className="flex w-full pt-[90px] h-full flex-grow overflow-hidden relative">
      <Main />
      <ShipAddress />
      <AddDelivery />
      <AddCard />
    </section>
  );
}
