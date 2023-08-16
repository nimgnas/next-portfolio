import SkillsSection from "@/components/SkillsSection";
import Icon from "./Icon/Icon";
import IconLoader from "./Icon/IconLoader";
import GithubIcon from "./svg/GithubIcon";
import KakaoIcon from "./svg/KakaoIcon";
import ProfileIcon from "./svg/ProfileIcon";
import SendIcon from "./svg/SendIcon";
import TechStackIcon from "./svg/TechStackIcon";

export default function Home() {
  return (
    <main className="flex flex-col w-11/12 h-screen snap-y overflow-y-scroll snap-mandatory">
      <section id="profile" className="w-full min-h-screen px-24 py-6 flex flex-col justify-between snap-start">
        <header className="text-primaryWhite flex gap-4 text-center">
          <span className=" text-xl font-medium">GitHub</span>
          <span>|</span>
          <Icon name="github" height={25} width={25} className="fill-black" />
          {/* <GithubIcon className="cursor-pointer" /> */}
        </header>
        <section className="h-56 flex items-center">
          <article className="w-[29rem] h-full flex flex-col justify-between">
            <div className="text-primaryWhite flex flex-col gap-2">
              <h1 className="text-5xl font-medium tracking-wider">Yoon Sangmin</h1>
              <span className="text-xl">Frontend Developer</span>
              <span className="text-xl">어떤어떤 개발자</span>
            </div>
            <div className="h-9 w-36 bg-lightGreen p-2 rounded text-primaryWhite flex justify-center items-center gap-3 cursor-pointer">
              {/* <ProfileIcon /> */}
              <Icon name="profile" height={24} width={24} />
              <span>Contact</span>
            </div>
          </article>
          <article>
            {/* <TechStackIcon /> */}
            <Icon name="skills" height={143} width={450} />
          </article>
        </section>
        <footer className="flex gap-7">
          <div className="group h-14 w-32 px-4 py-2 bg-darkGreen rounded-lg flex items-center justify-center gap-3 cursor-pointer">
            <Icon name="kakaoTalk" height={25} width={25} className="fill-white group-hover:fill-yellow-200" />
            {/* <KakaoIcon className="fill-white group-hover:fill-yellow-200" /> */}
            <div className="text-primaryWhite text-sm">
              <h3 className=" font-bold">카카오톡</h3>
              <span className="font-light">sm1108</span>
            </div>
          </div>
          <div className="group h-14 w-56 px-4 py-2 bg-darkGreen rounded-lg flex justify-center items-center gap-3 cursor-pointer">
            {/* <SendIcon className=" fill-primaryWhite group-hover:fill-blue-300 " /> */}
            <Icon name="send" height={27} width={27} className="fill-primaryWhite group-hover:fill-blue-300" />
            <div className="text-primaryWhite text-sm">
              <h3 className=" font-bold">이메일</h3>
              <span className="font-light">sangminyn@gmail.com</span>
            </div>
          </div>
        </footer>
      </section>

      <section id="skill" className="min-h-screen w-full pl-24 py-6 overflow-hidden snap-start">
        <h1 className="flex justify-center text-5xl text-primaryWhite font-bold">SKILLS</h1>
        <SkillsSection>
          {Array.from({ length: 5 }, () => 0).map((_, i) => (
            <article
              key={i}
              className="h-96 w-60 min-w-[15rem] pt-24 px-7 bg-darkGreen inline-block rounded shadow-2xl text-primaryWhite"
            >
              {/* <JsIcon /> */}
              <Icon name="javaScript" height={50} width={50} />
              <p className="pt-8 text-lg">자바스크립트HTML돔어쩌구프로토타입실행컨텍스트ES6등등등</p>
            </article>
          ))}
        </SkillsSection>
      </section>

      <section id="project" className="min-h-screen w-full pl-24 py-6 flex flex-col items-center gap-16 snap-start">
        <h1 className="flex justify-center text-5xl text-primaryWhite font-bold">PROJECTS</h1>
        <div className="w-[67rem] h-[40rem] bg-darkGreen py-4 px-10 rounded-md">
          <h2 className="flex justify-center text-4xl text-primaryWhite font-bold">모아</h2>
          <h5 className="flex justify-center text-sm text-gray-400 pt-1">2020.05 ~ 202.11 (1인 개인 프로젝트)</h5>
          <section className="flex gap-10 pt-10">
            <div className="w-2/4">
              <article className="bg-slate-200 h-[27rem]">이미지</article>
              <div className="flex justify-center text-primaryWhite gap-5 pt-3">
                <span>&lt;</span>
                <span>1/5</span>
                <span>&gt;</span>
              </div>
            </div>
            <article className=" w-2/4 text-primaryWhite ">
              <p className="pb-6 whitespace-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae, illo mollitia
                ipsa tenetur deserunt dolores, eos possimus officiis at saepe aliquam ex commodi dolorem? Vitae quis
                error atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae,
                illo mollitia ipsa tenetur deserunt dolores, eos possimus officiis at saepe aliquam ex commodi dolorem?
                Vitae quis error atque.
              </p>
              <div className=" w-full h-1 bg-slate-600" />
              <div className="pt-6 flex">
                <h4 className="w-2/6 font-bold">✔ 주요기능</h4>
                <span className=" w-4/6">
                  간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리 링크, 프로젝트 경험, 업무 경력
                </span>
              </div>
              <div className="pt-6 flex">
                <h4 className="w-2/6 font-bold">✔ GitHub</h4>
                <span className=" w-4/6">
                  간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리 링크, 프로젝트 경험, 업무 경력
                </span>
              </div>
              <div className="pt-6 flex">
                <h4 className="w-2/6 font-bold">✔ Frontend</h4>
                <span className=" w-4/6">Next.js, TypeScript</span>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
