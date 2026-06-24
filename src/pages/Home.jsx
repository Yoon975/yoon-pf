import { profile, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__label">Portfolio</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          {profile.intro ? (
            <p className="hero__intro">{profile.intro}</p>
          ) : (
            <p className="hero__intro hero__intro--placeholder">자기소개를 추가해 주세요.</p>
          )}
          <a href={`mailto:${profile.email}`} className="hero__email">
            {profile.email}
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
