import React from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="pl-2 text-xl font-medium font-headFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Subhajit.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          {" "}
          Transforming Concepts into Code{" "}
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base  md:max-w-[950px] text-textDark font-medium"
      >
        Passionate MERN stack Frontend Web Developer, crafting immersive digital
        solutions that captivate audiences. Strong problem-solving skills,
        committed to staying ahead of industry trends. Collaborative team player
        driving innovation and exceeding client expectations. Ready to make a
        meaningful impact.
      </motion.p>

      <a href="/assets/Subhajit_Das(Resume).pdf" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="px-4 py-2 rounded-md text-gray-200 text-[13px] border border-gray-200 hover:bg-hoverColor duration-300"
        >
          Check out my Resume !
        </motion.button>
      </a>
    </section>
  );
};

export default RightSide;
