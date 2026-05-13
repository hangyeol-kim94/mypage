const skills = {
  Frontend: ["HTML / CSS / JavaScript", "React", "TypeScript"],
  Backend: ["Node.js", "Python", "REST API"],
  Tools: ["Git / GitHub", "VS Code", "Figma"],
};

const projects = [
  {
    title: "프로젝트명 A",
    description:
      "프로젝트에 대한 간단한 설명을 여기에 작성하세요. 사용한 기술과 주요 기능을 소개합니다.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "프로젝트명 B",
    description:
      "프로젝트에 대한 간단한 설명을 여기에 작성하세요. 사용한 기술과 주요 기능을 소개합니다.",
    tags: ["Python", "Flask", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="avatar">
            <span>KH</span>
          </div>
          <h1 className="name">김한결</h1>
          <p className="tagline">Frontend Developer · UI/UX Enthusiast</p>
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
            사용자 경험을 중시하는 웹 개발자로, 깔끔하고 직관적인 인터페이스를 만드는 것을
            즐깁니다. 새로운 기술을 배우고 문제를 창의적으로 해결하는 데 열정을 가지고 있습니다.
          </p>
        </section>

        <section className="card">
          <h2>기술 스택</h2>
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
          <h2>프로젝트</h2>
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
