"use client";
import React, { useState, useEffect, useRef } from 'react';
import CardPopup from './CardPopup';
import "../app/globals.css";
import Cards from './Cards';
import { getCards } from '../lib/cards';

const HomePage = async() => {
  const cards = await getCards()
  const [showPopup, setShowPopup] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dropDownOpen2, setDropDownOpen2] = useState(false);
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const toggleDropDown2 = () => {
    setDropDownOpen2(!dropDownOpen2);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
    if (
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target as Node)
    ) {
      setDropDownOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <>
   
    <div className=" relative pb-10  lg:pt-36 pt-24 min-h-screen w-full  px-4 lg:px-16 lg:bg-[url('/images/bgGradient.png')]   bg-no-repeat bg-[#d6b3d2]">
    <img
    src='/images/bgMobile.png'
    className='absolute z-20 inset-0 h-full w-full mobile '
    />
    
      <div className="relative flex flex-col lg:flex-row justify-between items-start  w-full">
        <div className="z-20 font-semibold lg:text-[64px] text-[28px] lg:text-6xl leading-10 lg:leading-[79px] uppercase text-[#4428F2] clash mb-8 lg:w-[56%]">
          <h1 className="text-white">Discover The</h1>
          <h1>WOMEN & NON-BINARY WEB3 ECOSYSTEM.</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:mr-28 w-full lg:w-auto ">
          <div className="relative flex items-center justify-center  mb-4 lg:mb-0 lg:mr-12 gap-5 w-full lg:w-auto">
            <div className="group hover:cursor-pointer fira-mono-bold lg:fira-mono-regular text-[#4428F2] text-lg flex gap-2 items-center ">
              Info
              <span
              className="info  invisible group-hover:visible  fira-mono-regular  leading-[20px] tracking-wider text-[14px] text-[#696969] dropdown w-[272px] absolute top-full mr-7 mt-1 p-5 bg-white border border-gray-300 rounded-md shadow-lg z-30 ">
           
                Submit your community for our team's review. We will respond back to the email address provided in 1-2 business days and share any questions we may have before adding your community to our discovery page.
            
              </span>
              <div>
              <i className="far fa-question-circle w-6 h-6"></i>
              </div>
            </div>
           
          </div>
          <div
            className=" text-center relative z-20 text-[14px] clash uppercase rounded-lg text-white px-7 py-2 bg-black w-full lg:w-auto md:text-[20px] leading-[30px] font-medium "
            onClick={togglePopup}
          >
            <p className='z-30 relative cursor-pointer'>Add a community</p>
            
          </div>
          <CardPopup show={showPopup} handleClose={togglePopup} />
        </div>
      </div>
      <div className="md:text-[20px] text-[14px] flex flex-col lg:flex-row justify-between lg:mr-28 mt-5 gap-4 lg:gap-12  ">
        <div className=" relative flex items-center border border-white px-4 py-2 rounded-lg w-full ">
          <div className="md:w-6 md:h-6 w-5 h-5 mr-2 flex items-center">
            <img
              src={'/images/bigSearch.png'}
              className="object-fit w-full h-full"
            />
          </div>
          <input
            className="z-20 w-full bg-transparent leading-6 placeholder-white fira-mono-regular outline-none text-white"
            placeholder="Search By Name, Location, Description, Values."
            value={searchTerm}
            onChange={handleSearch}
          
          />
        </div>

        <div className="flex flex-row justify-between w-full gap-4">
          <div
            className="flex items-center relative border border-white text-white px-4 py-2 rounded-lg w-full cursor-pointer"
            onClick={toggleDropDown}
            ref={dropdownRef1}
          >
            <input className="md:mr-3 mr-2 ">Community Type</input>
            <img src={'/arrow-down.svg'} className="md:w-6 md:h-6 w-4 h-auto z-20" />
            <div
              className={`dropdown ${
                dropDownOpen ? 'block' : 'hidden'
              } w-fit absolute top-full mr-7 mt-1 text-black p-5 bg-white border border-gray-300 rounded-md shadow-lg z-30`}
            >
              <ul className="fira-mono-regular leading-7 text-lg ">
                <li className='hover:bg-pink-200 p-2 rounded-lg'>{cards.status}</li>
                <li className="mt-4 hover:bg-pink-200 p-2 rounded-lg">Regional</li>
                <li className="mt-4 hover:bg-pink-200 p-2 rounded-lg">NFT Collections</li>
                <li className="mt-4 hover:bg-pink-200 p-2 rounded-lg">DAO&apos;s</li>
              </ul>
            </div>
          </div>

          <div
            className="flex items-center relative border border-white text-white px-4 py-2 rounded-lg w-full cursor-pointer"
            onClick={toggleDropDown2}
            ref={dropdownRef2}
          >
            <p className="md:mr-3 mr-2">Community Location</p>
            <img src={'/arrow-down.svg'} className="md:w-6 md:h-6 w-5 h-5 z-20" />
            <div
              className={`dropdown ${
                dropDownOpen2 ? 'block' : 'hidden'
              } md:w-[60%] w-fit absolute top-full mt-1 text-black p-5 px-10 bg-white border border-gray-300 rounded-md shadow-lg z-30`}
            >
              <ul className="fira-mono-regular leading-7 text-lg">
                <li className="mt-4  hover:bg-pink-200 p-2 rounded-lg">Canada</li>
                <li className="mt-4  hover:bg-pink-200 p-2 rounded-lg">U.S.A</li>
                <li className="mt-4 hover:bg-pink-200 p-2 rounded-lg">LATAM</li>
                <li className="mt-4 hover:bg-pink-200 p-2 rounded-lg">Europe</li>
                <li className="mt-4 hover:bg-pink-200 p-2 rounded-lg">Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 py-6 bg-[#D574B633] bg-[url('/images/rectangle.png')] bg-no-repeat bg-cover bg-center bg-opacity-30 min-h-[30vh] rounded-lg flex flex-col justify-center items-center text-center p-6 w-full">
        <p className="clash text-[#4428F2] text-[24px]  md:text-[30px] font-medium leading-8 lg:leading-[68px] mb-4 ">JOIN OUR COMMON GROUND.</p>
        <p className="text-[#1C1B22] text-[14px] lg:text-[20px] leading-5 lg:leading-6 fira-mono-regular mb-10">
        Stay connected to Si3’s ecosystem in the community membership platform Common Ground.
        </p>
        <button className="bg-[#1C1B22]  text-white px-6 py-4 rounded-lg leading-6 text-sm lg:text-[20px] fira-mono-regular">
          COMMON GROUND
        </button>
      </div>
    </div>
    <div className='relative'>
    <Cards searchTerm={searchTerm} />
    </div>
    </>
  );
}

export default HomePage;
