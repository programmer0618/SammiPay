import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/util";
import HomeNav from "./homenav";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const [active, setActive] = useState("home");

  const activeHandler = (id) => setActive(id);
  const toggleHandler = () => setToggleNav((prev) => !prev);

  return (
    <div className={`py-6 ${styles.flexBetween} `}>
      {/* Logo */}
      <a href="#">
        <img
          className={`w-[130px] h-[40px] cursor-pointer`}
          src={logo}
          alt="logo"
        />
      </a>

      {/* Navigation link */}
      <ul className="list-none z-20 sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((item, idx) => (
          <li
            key={item.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite 
            ${idx !== navigationLinks.length - 1 ? "mr-10" : "mr-0"}
            ${active === item.id ? "text-white" : "text-lightWhite"}
            hover:text-white duration-[.3s]`}
            onClick={() => activeHandler(item.id)}
          >
            {active !== `home` && <HomeNav />}
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      {/* Navigation btn */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={toggleNav ? menu : close}
          alt="nav"
          className="w-[45px] object-contain h-[40px] cursor-pointer"
          onClick={toggleHandler}
        />
        <div
          className={`${
            toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 left-0 my-2 w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4 xs:flex-row">
            {navigationLinks.map((item, idx) => (
              <li
                key={item.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite hover:text-white duration-[.3s] ${
                  active === item.id ? "text-white" : "text-lightWhite"
                }`}
                onClick={() => activeHandler(item.id)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
