"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TechStack = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHovered] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [techStackNames, setTechStackNames] = useState<string[]>([]);

  const gridItems = Array(25).fill(null);
  const generateRandomNumbers = () => {
    const randomNumbers = new Set<number>();
    while (randomNumbers.size < 9) {
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

  const shuffleTechStackNames = (array: string[]) => {
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
    setTechStackNames(
      shuffleTechStackNames([
        "React",
        "Node.js",
        "Postgresql",
        "Express",
        "Hono",
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "TRPC",
      ])
    );
  }, []);

  return (
    <div>
      <h2 className=" text-center text-xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-br from-zinc-500 to-white">
        Tech Stack
      </h2>

      <motion.div
        layout
        className="size-56 border rounded-xl p-1 mx-auto mt-2 grid grid-cols-5 grid-rows-5 gap-2 place-items-center"
        transition={{}}
      >
        {gridItems.map((_, index) => (
          <motion.div
            className={`w-6 z-1 aspect-square bg-accent cursor-default ${
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
            whileFocus={{
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
              borderRadius: activeIndexes.includes(index) ? 100 : 3,
              height: tappedIndex === index ? 50 : 24,
              width: tappedIndex === index ? 150 : 24,
              opacity: 1,
              x: 0,
            }}
            initial={{
              opacity: 0,
              x: -30,
            }}
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileFocus={{ opacity: 1 }}
                className="text-white flex justify-center items-center h-full"
              >
                {techStackNames[activeIndexes.indexOf(index)]}
              </motion.p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
