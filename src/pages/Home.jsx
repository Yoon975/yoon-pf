import { profile, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SkillGroup from '../components/SkillGroup';
import ResumeAttach from '../components/ResumeAttach';
import Badge from '../components/Badge';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="panel panel--hero">
            <div className="hero__inner">
              {profile.photoSrc && (
                <img
                  className="hero__photo"
                  src={profile.photoSrc}
                  alt={`${profile.name} 프로필 사진`}
                  width={140}
                  height={175}
                />
              )}
              <div className="hero__content">
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
                  <a href={`mailto:${profile.email}`} className="contact-chip contact-chip--email">
                    {profile.email}
                  </a>
                  <ResumeAttach resume={profile.resume} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-sections container">
        {(profile.education || profile.trainings?.length > 0) && (
          <section className="section" id="education">
            <h2 className="section__title">Education</h2>
            <div className="panel">
              <ul className="edu-list">
                {profile.education && (
                  <li className="edu-item">
                    <div className="edu-item__head">
                      <span className="edu-item__name">{profile.education}</span>
                      <Badge>학력</Badge>
                    </div>
                  </li>
                )}
                {profile.trainings?.map((training) => (
                  <li
                    key={training.name}
                    className={`edu-item${training.statusType === 'ongoing' ? ' edu-item--ongoing' : ''}`}
                  >
                    <div className="edu-item__head">
                      <span className="edu-item__name">{training.name}</span>
                      <Badge
                        variant={
                          training.statusType === 'ongoing'
                            ? 'ongoing'
                            : training.statusType === 'completed'
                              ? 'accent'
                              : 'default'
                        }
                      >
                        {training.status}
                      </Badge>
                    </div>
                    <span className="edu-item__meta">
                      {training.org} · {training.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {(profile.skills?.length > 0 || profile.learningSkills?.items?.length > 0) && (
          <section className="section" id="skills">
            <h2 className="section__title">Skills</h2>
            <div className="skills-layout">
              <div className="panel skills-panel">
                <div className="skills-grid">
                  {profile.skills?.map((group) => (
                    <SkillGroup key={group.label} label={group.label} items={group.items} />
                  ))}
                </div>
              </div>
              {profile.learningSkills?.items?.length > 0 && (
                <div className="panel panel--learning">
                  <SkillGroup
                    label={`학습 중 · ${profile.learningSkills.context}`}
                    items={profile.learningSkills.items}
                    learning
                  />
                  <p className="skills-learning-note">
                    교육 과정에서 익힌 Python·MySQL을 바탕으로, 웹 프레임워크와 ML 스택을 확장하고 있습니다.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="section" id="projects">
          <h2 className="section__title">Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
