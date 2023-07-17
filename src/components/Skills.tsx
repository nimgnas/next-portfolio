"use client";

import { useEffect, useRef, useState } from "react";

interface SkillsProps {
  children: React.ReactNode;
}

export default function Skills({ children }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [justifyContent, setJustifyContent] = useState<"start" | "center">("center");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionStyle = window.getComputedStyle(section);
    const articleStyle = window.getComputedStyle(section.querySelector("article")!);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const articles = entry.target.querySelectorAll("article");

      const articleLength = articles.length;
      const articleListWidth = articleLength * parseInt(articleStyle.inlineSize);
      const gapWidth = (articleLength - 1) * parseInt(sectionStyle.gap);
      const sumWidth = articleListWidth + gapWidth;

      setJustifyContent(sumWidth >= entry.target.closest("main")!.clientWidth ? "start" : "center");
    });

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`h-[90%] flex justify-${justifyContent} items-center gap-20`}>
      {children}
    </section>
  );
}
