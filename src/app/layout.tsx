import "./globals.css";
import RoundEdgeLineIcon from "./svg/RoundEdgeLineIcon";
import NavList from "@/components/NavList";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-primaryGreen flex">
        <nav className=" h-screen w-28 bg-darkGreen">
          <ul className="h-full text-primaryWhite flex flex-col items-center justify-center gap-16">
            <NavList
              whiteLineIcon={<RoundEdgeLineIcon className="stroke-primaryWhite hover:stroke-green-200" />}
              greenLineIcon={<RoundEdgeLineIcon className="stroke-lightGreen" />}
            />
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
