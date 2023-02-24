import React from "react";
import Formsubs from "./section/Formsubs";
import Titlecopy from "./section/Titlecopy";

export default function HeadlineLeft() {
  return (
    <section
      style={{ isolation: "isolate" }}
      className="relative px-4 md:static sm:px-[15%] py-[6%] font-primary bg-imgprimary bg-right bg-no-repeat bg-opacity-5 md:bg-none"
    >
      <div className="absolute inset-0 w-full h-full bg-white/90 -z-[10] md:hidden"></div>
      <div className="flex flex-col gap-[2.5rem]">
        <a
          href="/"
          className="w-fit font-semibold italic text-primary md:text-xl"
        >
          Enlighten.
        </a>
        <Titlecopy />
        <Formsubs />
      </div>
    </section>
  );
}
