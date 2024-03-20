import { Header } from "@/components/header";
import { TechStack } from "@/components/tech-stack";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  return (
    <main className="m-12">
      <Header />
      <TextGenerateEffect
        words={
          "Hello, I'm a Web Developer. I create the Interface you see and the backend that powers it. I'm passionate about creating beautiful and functional websites. I'm also a fan of open source and love to contribute to the community."
        }
        className="md:max-w-[45%] max-w-[90%] mx-auto mt-24 font-medium "
      />
      <div className="mt-20 flex flex-col gap-2">
        {/* An Effect where a grid is shown with some colored cubes, on a cube click it takes up the container and shows information. */}
        <TechStack />
      </div>
    </main>
  );
}
