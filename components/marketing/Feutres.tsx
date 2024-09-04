import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ArrowRight, Award, Languages, Smile } from "lucide-react";

const fets = [
  {
    title: "blablabla",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
    icon: <Languages />,
  },
  {
    title: "blablabla",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L",
    icon: <Award />,
  },
  {
    title: "blablabla",
    desc: "description",
    icon: <Smile />,
  },
  {
    title: "blablabla",
    desc: "description",
    icon: <Languages />,
  },
];

const Feutres = () => {
  return (
    <section className="py-16 md:py-0 ">
      <div className="mx-auto max-w-7xl  ">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <div className="text-4xl uppercase font-black lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              ENJOY the best lessons provided{" "}
              <span className=" italic pr-1 text-primary">specifically </span>{" "}
              for you
            </div>
          </div>
          <div className="relative w-full text-center  lg:text-left  flex flex-col items-end justify-end">
            <div className="text-sm font-normal text-end  opacity-75 max-w-sm mb-5">
              We provide all the advantages that can simplify all your financial
              transactions without any further requirements
            </div>
            <Link
              href={"/lessons"}
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              <div className="flex items-center gap-2">
                <div>CHECK LESSONS</div>
                <div>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-7xl grid grid-cols-4 gap-5">
        {fets.map((item, i) => {
          return (
            <div
              key={i}
              className="  bg-gray-100  cursor-default group p-6 rounded-2xl transition-all flex flex-col hover:bg-accent hover:text-background "
            >
              <div className="  bg-accent text-background  transition-all group-hover:ml-6 group-hover:bg-background group-hover:text-accent p-5 size-fit rounded-full">
                {item.icon}
              </div>
              <div className="mt-4 text-2xl font-bold">{item.title}</div>
              <div className="mt-6 text-sm opacity-70">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feutres;
