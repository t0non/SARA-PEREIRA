"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "none",
  className = "",
  duration = 0.5,
}: FadeInProps) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: { x: 0, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, ...directions[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
