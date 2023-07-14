import GithubIcon from "./svg/GithubIcon";
import KakaoIcon from "./svg/KakaoIcon";
import ProfileIcon from "./svg/ProfileIcon";
import SendIcon from "./svg/SendIcon";
import TechStackIcon from "./svg/TechStackIcon";

export default function Home() {
  return (
    <main className="w-full h-scree px-24 py-6 flex flex-col justify-between">
      <header className="text-primaryWhite flex gap-4 text-center">
        <span className=" text-xl font-medium">GitHub</span>
        <span>|</span>
        <GithubIcon className="cursor-pointer" />
      </header>
      <section className="h-56 flex items-center">
        <article className="w-[29rem] h-full flex flex-col justify-between">
          <div className="text-primaryWhite flex flex-col gap-2">
            <h1 className="text-5xl font-medium tracking-wider">Yoon Sangmin</h1>
            <span className="text-xl">Frontend Developer</span>
            <span className="text-xl">어떤어떤 개발자</span>
          </div>
          <div className="h-9 w-36 bg-lightGreen p-2 rounded text-primaryWhite flex justify-center items-center gap-3 cursor-pointer">
            <ProfileIcon />
            <span>Contact</span>
          </div>
        </article>
        <article>
          <TechStackIcon />
        </article>
      </section>
      <footer className="flex gap-7">
        <div className="group h-14 w-32 px-4 py-2 bg-darkGreen rounded-lg flex items-center justify-center gap-3 cursor-pointer">
          <KakaoIcon className="fill-white group-hover:fill-yellow-200" />
          <div className="text-primaryWhite text-sm">
            <h3 className=" font-bold">카카오톡</h3>
            <span className="font-light">sm1108</span>
          </div>
        </div>
        <div className="group h-14 w-56 px-4 py-2 bg-darkGreen rounded-lg flex justify-center items-center gap-3 cursor-pointer">
          <SendIcon className=" fill-primaryWhite group-hover:fill-blue-300 " />
          <div className="text-primaryWhite text-sm">
            <h3 className=" font-bold">이메일</h3>
            <span className="font-light">sangminyn@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
