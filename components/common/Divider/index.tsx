const Divider = ({ color = "grayLabel" }: { color?: string }) => {
  const bgColor = color == "grayLabel" ? "transparent" : "primary";

  return (
    <div
      className={`flex relative border-[0.5px] border-${color} border-x-0 border-b-0 justify-center w-full`}
    >
      <span
        className={`flex w-2 h-2 border-[0.5px] border-${color} rotate-45 -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 bg-${bgColor}`}
      ></span>
    </div>
  );
};
export default Divider;
