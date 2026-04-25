// HeroAnimations.tsx
"use client";

import { motion } from "framer-motion";

export function HeroAnimations() {
  return (
    <>
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] text-6xl opacity-20 select-none"
      >
        🍃
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[8%] text-5xl opacity-15 select-none"
      >
        🌿
      </motion.div>
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[8%] text-4xl opacity-15 select-none"
      >
        ☕
      </motion.div>
    </>
  );
}