import React, { useContext, useState, useEffect, useRef } from "react";
import "./NavBar.css";
import { HeroAssets } from "../../assets/AssetsProvider.js";
import NavBarList from "./NavBarList.jsx";
import { context } from "../../main.jsx";
import DayNight from "../dayNight/DayNight.jsx";


const NavBar = () => {
  const [show, setShow] = useState(false);
  const { toggle } = useContext(context);
  const navRef = useRef();

 

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleNav = (event) => {
    event.stopPropagation();
    setShow(!show);
  };

  return (
    <>
      <section
        className="navbar-section bg-black border border-slate-900"
        ref={navRef}
      >
        <div className="Container">
          <nav className="h-16 items-center ">
            <div className="extraLarge flex justify-between ">
              <div className="logo flex ">
                <img
                  className="h-12 w-auto rounded-sm"
                  src={HeroAssets.metroMediaLogo}
                  alt="Brand-Logo"
                />
              </div>
              <NavBarList show={show} toggleNav={toggleNav} toggle={toggle} />
              <div className="md:flex justify-center hidden md:block">
                <DayNight />
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default NavBar;
