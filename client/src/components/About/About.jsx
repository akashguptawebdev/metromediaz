import React, { useContext } from "react";
import "./About.css";
import { HeroAssets } from "../../assets/AssetsProvider";
import CustomButton from "../CustomButton/CustomButton";
import { context } from "../../main";
const About = () => {
  const {toggle} = useContext(context)
  return (
    <div className={  `${toggle? 'bg-slate-300 ': 'bg-black text-white'} mx-auto px-4  mt-5`}  id="about">
      <div className={`about-container Container `}>
        <h1 className="  border-b-2 rounded-md py-2 font-extrabold text-4xl text-center m-5">
          Who Am I?
        </h1>

        <h1 className="font-medium text-center">
          At MetroMediaz we are committed to helping businesses thrive in the
          digital age with tailored marketing solutions. Our mission is to
          deliver innovative and effictive marketing strategies that drive
          results and exceed expectations.
        </h1>

        <div className="about-Main md:flex justify-between mt-10">
          <div className="flex flex-col justify-center items-center gap-10 border p-5 bg-blue-500">
            <div className="meImg w-48 h-48 ">
              <img

                src={HeroAssets.metromediaProfile}
                className="rounded-full w-52 h-52"
                alt=""
              />
            </div>
            <div className="text-center ">
              <h1 className=" font-extrabold text-lg pb-5">
                Founded by Mr. Pratik Jha,
              </h1>
              <h1>
                MetroMediaz is led with a vision through creativity and
                strategic thinking
              </h1>
            </div>

          </div>

          <div className=" grid grid-cols-2 mt-5 md:gap-10  gap-5">

            <div className="cards md:w-32 md:h-52 text-black w-32 h-52 border border-b-yellow-500 border-b-[6px]   p-5 bg-white rounded-md flex flex-col justify-center ">

              <div className="imgCards">
                <img src={HeroAssets.webDesign} alt="" className="w-10 h-10" />
              </div>
              <div className="text pt-5 ">
                <h3>Graphic Design</h3>
              </div>

              <div className="mt-5 ">
                <button className="px-5">More</button>
              </div>
              
              <div className="w-20 h-1 "></div>
            </div>
            
            <div className="cards w-32 h-52 border text-black border-b-blue-500 border-b-[6px] p-5 bg-white rounded-md flex flex-col justify-center ">

              <div className="imgCards">
                <img src={HeroAssets.brandPromotion} alt="" className="w-10 h-10" />
              </div>
              <div className="text pt-5 ">
                <h3>Brand Promotion</h3>
              </div>

              <div className="mt-5 ">
                <button className="px-5">More</button>
              </div>

            </div>
            <div className="cards w-32 h-52 border text-black  border-b-blue-500 border-b-[6px] p-5 bg-white rounded-md flex flex-col justify-center ">

              <div className="imgCards">
                <img src={HeroAssets.logoDesign} alt="" className="w-10 h-10" />
              </div>
              <div className="text pt-5 ">
                <h3>Logo Design</h3>
              </div>

              <div className="mt-5 ">
                <button className="px-5">More</button>
              </div>

            </div>
            <div className="cards w-32 h-52 border text-black border-b-yellow-500 border-b-[6px]  p-5 bg-white rounded-md flex flex-col justify-center ">

              <div className="imgCards">
                <img src={HeroAssets.filmEditing} alt="" className="w-10 h-10" />
              </div>
              <div className="text pt-5 ">
                <h3>Video Editing</h3>
              </div>

              <div className="mt-5 ">
                <button className="px-5">More</button>
              </div>

            </div>

          
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
