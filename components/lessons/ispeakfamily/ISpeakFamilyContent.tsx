"use client";
import Footer from "@/components/marketing/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Meetings } from "@/data/lessons";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Clock, Copy } from "lucide-react";
import React, { useState } from "react";
import PayWall from "./PayWall";

const ISpeakFamilyContent = () => {
  return (
    <div>
      {" "}
      <div className=" max-w-7xl mx-auto  p-5 md:p-0">
        <div className="block md:flex items-top justify-between">
          <div className="text-3xl font-bold max-w-md">
            Learn More Through Dedicated Teaching Sessions
          </div>
          <div className=" text-sm opacity-75 max-w-md mt-3">
            To enhance your learning experience and achieve your educational
            goals, actively participate in meetings specifically designed for
            instruction. These focused gatherings provide a valuable opportunity
            to engage with subject matter experts, ask questions, and gain
            deeper insights into the material. By attending and actively
            participating in these meetings, you can broaden your knowledge,
            develop critical thinking skills, and connect with like-minded
            individuals who share your passion for learning. confidence.
          </div>
        </div>
        <PayWall>
          <div>
            <Meetata />
          </div>
        </PayWall>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const Meetata = () => {
  return (
    <div className="pt-24 grid gap-4 grid-cols-1 md:grid-cols-3">
      {Meetings.slice()
        .reverse()
        .map((item, i) => (
          <div key={i}>
            <MeetingTemp
              id={item.id}
              title={item.title}
              description={item.description}
              GoogleMeetLink={item.GoogleMeetLink}
              thumbnail={item.thumbnail}
              dueDate={item.dueDate}
              teacher={item.teacher}
              pfp={item.pfp}
              teacherBiography={item.teacherBiography}
            />
          </div>
        ))}
    </div>
  );
};

const MeetingTemp = ({
  id,
  title,
  description,
  GoogleMeetLink,
  thumbnail,
  dueDate,
  teacher,
  pfp,
  teacherBiography,
}: {
  id: string;
  title: string;
  description: string;
  GoogleMeetLink: string;
  thumbnail: string;
  dueDate: string;
  teacher: string;
  pfp: string;
  teacherBiography: string;
}) => {
  const [registed, setRegisted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GoogleMeetLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <div className=" w-full h-64 rounded-2xl overflow-hidden relative">
        {" "}
        <img
          className=" h-full w-full object-cover object-center"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="text-xs opacity-75  mt-4 flex items-center gap-2">
        <div>
          <Clock size={13} />
        </div>
        <div>
          {" "}
          Due Date : <span>{dueDate}</span>
        </div>
      </div>
      <div className=" font-semibold mt-1.5 max-w-xs ">{title}</div>
      <div className="text-sm opacity-75 mt-3  line-clamp-3">{description}</div>

      <div className="text-sm opacity-75  mt-3">✦ Hosted By :</div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="mt-1 flex items-start gap-4 transition-all group  hover:bg-foreground/10 py-2 cursor-pointer">
            <img
              className="   group-hover:pl-3 transition-all  size-14 rounded-full object-cover"
              src={pfp}
              alt={teacher}
            />
            <div className=" space-y-1.5">
              <div className="text-sm">{teacher}</div>
              <div className="text-xs opacity-75 max-w-xs line-clamp-2">
                {teacherBiography}
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Biography Of {teacher}</DialogTitle>
          <div className=" w-full h-64 rounded-2xl overflow-hidden">
            <img
              className=" h-full w-full object-center object-cover"
              src={pfp}
              alt={teacher}
            />
          </div>
          <h3>{teacher}</h3>
          <p>{teacherBiography}</p>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"secondary"}>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mt-3 flex items-center justify-between pb-7">
        <Button
          onClick={() => {
            setRegisted(true);
          }}
          size={"sm"}
          className={cn(registed ? " bg-blue-600 hover:bg-blue-400" : null)}
        >
          <div className="flex  items-center gap-2">
            <div>{registed ? "Registed!" : "Register"}</div>
            <div>
              {registed ? <Check size={13} /> : <ArrowRight size={13} />}
            </div>
          </div>
        </Button>

        {registed ? (
          <div className="flex items-center gap-3">
            <div className="text-xs opacity-75 italic">{GoogleMeetLink}</div>
            <div
              onClick={handleCopy}
              className="  hover:opacity-75 transition-all  cursor-pointer"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ISpeakFamilyContent;
