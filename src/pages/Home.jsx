import { profile, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SkillGroup from '../components/SkillGroup';
import ResumeAttach from '../components/ResumeAttach';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__label">Portfolio</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          {profile.education && (
            <p className="hero__education">{profile.education}</p>
          )}
          {profile.intro ? (
            <p className="hero__intro">{profile.intro}</p>
          ) : (
            <p className="hero__intro hero__intro--placeholder">자기소개를 추가해 주세요.</p>
          )}
          <div className="hero__contact">
            <a href={`mailto:${profile.email}`} className="hero__email">
              {profile.email}
            </a>
            <ResumeAttach resume={profile.resume} />
          </div>
        </div>
      </section>

      {(profile.education || profile.trainings?.length > 0) && (
        <section className="section">
          <div className="container">
            <h2 className="section__title">Education</h2>
            <ul className="edu-list">
              {profile.education && (
                <li className="edu-item">
                  <span className="edu-item__name">{profile.education}</span>
                </li>
              )}
              {profile.trainings?.map((training) => (
                <li key={training.name} className="edu-item">
                  <span className="edu-item__name">{training.name}</span>
                  <span className="edu-item__meta">
                    {training.org} · {training.period} · {training.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {(profile.skills?.length > 0 || profile.learningSkills?.items?.length > 0) && (
        <section className="section">
          <div className="container">
            <h2 className="section__title">Skills</h2>
            <div className="skills-grid">
              {profile.skills?.map((group) => (
                <SkillGroup key={group.label} label={group.label} items={group.items} />
              ))}
              {profile.learningSkills?.items?.length > 0 && (
                <SkillGroup
                  label={`학습 중 · ${profile.learningSkills.context}`}
                  items={profile.learningSkills.items}
                  learning
                />
              )}
            </div>
          </div>
        </section>
      )}

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
