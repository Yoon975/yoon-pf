import { profile } from '../data/projects';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{profile.name} · {profile.role}</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
}
