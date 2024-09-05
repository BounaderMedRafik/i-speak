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
        <div className="relative w-full text-center  lg:text-left  flex flex-col md:items-end items-center justify-end">
          <div className="text-sm font-normal md:text-end text-center  opacity-75 max-w-sm mb-5">
            With a team of highly qualified and experienced teachers who are
            dedicated to their students' success
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
      <div className=" px-5 md:px-0 grid h-[50vh] grid-cols-5 gap-2  grid-rows-3 max-w-7xl mx-auto mt-10">
        <div className=" col-span-5  md:col-span-2 md:row-span-2 bg-center bg-cover bg-[url('https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-3xl  " />
        <div className=" col-span-5 md:col-span-3 md:row-span-1 bg-center bg-cover bg-[url('https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-3xl   " />
        <div className=" col-span-5 md:col-span-1 md:row-span-2 bg-center bg-cover bg-[url('https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-3xl  " />
        <div className=" col-span-5 md:col-span-2 md:row-span-2 bg-center bg-cover bg-[url('https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-3xl  " />
        <div className=" col-span-5 md:col-span-1 md:row-span-1 bg-center bg-cover bg-[url('https://images.pexels.com/photos/1181722/pexels-photo-1181722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-3xl  " />
        <div className=" col-span-5 md:col-span-1 md:row-span-1 bg-center bg-cover bg-[url('https://images.pexels.com/photos/4145196/pexels-photo-4145196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-3xl  " />
      </div>
    </>
  );
};

export default Gallery;
