import V1 from "../../../../assets/logos/Prada.svg";
import V2 from "../../../../assets/logos/Burberry.svg";
import V3 from "../../../../assets/logos/Boss.svg";
import V4 from "../../../../assets/logos/Catier.svg";
import V5 from "../../../../assets/logos/Gucci.svg";
import V6 from "../../../../assets/logos/Tiffany & Co.svg";
import Divider from "../../../common/Divider";

const Logos = () => {
  return (
    <section className="flex flex-col items-center px-[16px]">
      <div className="w-[124px]">
        <Divider />
      </div>
      <div className="grid grid-cols-3 my-[35px] gap-5 items-center justify-center max-w-[400px]">
        <V1 className="w-full" />
        <V2 className="w-full" />
        <V3 className="w-full" />
        <V4 className="w-full" />
        <V5 className="w-full" />
        <V6 className="w-full" />
      </div>
      <div className="w-[124px]">
        <Divider />
      </div>
    </section>
  );
};

export default Logos;
