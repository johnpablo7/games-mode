import LeftArrowIcon from "../../Svg/LeftArrowIcon";
import RightArrowIcon from "../../Svg/RightArrowIcon";

export const Slide = () => {
  return (
    <div className="bg-red-300 flex items-center justify-between mt-10 mb-6">
      <h5 className="text-[#EBEBF5]text-2xl">Games On Sale</h5>
      <div className="flex items-center gap-6 text-[#EBEBF5]">
        <LeftArrowIcon />
        <RightArrowIcon />
      </div>
    </div>
  );
};
