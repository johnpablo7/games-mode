import { NavLink } from "react-router-dom";
import { imagesonsale } from "../../data/images";
import LeftArrowIcon from "../../Svg/LeftArrowIcon";
import RightArrowIcon from "../../Svg/RightArrowIcon";

export const Slide = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mt-10 mb-6 md:px-4">
        <h5 className="text-[#EBEBF5] text-2xl font-semibold">Games On Sale</h5>
        <div className="flex items-center gap-4">
          <LeftArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
          <RightArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
        </div>
      </div>
      {/* Videogames */}
      <div className="grid lg:grid-cols-6">
        {imagesonsale.map((game) => (
          <div key={game.id} className="p-4">
            <NavLink to="/" className="">
              <img
                src={game.img}
                alt="img"
                className="object-cover object-center w-full rounded-xl mb-4"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <h3 className="text-xl text-white font-semibold">
                  {game.name}
                </h3>
                <p className="text-lg text-[#EBEBF5] text-opacity-60 font-semibold mb-1">
                  {game.mode}
                </p>
                <span className="text-lg text-white font-semibold">
                  {game.price}
                </span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
