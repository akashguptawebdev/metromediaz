import React from "react";
import "./NavBar.css";
import { HeroAssets } from "../../assets/AssetsProvider";
import { Link } from "react-router-dom";
import DayNight from "../dayNight/DayNight";

const NavBarList = ({ show, toggleNav , toggle }) => {

  return (
    <>
      <div className="">
        <div className="block md:flex md:justify-between md:items-center">
          <div onClick={toggleNav} className="md:hidden px-3 py-2 rounded-md relative">
            {show ? (
              <img src={HeroAssets.closeIcon} alt="" className="absolute left-48 bg-white" />
            ) : (
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            )}
          </div>
          <div
            className={`Nav-menu md:w-8/12 collaps-NavBar top-16 md:top-0 h-screen md:h-full ${
              show ? 'block' : 'hidden md:block'
            } ${toggle ?  'bg-white text-black':'bg-black text-white' } md:bg-transparent z-10 md:text-white md:rounded-md`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 md:p-2 md:px-8 md:bg-transparent bg-transparent px-20 rounded-md h-[80vh] md:h-full font-bold text-left">
            <li className="py-2 md:py-0 md:px-4  cursor-pointer">
                <p   className="flex gap-2 items-center "><span>{`${toggle? "Light":"Night"}`}</span> <DayNight /></p>
              </li>
              <li className="py-2 md:py-0 md:px-4 hover:text-gray-300 cursor-pointer">
                <div className="block md:hidden">
               
                </div>
                <Link to="/" onClick={toggleNav}>Home</Link>
              </li>
              <li className="py-2 md:py-0 md:px-4 hover:text-gray-300 cursor-pointer">
                <a href="#services" onClick={toggleNav}>Services</a>
              </li>
              <li className="py-2 md:py-0 md:px-4 hover:text-gray-300 cursor-pointer">
                <a href="#about" onClick={toggleNav}>About</a>
              </li>
              <li className="py-2 md:py-0 md:px-4 hover:text-gray-300 cursor-pointer">
                <a href="#Contact" onClick={toggleNav}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarList;
