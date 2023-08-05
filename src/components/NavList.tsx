"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";

interface NavList {
  whiteLineIcon: React.ReactNode;
  greenLineIcon: React.ReactNode;
}

const SCROLL_LOCATION = [
  [0, 0.5],
  [0.5, 0.95],
  [0.95, 1],
];

export default function NavList({ whiteLineIcon, greenLineIcon }: NavList) {
  const { scrollYProgress } = useScroll();
  const [yProgress, setYProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    setYProgress(latest);
  });

  return (
    <>
      {SCROLL_LOCATION.map((location, i) => (
        <li key={i}>{yProgress >= location[0] && yProgress <= location[1] ? greenLineIcon : whiteLineIcon}</li>
      ))}
    </>
  );
}
