// import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { images } from "../../data/images";
import ArrowIcon from "../../Svg/ArrowIcon";
import { Slide } from "./Slide";

export const Main = () => {
  return (
    <main className="lg:pl-72 md:px-4">
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="relative md:col-span-5 h-full p-4 md:p-2 md:mb-4">
          <img
            src="/images/diablo.png"
            alt="img"
            className="aspect-[2/1] w-full object-center object-cover rounded-xl xl:rounded-tr-none xl:rounded-br-none"
          />
          <h1 className="absolute top-6 left-8 md:left-10 lg:p-9 text-sm md:text-xl lg:text-2xl text-white font-bold">
            Diablo 3
          </h1>
          <div className="absolute left-0 bottom-0 p-8 md:px-10 md:py-12 lg:p-20 max-w-xs md:max-w-md lg:max-w-xl">
            <p className="text-gray-200 text-sm mb-2 font-semibold">Update</p>
            <h2 className="text-sm md:text-xl lg:text-2xl text-white font-extrabold mb-2 lg:mb-8">
              Season 28, Rites of Sanctuary, is now available
            </h2>
            <button className="flex items-center gap-3 bg-[#0061FD] text-white py-1 px-2 md:py-2 md:px-4 lg:py-4 lg:px-8 rounded-xl text-xs md:text-lg lg:text-lg">
              Play for free
              <ArrowIcon className="fill-current" />
            </button>
          </div>
        </div>
        {/* Games */}
        <div className="col-span-1 w-full h-[500px] md:h-[330px] lg:h-[870px] md:p-2 lg:p-0">
          <ul className="px-4 md:px-0 lg:px-4 flex flex-col h-full overflow-y-scroll">
            {images.map((game) => (
              <li key={game.id}>
                <NavLink
                  to="/"
                  className="flex items-center md:justify-center lg:justify-start gap-4 text-white text-base md:text-xl p-4 hover:bg-[#202020] rounded-xl"
                >
                  <img
                    src={game.img}
                    alt="img"
                    className="w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-28 object-cover object-center rounded-xl"
                  />
                  <span className="md:hidden lg:block">{game.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Slide />
    </main>
  );
};
