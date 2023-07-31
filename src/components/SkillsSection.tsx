"use client";

import { useEffect, useRef, useState } from "react";

interface SkillsSectionProps {
  children: React.ReactNode;
}

export default function SkillsSection({ children }: SkillsSectionProps) {
  const sectionElementRef = useRef<HTMLElement>(null);
  const [justifyContent, setJustifyContent] = useState<"start" | "center">("center");

  useEffect(() => {
    const sectionElement = sectionElementRef.current;
    if (!sectionElement) return;

    const sectionCSSProperties = window.getComputedStyle(sectionElement);
    const articleCSSProperties = window.getComputedStyle(sectionElement.querySelector("article")!);

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const articles = entry.target.querySelectorAll("article");

      const numberOfArticles = articles.length;
      const totalArticlesWidth = numberOfArticles * parseInt(articleCSSProperties.inlineSize);
      const totalGapsWidth = (numberOfArticles - 1) * parseInt(sectionCSSProperties.gap);
      const articlesAreaWidth = totalArticlesWidth + totalGapsWidth;

      setJustifyContent(articlesAreaWidth >= entry.target.closest("main")!.clientWidth ? "start" : "center");
    });

    resizeObserver.observe(sectionElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionElementRef} className={`h-[90%] flex justify-${justifyContent} items-center gap-20`}>
      {children}
    </section>
  );
}
