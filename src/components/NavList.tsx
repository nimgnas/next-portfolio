"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface NavList {
  whiteLineIcon: React.ReactNode;
  greenLineIcon: React.ReactNode;
}

export default function NavList({ whiteLineIcon, greenLineIcon }: NavList) {
  const [yProgress, setYProgress] = useState(0);
  const [scrollLocation, setScrollLocation] = useState([true, false, false]);

  const listElementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const bodyElement = listElementRef.current?.parentElement?.parentElement?.parentElement;
    const mainElement = bodyElement?.querySelector("main")!;
    const sectionElementList = mainElement?.querySelectorAll("main > section");

    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.target.id === "profile" && entry.isIntersecting) setScrollLocation([true, false, false]);
        if (entry.target.id === "skill" && entry.isIntersecting) setScrollLocation([false, true, false]);
        if (entry.target.id === "project" && entry.isIntersecting) setScrollLocation([false, false, true]);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });

    sectionElementList.forEach((sectionElement) => observer.observe(sectionElement));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {scrollLocation.map((location, i) => (
        <li ref={listElementRef} key={i}>
          {location ? greenLineIcon : whiteLineIcon}
        </li>
      ))}
    </>
  );
}
