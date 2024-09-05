import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight, Info } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-40 md:px-0 xl:px-0 sm:max-w-xl md:max-w-7xl">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <div className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
                Brand new
              </div>
            </div>
            <div className="max-w-lg uppercase mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Level up your{" "}
              <span className="text-primary">English speaking </span>skills
              online
            </div>
            <p className="text-base  opacity-75 md:text-sm md:max-w-3xl">
              Ispeak center website is here to fit your learning journey of
              English language into your busy life. It's a place where learners
              come to achieve their communicative goals in English and boost
              their speaking skills. This website is your window to join our
              classes from home and be part of our family. Ispeak center
              welcomes you to speak English confidently
            </p>
          </div>
          <div className="flex items-center gap-2">
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
      </div>
      <div className=" w-full h-96">
        <img
          className=" h-full w-full object-cover  rounded-xl md:rounded-3xl mt-7"
          src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};
