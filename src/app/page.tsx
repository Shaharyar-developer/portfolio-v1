import { Header } from "@/components/header";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

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
    </main>
  );
}
