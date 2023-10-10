import Divider from "../../../common/Divider";
import HeadLine2 from "../../../common/HeadLine2";

const TopTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-fit flex flex-col items-center justify-center m-auto gap-2 mb-5">
      <HeadLine2>{title}</HeadLine2>
      <Divider />
    </div>
  );
};

export default TopTitle;
