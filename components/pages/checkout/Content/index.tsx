import AddCard from "../AddCard";
import AddDelivery from "../AddDelivery";
import Main from "../Main";
import ShipAddress from "../ShipAddress";

const Content = () => {
  return (
    <section className="flex w-full pt-[90px] h-full flex-grow overflow-hidden relative">
      <Main />
      <ShipAddress />
      <AddDelivery />
      <AddCard />
      
    </section>
  );
};

export default Content;
