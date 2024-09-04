import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Nav = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="py-5 border-foreground/20 border-b px-6 md:px-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>I SPEAK</div>
        <div className="flex items-center gap-2">
          {/* Buttons */}

          <div className="flex items-center gap-2">
            {links.map((item, i) => {
              return (
                <div key={i}>
                  <Link
                    className={buttonVariants({
                      variant: "link",
                    })}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <div>
            <Link
              className={buttonVariants({
                variant: "default",
              })}
              href={"lessons"}
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
    </div>
  );
};

export default Nav;
