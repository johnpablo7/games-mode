// import { RiArrowRightSLine } from "react-icons/ri";
import ArrowIcon from "../../Svg/ArrowIcon";

export const Main = () => {
  return (
    <main className="lg:pl-72 pt-32 lg:p-12">
      <div className="grid lg:grid-cols-6">
        <div className="relative col-span-5 h-full">
          <img
            src="/public/images/diablo.png"
            alt="img"
            className="aspect-[2/1] w-full object-center object-cover"
          />
          <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
            Diablo 3
          </h1>
          <div className="absolute left-0 bottom-0 p-8 max-w-xl">
            <p className="text-gray-200">Update</p>
            <h2 className="text-3xl text-white font-extrabold mb-8">
              Season 28, Rites of Sanctuary, is now available
            </h2>
            <button className="flex items-center gap-3 bg-[#0061FD] text-white py-4 px-8 rounded-xl text-lg">
              Play for free
              <ArrowIcon className="fill-current" />
            </button>
          </div>
        </div>
        <div className="bg-gray-500">Hola2</div>
      </div>
    </main>
  );
};
