export default function ProjectPage() {
  return (
    <main className="h-screen w-full pl-24 py-6 flex flex-col items-center gap-16">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae, illo mollitia ipsa
              tenetur deserunt dolores, eos possimus officiis at saepe aliquam ex commodi dolorem? Vitae quis error
              atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae, illo
              mollitia ipsa tenetur deserunt dolores, eos possimus officiis at saepe aliquam ex commodi dolorem? Vitae
              quis error atque.
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
    </main>
  );
}

// TODO: 박스크기 어떻게 할까?