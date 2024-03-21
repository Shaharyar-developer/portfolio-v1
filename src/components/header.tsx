"use client";
import { Linkedin, Mail } from "lucide-react";
import { GithubIcon } from "./icons/github";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-0">
          <h1 className="text-3xl  font-semibold relative">
            Shaharyar
            <motion.span
              animate={{
                width: ["0%", "100%"],
              }}
              className="h-[1px] w-[0%] absolute bottom-0 left-0 bg-white/50"
            />
          </h1>
        </div>
        <div className="mt-2 flex flex-col gap-2 justify-center items-center">
          <TypewriterEffectSmooth
            className="ml-4"
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
        <div className="flex justify-between items-center gap-12">
          <Button variant={"ghost"}>
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
                className="hover:scale-110 transition-all mb-1"
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
            <motion.span
              animate={{
                width: ["0%", "100%"],
              }}
              transition={{ delay: 0.8 }}
              className="h-[1px] w-[0%] absolute bottom-0 left-0 bg-white/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
