import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isopen);
  }

  return (
    <nav className="flex justify-around width-[1157px] h-20 bg-slate-400 items-center">
      <div>
        <p className="tracking-widest text-black font-bold text-xl">
          MST PHARMA
        </p>
      </div>
      <div>
        <ul className="flex gap-8 text-l text-black font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Store">Store</NavLink>
          </li>
          <li className="block">
            <div onClick={toggle}>
              Dropdown
              {isopen && (
                <ul className=" absolute mt-6 z-10 ">
                  <li>Supplements</li>
                  <li>Vitamins</li>
                  <li>Diet &amp; Nutrition</li>
                  <li>Tea &amp; Coffee</li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
