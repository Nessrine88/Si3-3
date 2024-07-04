import React from 'react';
import { getMemberPolicy } from '../lib/memberPolicy';
export const revalidate = 3;


const MemberPolicy = async() => {
    const memberPolicies = await getMemberPolicy()
  return (
    <div className="w-full relative bg-white py-[4rem] overflow-hidden text-center text-gray-200 font-[Fira Mono]">
      <div className="bg-[#F5F7FA] mt-5 md:mx-[4rem] px-[2rem] flex flex-col items-center text-[4rem] text-[#383838]">
            <div className="relative leading-[4.25rem] uppercase font-bold py-[7rem] pb-[2rem] ">
          Si Her Co-Active Member Policy
        </div>
            <div className="flex flex-col items-start text-left text-[1.5rem]">
          {memberPolicies.map((section, index) => (
            <div key={index} className="self-stretch">
              <div className="leading-[4.25rem] uppercase font-medium">
                <ol className="font-inherit text-inherit pl-[1.325rem] text-[#373737]">
                  <li>{section.title}</li>
                </ol>
              </div>
              <div className="font-mono text-[1rem] leading-[2rem] font-fira-mono text-[#373737]">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPolicy;
