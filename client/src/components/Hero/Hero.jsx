import React, { useEffect } from "react";
import "./Hero.css";
import { HeroAssets } from "../../assets/AssetsProvider";
import CustomButton from "../CustomButton/CustomButton";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"

const Hero = () => {
  
  useGSAP(()=>{
    gsap.from('.heading',{
      x:-600,
      duration:0.8,
      delay:0.6,
    
    })

    gsap.from('.para',{
      x:600,
      duration:0.8,
      delay:0.5,
      
    })
  })
  return (
    <section className="Hero-section ">
      <video className="video-background" autoPlay loop muted>
        <source src={HeroAssets.CreativeBrandBg} type="video/mp4" />
      </video>

      <div className="content-overlay Container text-white grid md:grid-cols-2">
        <div>
          <h1 className="heading">
            {" "}
            Transforming Your Vision into Digital Reality
          </h1>
          <p className="gemini-text mt-5 para">
            Expert Marketing Solutions for Modern Businesses
          </p>
          <div className="btn">
            <CustomButton btn="GET STARTED" />
          </div>
        </div>
        <div className="w-full h-full right-img rounded-lg ">
          <img
            src={HeroAssets.businessmenshakinghands}
            alt=""
            className="  inset-0 object-cover transition-transform transform hover:scale-110 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
