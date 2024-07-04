"use client"
import React from 'react';
import CardPopup from './CardPopup';
import { useState } from 'react';
import "../../app/globals.css"
import Cards from './Cards';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
    <div className="md:pt-[9rem] pt-[9rem] min-h-screen w-full md:p-[4rem] p-[2rem] bg-[url('/images/bgGradient.png')] bg-no-repeat bg-[#d6b3d2] ">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="font-semibold text-[32px] lg:text-[64px] leading-[40px] lg:leading-[79px] uppercase text-[#4428F2] w-full lg:w-[60vw] clash mb-8 lg:mb-0">
          <h1 className="text-white">
            Discover The 
          </h1>
          <h1>
            WOMEN & NON-BINARY WEB3 ECOSYSTEM.
          </h1>
        </div>
        <div className="flex h-fit items-center flex-col lg:flex-row mr-[7rem]">
          <div className=" flex items-center mb-4 lg:mb-0  lg:mr-[50px] gap-5">
            <p className="fira-mono-regular text-white  flex gap-2">
              Info
            
            <img
              src={"/images/exclamation.png"}
              alt=""
              width={46}
              height={60}
              className="w-5 h-5"
            />
            </p>
          </div>
          <button className="fira-mono-regular rounded-[8px] border border-white text-white px-4 py-2"  onClick={togglePopup} >
            Add a community
          </button>
          <CardPopup show={showPopup} handleClose={togglePopup} />
        </div>
      </div>
      <div className="flex flex-col justify-around mr-[7rem] lg:flex-row gap-5 mt-8">
        <div className="flex items-center border border-white text-white px-4 py-2 rounded-[8px] w-full lg:w-[42vw] mb-4 lg:mb-0">
          <div className="w-[30px] h-[30px] mr-2 ">
          <img
            src={'/images/bigSearch.png'}
            className="mr-2 object-fit w-full h-full"
          />
          </div>
          <p>search by name, location, description, values.</p>
        </div>
        <div className="flex border border-white text-white px-4 py-2 rounded-[8px] w-full lg:w-[20vw] mb-4 lg:mb-0">
          <p className="mr-2">Community Type</p>
          <img
            src={'/arrow-down.svg'}
          />
        </div>
        <div className="flex border border-white text-white px-4 py-2 rounded-[8px] w-full lg:w-[20vw]">
          <p className="mr-2">Community Location</p>
          <img
            src={'/arrow-down.svg'}
          />
        </div>
      </div>
      <div className=" my-8  bg-[#D574B633] bg-[url('/images/rectangle.png')] bg-no-repeat bg-cover bg-center bg-opacity-30 min-h-[30vh] rounded-[8px] flex flex-col justify-center items-center text-center p-5">
        <p className="clash text-[#4428F2] text-[20px] lg:text-[35px] font-medium leading-[30px] lg:leading-[68px] mb-4">JOIN OUR COMMON GROUND.</p>
        <p className="text-[#1C1B22] text-[14px] lg:text-[20px] leading-[20px] lg:leading-[26px] fira-mono-regular mb-4">
          If you want to get tips for UX job searching, subscribe to my UX Jetpack newsletter. <br /> View at https://uxjetpack.com/newsletter
        </p>
        <button className="bg-[#1C1B22] text-white px-8 tracking-wider py-2 rounded-[8px] leading-[26px] text-[14px] lg:text-[20px] fira-mono-regular mt-5">
          COMMON GROUND
        </button>
      </div>
    </div>
   
    <Cards />
    </>
  );
}

export default HomePage;
