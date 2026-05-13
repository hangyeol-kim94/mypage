import Image from "next/image";

const skills = {
  "광고 플랫폼": ["Meta Ads", "Google Ads", "카카오 모먼트"],
  "분석 도구": ["Google Analytics 4", "Looker Studio", "Amplitude"],
  "업무 도구": ["Excel / Sheets", "Tableau", "Notion"],
};

const projects = [
  {
    title: "퍼포먼스 캠페인 A",
    description:
      "캠페인에 대한 간단한 설명을 여기에 작성하세요. 목표, 전략, 주요 성과 지표를 소개합니다.",
    tags: ["Meta Ads", "ROAS 320%", "리타겟팅"],
  },
  {
    title: "그로스 프로젝트 B",
    description:
      "프로젝트에 대한 간단한 설명을 여기에 작성하세요. 데이터 기반 의사결정과 A/B 테스트 결과를 소개합니다.",
    tags: ["Google Ads", "CPA 최적화", "A/B 테스트"],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Image src="/logo.png" alt="로고" width={120} height={40} priority />
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="avatar">
            <span>KH</span>
          </div>
          <h1 className="name">김한결</h1>
          <p className="tagline">Performance Marketer · Data-Driven Growth</p>
          <div className="social-links">
            <a href="mailto:hangyeol.kim@dmate.kr">✉ 이메일</a>
            <a href="https://github.com/hangyeol-kim94" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="card">
          <h2>소개</h2>
          <p>
            안녕하세요! 저는 <strong>김한결</strong>입니다.
            <br />
            데이터 기반으로 광고 성과를 극대화하는 퍼포먼스 마케터로, 유저 획득부터 리텐션까지
            전 퍼널을 분석하고 최적화합니다. 숫자로 말하고 실험으로 증명하는 마케팅을 지향합니다.
          </p>
        </section>

        <section className="card">
          <h2>전문 분야</h2>
          <div className="skills">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <h3>{category}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>캠페인 · 프로젝트</h2>
          <div className="projects">
            {projects.map((project) => (
              <div key={project.title} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>연락처</h2>
          <p>새로운 기회나 협업 제안은 언제든지 환영합니다!</p>
          <a className="btn" href="mailto:hangyeol.kim@dmate.kr">
            메일 보내기
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 김한결. All rights reserved.</p>
      </footer>
    </>
  );
}
