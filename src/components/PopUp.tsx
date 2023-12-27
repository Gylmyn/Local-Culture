import React from "react";
import Icons from "./Icons";
import Buttons from "./Buttons";

type popUpType = {
  title: string;
  pinId: number;
};

export default function PopUp(prop: popUpType) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-center  ">
        <div className="pt-4">
          <Icons src="/Map.svg" size={60} />
        </div>
        <div>
          
          <p className="text-M font-bold">Daerah {prop.title}</p>
          <p className=" text-XS font-normal ">{`Dapatkan informasi lebih banyak tentang kekayaan, sejarah,
             budaya dan warisan lokal di Daerah ${prop.title}!`}</p>
        </div>
      </div>
      <div className=" flex flex-row justify-center  gap-[5px] ">
        <div className="w-full text-white">
          <Buttons href={`/mapbudaya/${prop.pinId}`} text="Telusuri ?" size="medium" type="primary" textCustom="text-white" />
        </div>
        
      </div>
    </div>
  );
}
