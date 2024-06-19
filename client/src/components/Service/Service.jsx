import React, { useContext, useEffect, useRef } from "react";
import ServiceCards from "./ServiceCards";
import { HeroAssets } from "../../assets/AssetsProvider";
import "./Service.css";
import { context } from "../../main";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Service = () => {
  const { toggle } = useContext(context);
  const cardSectionRef = useRef();

  useEffect(() => {
    const cardSection = cardSectionRef.current;
    const cards = cardSection.children;

    const totalWidth = Array.from(cards).reduce((total, card) => {
      return total + card.offsetWidth -10 // 10 is the margin-right
    }, 0);

    gsap.to(".serviceCard", {
      x: -totalWidth,
      duration: totalWidth / 100, // Adjust speed here
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  const cardData = [
    {
      cardImg: HeroAssets.SocialMedia,
      cardH: "Social Media Marketing",
      cardP: "Engage your audience and build your brand on various social media.",
    },
    {
      cardImg: HeroAssets.cardWebsite,
      cardH: "Website Development",
      cardP: "Create stunning, responsive websites that capture your brand's essence.",
    },
    {
      cardImg: HeroAssets.cardPromotion,
      cardH: "Brand Promotion",
      cardP: "Enhance your brand's visibility and reputation through strategic promotions.",
    },
    {
      cardImg: HeroAssets.cardEmail,
      cardH: "Email Marketing",
      cardP: "Reach your customers directly with personalized email campaigns.",
    },
    {
      cardImg: HeroAssets.CardfacebookIcon,
      cardH: "Google and Facebook Marketing",
      cardP: "Boost your online presence and rank higher on Google search results.",
    },
    {
      cardImg: HeroAssets.cardGraphiIcon,
      cardH: "Graphic Designing",
      cardP: "Design visually appealing graphics that resonate with your audience.",
    },
    {
      cardImg: HeroAssets.cardLogoIcon,
      cardH: "Logo Designing",
      cardP: "Craft unique logos that represent your brand identity.",
    },
    {
      cardImg: HeroAssets.cardVideoEditing,
      cardH: "Video Editing",
      cardP: "Create compelling video content that captivates and engages.",
    },
  ];

  return (
    <section className={`service-section py-10 h-screen night ${toggle ? 'bg-white' : 'bg-black'} mt-5`} id="services">
      <div className="Container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-red-600">
            Our <span className={`${toggle ? 'text-black' : 'text-white'}`}>Services</span>
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-5"></div>
        </div>

        <div className="text-center mb-10">
          <h2 className={`text-2xl font-semibold ${toggle ? 'text-gray-800' : 'text-white'}`}>
            Professional and Reliable Service Solutions
          </h2>
        </div>

        <div className="cardSec gap-10" ref={cardSectionRef}>
          {cardData.map((data, index) => (
            <div className="serviceCard"> 
               <ServiceCards
              key={index}
              cardImg={data.cardImg}
              cardH={data.cardH}
              cardP={data.cardP}
            />
            </div>
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
