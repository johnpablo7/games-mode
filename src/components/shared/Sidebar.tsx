import { NavLink } from "react-router-dom";
import { links } from "../../data/icons";
import LogoIcon from "../../Svg/LogoIcon";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full border-r border-[#38383A] py-14 px-4">
      <div className="px-6 mb-14">
        <NavLink to="/" className="cursor-pointer">
          <LogoIcon />
        </NavLink>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div>
          <ul className="px-3">
            {links.map((link) => (
              <li key={link.id} className="gap-y-4">
                <NavLink
                  to={link.path}
                  className="text-[#EBEBF5] flex items-center gap-3 hover:bg-[#202020]"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>Hola</div>
      </div>
    </div>
  );
};
