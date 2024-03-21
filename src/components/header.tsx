"use client";
import { Linkedin, Mail } from "lucide-react";
import { GithubIcon } from "./icons/github";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="justify-center m-4 md:m-8 md:mx-12  border-2 border-dashed p-2 px-8 rounded-2xl">
      <div className=" md:flex justify-between items-center gap-12 md:gap-0 w-full">
        <div className="flex flex-col gap-0 max-w-max mx-auto md:mx-0">
          <h1 className="text-3xl font-semibold relative text-center mb-4 pt-2">
            Shaharyar
            <motion.span
              animate={{
                width: ["0%", "100%"],
              }}
              className="h-[1px] w-[0%] absolute bottom-0 left-0 bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300"
            />
          </h1>
        </div>
        <div className="mt-2 hidden md:block absolute left-1/2 -translate-x-1/2">
          <TypewriterEffectSmooth
            className=""
            words={[
              { text: "Fullstack" },
              {
                text: "Developer",
                className:
                  "bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-blue-300",
              },
            ]}
          />
        </div>
        <div className="flex justify-between items-center gap-12 ">
          <Button variant={"secondary"}>
            <a
              href="https://drive.google.com/uc?export=download&id=1kMtpQCMM6QU8zVmeKd1R3T_0jESjHBMW"
              target="_blank"
            >
              Resume
            </a>
          </Button>
          <div className="flex gap-4 relative">
            <a href="https://www.linkedin.com/in/muhammad-shaharyar-bbb400298/">
              <Linkedin
                className="hover:scale-110 transition-all "
                href=""
                size={24}
              />
            </a>
            <Mail
              className="cursor-pointer hover:scale-110 transition-all"
              onClick={() => {
                navigator.clipboard.writeText("shaharyar321321@gmail.com");
                toast.success("Email copied to clipboard");
              }}
              size={24}
            />
            <a href="https://github.com/Shaharyar-developer/Shaharyar">
              <GithubIcon className="cursor-pointer hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
