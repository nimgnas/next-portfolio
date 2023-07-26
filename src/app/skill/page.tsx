import SkillsSection from "@/components/SkillsSection";
import JsIcon from "../svg/JsIcon";
import Icon from "../Icon/Icon";

export default function SkillPage() {
  return (
    <main className="h-screen w-full pl-24 py-6 overflow-hidden">
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
    </main>
  );
}
