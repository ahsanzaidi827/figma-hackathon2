import React from 'react';
import Image from 'next/image';

export default function Editorspick() {
  return (
    <div className="w-full flex justify-center py-[10px] absolute top-[850px] bg-[#f5f5f5]">
  <div className="w-full max-w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] md:p-[40px]">

    
    {/* Title Section */}
    <div className="flex flex-col items-center gap-[10px]">
      <h3 className="font-Montserrat font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]">
        EDITOR’S PICK
      </h3>
      <p className="w-full max-w-[347px] font-Montserrat font-normal text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#737373] text-center">
        Problems trying to resolve the conflict between
      </p>
    </div>
    {/* Images Section */}
    <div className="w-full flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[30px]">
      {/* Men Image */}
      <div className="relative w-full md:w-[510px] h-[300px] md:h-[500px]">
        <Image
          src={"/men.png"}
          alt="men"
          width={510}
          height={500}
          className="w-full h-full object-cover rounded-md"
        />
        <button className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] md:px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] hover:bg-gray-100">
          MEN
        </button>
      </div>
      {/* Women Image */}
      <div className="relative w-[48%] md:w-[240px] h-[300px] md:h-[500px]">
        <Image
          src={"/women.png"}
          alt="women"
          width={240}
          height={500}
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] md:px-[48px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px]">
          WOMEN
        </button>
      </div>
      {/* Accessories and Kids */}
      <div className="w-full md:w-[240px] flex flex-col gap-[10px] md:gap-[30px]">
        {/* Accessories Image */}
        <div className="relative w-full h-[140px] md:h-[242px]">
          <Image
            src={"/accesories.png"}
            alt="div1"
            width={240}
            height={242}
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] md:px-[24px] py-[8px] md:py-[12px] shadow-md font-Montserrat font-bold text-[14px] md:text-[16px] text-[#252B42]">
            ACCESSORIES
          </button>
        </div>
        {/* Kids Image */}
        <div className="relative w-full h-[140px] md:h-[242px]">
          <Image
            src={"/kids.png"}
            alt="div2"
            width={240}
            height={242}
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] md:px-[24px] py-[8px] md:py-[12px] shadow-md font-Montserrat font-bold text-[14px] md:text-[16px] text-[#252B42]">
            KIDS
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}




