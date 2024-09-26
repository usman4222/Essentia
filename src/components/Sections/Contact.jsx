import React from "react";
import Button from "../Button";
import color from "../../images/color.png";
import bg from "../../images/bg.png";
import greenbg from "../../images/greenbg.png";
import yellowbg from "../../images/yellowbg.png";

const Contact = () => {
  return (
    <div className=" xl:flex ">
      <div className="w-full flex flex-col justify-center xl:flex xl:flex-row xl:justify-center mt-20 lg:mt-0  lg:pt-28 xl:pt-0 pb-20 xl:pb-0">
        <div className=" pd md:px-20 lg:px-32 xl:px-0  flex items-center ">
          <img
            src={color}
            alt="colors"
            className="rounded-full absolute z-40 w-[250px] md:w-auto"
          />
          <img
            src={bg}
            alt="colors"
            className="rounded-full md:mb-[150px] mb-[100px] mr-[160px] w-[180px] md:w-auto "
          />
          <img
            src={greenbg}
            alt="colors"
            className="rounded-full md:mb-[420px] mb-[210px] mr-[160px] absolute w-[100px] md:w-auto  animate-horizontal"
          />
          <img
            src={yellowbg}
            alt="colors"
            className="rounded-full md:mt-[470px] mt-[300px] mr-[570px] absolute w-[30px] md:w-auto animate-vertical"
          />
        </div>
      </div>

      <div className="flex 2xl:justify-end xl:justify-center justify-center  w-full">
        <div className=" pt-[60px]">
          <p className="text-[#949494] font-inter text-[12px] md:text-[14px]  font-semibold leading-[14px] tracking-[2.6px] uppercase pb-2">
            CONTACT NOW
          </p>
          <h4 className="text-black font-inter text-[35px] md:text-[46px] font-bold leading-[55.2px] pb-10">
            Leave Us a Message
          </h4>
          <div>
            <div className="w-full flex flex-col md:flex md:flex-row md:justify-between md:gap-7 pb-6 ">
              <input
                type="text"
                placeholder="First Name"
                className="inline-flex h-[40px] md:h-[71px] pl-[30px] 2xl:pr-[290px] mb-6 md:mb-0 justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] focus:outline-none focus:border-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="inline-flex h-[40px] md:h-[71px] pl-[30px] 2xl:pr-[290px] justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] focus:outline-none focus:border-none"
              />
            </div>
            <div>
              <input
                type="eamil"
                placeholder="Email Address"
                className="inline-flex h-[40px] md:h-[71px] pl-[30px] w-full justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] mb-6 focus:outline-none focus:border-none"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="inline-flex h-[40px] md:h-[71px] pl-[30px] w-full justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] mb-6 focus:outline-none focus:border-none"
              />
              <textarea
                placeholder="Write message"
                className="flex w-full h-[100px] md:h-[199px] p-[18px] pl-[30px] items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] resize-none focus:outline-none focus:border-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-start pt-[60px] pb-[100px]">
            <Button
              text={"Submit"}
              padding="md:p-[4px_6px_4px_40px] p-[3px_5px_3px_30px]"
              gap="md:gap-[59px] gap-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;