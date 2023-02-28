import { NavLink } from "react-router-dom";
import { buttons } from "../../data/buttons";
import { RiSearchLine } from "react-icons/ri";
import NotificationIcon from "../../Svg/NotificationIcon";
import clsx from "clsx";

export const Header = () => {
  return (
    <div className="bg-woodsmoke sticky top-0 lg:pl-72 w-full flex flex-col md:flex-row items-center justify-between gap-6 lg:pt-12 p-5 md:p-11 lg:py-8 lg:pr-8 z-40">
      <nav className="order-1 lg:order-none w-full lg:pl-3">
        <ul className="flex items-center justify-self-start gap-3">
          {buttons.map((list) => (
            <li key={list.id} className="">
              <NavLink
                to={list.path}
                className={({ isActive }) =>
                  clsx(
                    "py-2 px-4 rounded-full lg:text-xl",
                    isActive
                      ? "bg-[#0061FD] text-white"
                      : "text-[#EBEBF5] opacity-60"
                  )
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-5 lg:gap-6 md:pr-0">
        <NotificationIcon className="text-[#EBEBF5] opacity-60 fill-current" />
        <form action="" className="relative w-80">
          <RiSearchLine className="absolute text-[#EBEBF5] opacity-60 top-2 lg:top-4 left-4 text-xl lg:text-xl" />
          <input
            type="text"
            className="bg-[#202020] outline-none py-1 lg:py-3 pl-12 pr-4 rounded-3xl text-lg lg:text-xl text-[#EBEBF5] w-full"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};
