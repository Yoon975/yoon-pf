import { profile } from '../data/projects';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{profile.name} · {profile.role}</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.resume && (
          <a
            href={profile.resume.href}
            download={profile.resume.downloadName}
            target="_blank"
            rel="noopener noreferrer"
          >
            이력서 PDF
          </a>
        )}
      </div>
    </footer>
  );
}
