import HeadLine2 from "../../../common/HeadLine2";

const Trend = () => {
  const tags = [
    "#2021",
    "#spring",
    "#collection",
    "#fall",
    "#dress",
    "#autumncollection",
    "#openfashion",
  ];
  return (
    <section className="py-[64px] px-[16px] max-w-[1280px] m-auto">
      <div className="w-fit flex flex-col items-center justify-center m-auto">
        <HeadLine2>@trending</HeadLine2>
      </div>
      <div className="flex flex-wrap gap-[10px] mt-[8px] items-center">
        {tags?.map((c) => (
          <span
            className="block px-[10px] py-[8px] rounded-[30px] bg-[#F9F9F9]"
            key={c}
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Trend;
