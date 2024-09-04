import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ArrowRight, Info } from "lucide-react";

const Gallery = () => {
  return (
    <>
      <div className="mb-5 max-w-7xl mx-auto mt-24 lg:mb-5 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
        <div className="relative w-full text-center lg:text-left lg:w-2/4">
          <div className="text-3xl uppercase font-black ">
            with a team of profissional{" "}
            <span className="  text-primary">Teachers</span>
          </div>
        </div>
        <div className="relative w-full text-center  lg:text-left  flex flex-col items-end justify-end">
          <div className="text-sm font-normal text-end  opacity-75 max-w-sm mb-5">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements
          </div>
          <Link
            href={"/about"}
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
            })}
          >
            <div className="flex items-center gap-2">
              <div>LEARN MORE</div>
              <div>
                <Info size={15} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid h-[50vh] grid-cols-5 gap-2  grid-rows-3 max-w-7xl mx-auto mt-10">
        <div className=" col-span-2 row-span-2 bg-center bg-cover bg-[url('https://cdn.dribbble.com/userupload/15748279/file/original-db239fd7cf7af0cd76a9ed64979a09dd.png?resize=1024x768')]" />
        <div className="col-span-3 row-span-1 bg-black" />
        <div className="col-span-1 row-span-2 bg-black" />
        <div className="col-span-2 row-span-2 bg-black" />
        <div className="col-span-1 row-span-1 bg-black" />
        <div className="col-span-1 row-span-1 bg-black" />
      </div>
    </>
  );
};

export default Gallery;
