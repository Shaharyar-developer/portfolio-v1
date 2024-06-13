import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { TechStack } from "@/components/tech-stack";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="m-8 md:m-12 mt-8">
        <h2 className=" text-center text-xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-br from-zinc-500 to-white">
          About Me
        </h2>
        <TextGenerateEffect
          words={
            "Hello, I'm a Web Developer. I create the Interface you see and the backend that powers it. I'm passionate about creating beautiful and functional websites. I'm also a fan of open source and love to contribute to the community."
          }
          className="md:max-w-[45%] max-w-[95%] mx-auto font-medium "
        />
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-center gap-4 md:gap-24 relative pb-2 md:pb-0">
        <p className="absolute text-center md:hidden left-1/2 -translate-x-1/2 -top-5 text-xs text-zinc-700 whitespace-nowrap">
          TIP: Hover OR Tap Any Colored Dot To Make It Bigger
        </p>
        <TechStack />
        <Projects />
        <Skills />
      </div>
      <p className="text-center hidden md:block mt-4 pb-4 text-xs text-zinc-700">
        TIP: Hover OR Tap Any Colored Dot To Make It Bigger
      </p>
    </main>
  );
}
