"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavList {
  whiteLineIcon: React.ReactNode;
  greenLineIcon: React.ReactNode;
}
const pathList = ["/", "/skill", "/project"];

export default function NavList({ whiteLineIcon, greenLineIcon }: NavList) {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      {pathList.map((path, i) => (
        <li key={i}>
          <Link onClick={() => setCurrentPath(path)} href={path}>
            {currentPath === path ? greenLineIcon : whiteLineIcon}
          </Link>
        </li>
      ))}
    </>
  );
}

// TODO: 주소창에 직접 입력했을때 currentPath 변경
