import profile from "../../../public/devicon/profile.svg";
import { NavLink } from "react-router-dom";
import { links, linksbottom } from "../../data/store";
import LogoIcon from "../../Svg/LogoIcon";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full flex flex-col border-r border-[#38383A] py-14 px-4">
      <div className="flex items-center justify-center mb-14">
        <NavLink to="/" className="cursor-pointer">
          <LogoIcon />
        </NavLink>
      </div>

      <div className="flex flex-col flex-1 items-center justify-between">
        <div className="w-full">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="text-[#EBEBF5] opacity-60 flex items-start gap-4 hover:bg-[#202020] hover:text-white py-4 px-8 rounded-xl hover:opacity-100 fill-current"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <ul>
            {linksbottom.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="text-[#EBEBF5] opacity-60 flex items-start gap-4 hover:bg-[#202020] hover:text-white py-4 px-8 rounded-xl hover:opacity-100 fill-current"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
            <NavLink
              to="/perfil"
              className="text-[#EBEBF5] opacity-60 flex items-start gap-4 hover:bg-[#202020] hover:text-white py-4 px-8 rounded-xl hover:opacity-100 fill-current"
            >
              <img src={profile} alt="perfil" />
              <span>Tung Tran</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
