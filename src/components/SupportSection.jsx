import React from "react";

export default function SupportSection() {
  return (
    <section
      id="supportSection"
      className="bg-colorPrimary text-white flex justify-center"
    >
      <div className="flex flex-col md:flex-row md:items-center py-8 justify-between px-10 max-w-[1200px] w-full">
        <div className=" flex flex-col gap-5 max-w-[30rem] ">
          <span className="font-bold    text-2xl  leading-[30px] ">
            Support me !
          </span>
          <span className="text-base leading-7">
            This site is totally free but you can support me if you want, it
            motivates me it motivates me to do biggers projects.
          </span>
        </div>

        <div className="flex flex-col-reverse gap-1 w-full md:w-auto mt-7 items-center justify-center md:mt-0">
          <span className="text-[10px]">* Link into my BuyMeACoffee</span>
          <button className="btn--style2 w-full uppercase bg-white text-colorPrimary hover:brightness-90 duration-150 ">
            support me here !
          </button>
        </div>
      </div>
    </section>
  );
}
