import React, { useContext } from "react";
import "./Contact.css";
import { HeroAssets } from "../../assets/AssetsProvider";
import SendBtn from '../CustomButton/SendBtn'
import { context } from "../../main";
const Contact = () => {

  const { toggle } = useContext(context);


  return (
    <div className={`${toggle?'bg-white text-black' :'bg-black text-white'}  mt-5`} id="Contact">
      <div className={`contactUs-main  Container `}>
        <h1 className= {`text-center   font-extrabold text-4xl mt-8`}>
          We`re here to help you
        </h1>
        <p className={`text-center mt-10 `}>
          Complete the form to get in touch with our Team
        </p>

        <div className="main flex justify-center items-center  h-full">
          <div className="hidden md:block">
            <img
              src={HeroAssets.contactManremovebgpreview}
              alt=""
              className="q"
            />
          </div>

          <div className={ `form  bg-black text-black border rounded-md p-5 mt-5 `}>
            <div className="input-field w-52 md:w-full ">
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Name "
                  className="p-2 rounded-md w-full"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Email "
                  className="p-2 rounded-md w-full"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Phone "
                  className="p-2 rounded-md w-full"
                />
              </div>
              <div className="py-5">
                <textarea
                  name=""
                  rows={3}
                  cols={10}
                  id=""
                  className="rounded-md text-black p-5 w-full"
                  placeholder="Type Your Message...."
                ></textarea>
              </div>

              <SendBtn />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
