import { NavLink } from "react-router-dom";
import LogoIcon from "../../Svg/LogoIcon";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full border-r border-[#38383A] py-14 px-3">
      <div>
        <div className="p-6">
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};
