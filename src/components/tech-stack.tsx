"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TechStack = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [hoveredIndex, setHovered] = useState<number | null>(null);
  const [techStackNames, setTechStackNames] = useState<string[]>([]);

  const gridItems = Array(25).fill(null);
  const generateRandomNumbers = () => {
    const randomNumbers = new Set<number>();
    while (randomNumbers.size < 5) {
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
    "bg-indigo-500",
    "bg-sky-500",
    "bg-emerald-500",
    "bg-slate-500",
  ]);

  useEffect(() => {
    const newActiveIndexes = generateRandomNumbers();
    setActiveIndexes(() => {
      console.log(newActiveIndexes);

      return newActiveIndexes;
    });
    setActiveColors(newActiveIndexes.map((_, i) => colors[i % colors.length]));

    // Shuffle tech stack names only once when the component is mounted
    setTechStackNames(
      shuffleTechStackNames([
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Next.js",
      ])
    );
  }, []);

  return (
    <>
      <h2 className=" text-center text-xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-br from-zinc-500 to-white">
        Tech Stack
      </h2>
      <motion.div
        layout
        className="size-56 border p-1 rounded-xl mx-auto mt-4 grid grid-cols-5 grid-rows-5 gap-4 place-items-center"
      >
        {gridItems.map((_, index) => (
          <motion.div
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            layout
            whileHover={{
              height: activeIndexes.includes(index) ? 50 : 16,
              width: activeIndexes.includes(index) ? 150 : 16,
              zIndex: activeIndexes.includes(index) ? 3 : 1,
            }}
            animate={{}}
            transition={{
              type: "spring",
              stiffness: 140,
            }}
            key={index}
            className={`w-4 aspect-square rounded-xl bg-accent  ${
              activeIndexes.includes(index)
                ? activeColors[activeIndexes.indexOf(index)]
                : ""
            } `}
          >
            {hoveredIndex === index && activeIndexes.includes(index) && (
              <p className="text-white">
                {techStackNames[activeIndexes.indexOf(index)]}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
