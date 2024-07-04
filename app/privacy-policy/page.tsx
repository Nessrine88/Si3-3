import React from 'react'
import { getprivacyPolicy } from '../lib/privacyPolicy';
export const revalidate = 3;

 const privacyPolicy = async () => {
  const privacyPolicies = await getprivacyPolicy()
  return (
    <div className="w-full relative bg-white md:py-[4rem] overflow-hidden text-center text-gray-200 font-[Fira Mono]">
      <div className="bg-[#F5F7FA] mt-5 md:mx-[4rem] px-[2rem] flex flex-col items-center md:text-[4rem] text-[2rem] text-[#383838]">
        <div className="relative leading-[4.25rem] uppercase font-bold pt-[7rem] pb-[2rem] ">
          Si Her Co-Active Member Policy
        </div>
        <div className="flex flex-col items-start text-left text-[1.5rem]">
          {privacyPolicies.map((section, index) => (
            <div key={index} className="self-stretch">
              <div className="leading-[4.25rem] uppercase font-medium">
                <ol className="font-inherit text-inherit pl-[1.325rem] text-[#373737]">
                  <li>{section.title}</li>
                </ol>
              </div>
              <div className="font-mono text-[1rem] leading-[2rem] font-fira-mono text-[#373737] pb- ">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default privacyPolicy