import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

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

const Footer = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center  -my-2">
          {links.map((item, i) => (
            <div key={i} className="px-5 py-2">
              <Link
                href={item.href}
                className={buttonVariants({
                  variant: "link",
                  className: " opacity-50",
                })}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Facebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Instagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          ©2024 ──── I-SPEAK for learning english.
        </p>
      </div>
    </section>
  );
};

export default Footer;
