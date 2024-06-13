"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type projectsType = {
  name: string;
  url: string;
};

export const Projects = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHovered] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [projectsNames, setprojectsNames] = useState<projectsType[]>([]);
  const projects = [
    {
      name: "Portfolio",
      url: "/",
    },
    {
      name: "Event Promotion",
      url: "https://event.shaharyar-dev.engineer/",
    },
    {
      name: "Event Promotion",
      url: "https://ptmfest2024.vercel.app/",
    },
    {
      name: "SaaS Waitlist",
      url: "https://acuman.live",
    },
    {
      name: "Admin Panel",
      url: "https://network.shaharyar-dev.engineer/",
    },
    {
      name: "Web Dev Firm",
      url: "https://eddtech.org/",
    },
  ] satisfies projectsType[];
  const gridItems = Array(25).fill(null);
  const generateRandomNumbers = () => {
    const randomNumbers = new Set<number>();
    while (randomNumbers.size < projects.length) {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
  };

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleprojectsNames = (array: projectsType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const colors = shuffleArray([
    "bg-indigo-700",
    "bg-sky-700",
    "bg-emerald-700",
    "bg-slate-700",
  ]);

  useEffect(() => {
    const newActiveIndexes = generateRandomNumbers();

    setActiveIndexes(newActiveIndexes);
    setActiveColors(newActiveIndexes.map((_, i) => colors[i % colors.length]));
    setprojectsNames(shuffleprojectsNames(projects));
  }, []);

  return (
    <div>
      <h2 className=" text-center text-xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-br from-zinc-500 to-white">
        Projects
      </h2>

      <motion.div
        layout
        className="size-56 border rounded-xl p-1 mx-auto mt-2 grid grid-cols-5 grid-rows-5 gap-2 place-items-center"
      >
        {gridItems.map((_, index) => (
          <motion.div
            className={`w-6 z-1 aspect-square  bg-accent cursor-pointer ${
              activeIndexes.includes(index)
                ? activeColors[activeIndexes.indexOf(index)]
                : ""
            } `}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => {
              if (tappedIndex === index) {
                setTappedIndex(null);
              } else if (activeIndexes.includes(index)) {
                setTappedIndex(index);
              }
            }}
            layout
            whileHover={{
              height: activeIndexes.includes(index) ? 50 : 24,
              width: activeIndexes.includes(index) ? 150 : 24,
              zIndex: 20,
            }}
            whileTap={{
              height: activeIndexes.includes(index) ? 50 : 24,
              width: activeIndexes.includes(index) ? 150 : 24,
              zIndex: 10,
            }}
            animate={{
              zIndex:
                tappedIndex === index
                  ? 10
                  : activeIndexes.includes(index)
                  ? 4
                  : 1,
              borderRadius:
                tappedIndex === index
                  ? 70
                  : activeIndexes.includes(index)
                  ? [9]
                  : [-1],
              height: tappedIndex === index ? 50 : 24,
              width: tappedIndex === index ? 150 : 24,
              opacity: 1,
              x: 0,
            }}
            initial={{ opacity: 0, x: 30 }}
            transition={{
              type: "spring",
              stiffness: 240,
              velocity: 2,
              opacity: {
                delay: index / 13,
              },
              x: {
                delay: index / 15,
              },
            }}
            key={index}
          >
            {((hoveredIndex === index && activeIndexes.includes(index)) ||
              tappedIndex === index) && (
              <a href={projectsNames[activeIndexes.indexOf(index)].url}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-white flex justify-center items-center h-full whitespace-nowrap"
                >
                  {projectsNames[activeIndexes.indexOf(index)].name}
                </motion.p>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
