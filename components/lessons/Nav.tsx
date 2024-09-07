"use client";
import React from "react";
import MyLogo from "../brand/MyLogo";
import {
  Bell,
  Book,
  BookUser,
  Home,
  Laugh,
  LetterText,
  LogOut,
  Star,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Meetings } from "@/data/lessons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ModeToggle } from "../ui/ModeToggle";

const Nav = () => {
  return (
    <div className=" w-full md:fixed block top-0 left-0 bg-background z-50">
      <div className=" border-b border-b-foreground/25">
        <div className=" max-w-7xl flex items-center justify-between p-5 mx-auto">
          <div>
            <MyLogo />
          </div>
          <div className="flex items-center gap-4">
            {/* <div>
              <MyLessons />
            </div> */}
            <div>
              <Notifications />
            </div>
            <div>
              <UserStuff />
            </div>
            <div className=" fixed right-10 bottom-10 z-30">
              <ModeToggle />
            </div>
            <div>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={"/"}>
                      <LogOut />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Log Out</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

const MyLessons = () => {
  return (
    <div>
      <BookUser />
    </div>
  );
};

const Notifications = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative  hover:opacity-85 cursor-pointer">
            <div className=" bg-destructive text-white flex items-center justify-center rounded-full text-[9px] size-5 absolute  -top-2 -right-2">
              2
            </div>
            <Bell />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex items-center justify-between">
            <div>Notifications</div>
            <div className="size-5 text-xs bg-destructive flex items-center justify-center text-white rounded-full font-bold">
              {" "}
              2
            </div>
          </div>
          <div className=" w-full h-px bg-foreground/50 my-3" />
          <div>
            {Meetings.slice(-2).map((item, i) => {
              return (
                <div
                  key={i}
                  className="relative hover:bg-black/5 cursor-default"
                >
                  <div className="text-xs bg-secondary text-background w-fit px-3 py-2 absolute top-1 left-1">
                    NEW
                  </div>
                  <div className="text-xs bg-primary text-background w-fit px-3 py-2 absolute top-1 right-1">
                    {item.dueDate}
                  </div>
                  <div className="h-24 w-full ">
                    <img
                      className=" h-full w-full object-center object-cover "
                      src={item.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="px-2">
                    <div className="text-sm  mt-2">{item.title}</div>
                    <div className="text-xs opacity-75 mt-2 line-clamp-2 ">
                      {item.description}
                    </div>
                    <div className="mt-3">
                      <a
                        href="/lessons/i-speak-family"
                        className={buttonVariants({
                          variant: "default",
                          size: "sm",
                        })}
                      >
                        Register Now!
                      </a>
                    </div>
                  </div>
                  <div className=" w-full h-px bg-foreground/25 my-3" />
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

const UserStuff = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" hover:opacity-85 cursor-pointer">
            <img
              className="size-8 object-cover object-center rounded-full border"
              src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Student Informations</DialogTitle>

          <div className="flex  gap-3 mt-10">
            <img
              className="size-24 object-cover object-center rounded-full"
              src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div>
              <div className="text-2xl font-bold">Melissa Mels</div>
              <div className=" opacity-80 text-sm">
                Joined at : 05 Sep, 2024
              </div>
              <div className="flex opacity-80 items-center gap-2 text-sm">
                {" "}
                Female <User size={13} />
              </div>
              <div className="flex opacity-80 items-center gap-2 text-sm">
                {" "}
                Top 4 <Star className="  fill-foreground" size={13} />
              </div>
              <div className="flex opacity-80 items-center gap-2 text-sm">
                {" "}
                24 Lessons Learned <Book size={13} />
              </div>
            </div>
          </div>
          <div className="mt-3">
            Hi there! I&apos;m Melissa Mels, a language enthusiast who&apos;s
            always on the lookout for new adventures. I love discovering
            different cultures and connecting with people from around the world.
            Learning English has been a huge part of my journey, and I&apos;m
            excited to share my tips and tricks with you. Whether you&apos;re
            just starting out or looking to take your English skills to the next
            level, I&apos;m here to help. Let&apos;s learn together and have
            fun!
          </div>

          <div>
            <DialogClose asChild>
              <Button variant={"secondary"}>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Links = () => {
  const linkat = [
    {
      title: "All",
      href: "/lessons",
      icon: <Home size={15} />,
    },
    {
      title: "Vocabulary",
      href: "/lessons/vocabulary",
      icon: <Book size={15} />,
    },
    {
      title: "Grammar Rules",
      href: "/lessons/grammar-rules",
      icon: <LetterText size={15} />,
    },
    {
      title: "Speaking Tips",
      href: "/lessons/speaking-tips",
      icon: <Laugh size={15} />,
    },
    {
      title: "I Speak Family",
      href: "/lessons/i-speak-family",
      icon: <Users size={15} />,
    },
  ];
  const pathname = usePathname();
  return (
    <div className=" bg-accent text-background">
      <div className=" max-w-7xl mx-auto block md:flex items-center justify-center gap-4">
        {linkat.map((item, i) => {
          return (
            <div key={i}>
              <Link href={item.href}>
                <div
                  className={cn(
                    "flex py-3 hover:bg-background/50 items-center px-4 gap-3",
                    pathname == item.href ? "bg-background/25" : null
                  )}
                >
                  <div>{item.icon}</div>
                  <div className="text-sm">{item.title}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
