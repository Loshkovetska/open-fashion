import Logo from "../../../../assets/icons/Logo.svg";
import Divider from "../../../common/Divider";
import VectorAbout from "../../../../assets/icons/Vector(About).svg";

const OpenFashion = () => {
  const blocks = [
    {
      src: "https://i.ibb.co/7JQ54CF/Miroodles-Sticker-1.png",
      text: `Fast shipping. Free on orders over $25.`,
    },
    {
      src: "https://i.ibb.co/5T55yPK/Miroodles-Sticker-2.png",
      text: `Sustainable process from start to finish.`,
    },
    {
      src: "https://i.ibb.co/F429SmD/Miroodles-Sticker-3.png",
      text: `Unique designs and high-quality materials.`,
    },
    {
      src: "https://i.ibb.co/0KT6Gvp/Miroodles-Sticker.png",
      text: `Fast shipping. Free on orders over $25.`,
    },
  ];
  return (
    <section className="bg-[#f2f2f280] py-[28px] px-[16px] ">
      <div className="flex flex-col items-center justify-center max-w-[285px] m-auto">
        <Logo />
        <p className="text-base mt-4 text-center tracking-[0.14px] leading-5 mb-[5px]">
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </p>
        <div className="max-w-[124px] w-full">
          <Divider />
        </div>
      </div>
      <div className="grid grid-cols-auto w-full m-auto max-w-[720px] mt-4 gap-4">
        {blocks?.map((c, i) => (
          <div className="flex flex-col items-center justify-center" key={i}>
            <img src={c.src} alt="" className="w-[56px] h-[36px] mb-3" />
            <p className="text-center   text-[13px] leading-5">{c.text}</p>
          </div>
        ))}
      </div>
      <VectorAbout className="m-auto mt-8" />
    </section>
  );
};

export default OpenFashion;
