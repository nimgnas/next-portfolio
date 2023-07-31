import Icon from "./Icon/Icon";
import IconLoader from "./Icon/IconLoader";
import "./globals.css";
import RoundEdgeLineIcon from "./svg/RoundEdgeLineIcon";
import NavList from "@/components/NavList";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-primaryGreen flex">
        <IconLoader />
        <nav className=" h-screen w-1/12 bg-darkGreen sticky top-0">
          <ul className="h-full text-primaryWhite flex flex-col items-center justify-center gap-16">
            <NavList
              whiteLineIcon={
                <Icon
                  name="navigationBar"
                  height={66}
                  width={6}
                  className="stroke-primaryWhite hover:stroke-green-200"
                />
              }
              greenLineIcon={<Icon name="navigationBar" height={66} width={6} className="stroke-lightGreen" />}
            />
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

// FIXME: 프로필페이지와 스킬페이지 navi 크기가 다른 문제 수정 할 것
