"use client";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function HighLightComponent() {
  return (
    (<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
        <Typography variant="lead" className="text-black dark:text-white mt-10">
            At <b>Synfuse</b> (Synergy + Fusion), we are dedicated to transforming visionary ideas into meaningful realities through the perfect blend of creativity, innovation, and technology. Our mission is to foster collaboration, harnessing diverse expertise to develop solutions that inspire, empower, and create a lasting impact. By seamlessly integrating modern technology with forward-thinking concepts, we aim to push the boundaries of what's possible. At Synfuse, every idea is nurtured, every challenge is embraced, and every opportunity is seen as a chance to build a brighter, more innovative future together.
        </Typography>
      </motion.h1>
    </HeroHighlight>)
  );
}
