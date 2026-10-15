
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowUpRight,
  Copy,
  Check,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
  ExternalLink,
} from 'lucide-react';

import {
  SITE,
  SKILLS,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
} from './data';

import './style.css';


// ==============================
// EN-TÊTE
// ==============================

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') !== 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      dark ? 'dark' : 'light'
    );

    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="top">
      <a className="logo" href="/#top">
  <span className="logo-lastname">
    {SITE.name.split(' ')[0]}
  </span>
  <span className="logo-firstname">
    {SITE.name.split(' ').slice(1).join(' ')}
  </span>
</a>

      <button
        className="icon-btn menu-btn"
        aria-label="Ouvrir le menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <a href="/#experiences" onClick={closeMenu}>
          Expériences
        </a>

        <a href="/#projets" onClick={closeMenu}>
          Projets
        </a>

        <a href="/#competences" onClick={closeMenu}>
          Compétences
        </a>

        <a href="/#formation" onClick={closeMenu}>
          Formation
        </a>

        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>

        <button
          className="icon-btn"
          aria-label="Changer de thème"
          onClick={() => setDark(!dark)}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}


// ==============================
// PIED DE PAGE
// ==============================

function Footer() {
  return (
    <footer>
      <span>
        © {new Date().getFullYear()} {SITE.name}
      </span>

      <a href="#top">Retour en haut ↑</a>
    </footer>
  );
}


// ==============================
// LOGOS DES COMPÉTENCES
// ==============================

function SkillLogo({ skill }) {
  const [failed, setFailed] = useState(false);

  if (!skill.logo || failed) {
    return (
      <span
        className="skill-logo-fallback"
        style={{ '--logo-color': skill.color || '#8b7bff' }}
      >
        {skill.name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      className="skill-logo"
      src={`https://cdn.simpleicons.org/${skill.logo}/${(
        skill.color || '#8b7bff'
      ).replace('#', '')}`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}


// ==============================
// SECTION COMPÉTENCES
// ==============================

function SkillsSection() {
  return (
    <section id="competences" className="skills-section">
      <div className="skills-heading">
        <p className="eyebrow">MON SAVOIR-FAIRE</p>

        <h2>
          Mes compétences<span className="skills-title-dot">.</span>
        </h2>

        <p className="skills-intro">
          Les outils et technologies que j’utilise pour concevoir,
          développer et donner vie à des expériences digitales.
        </p>
      </div>

      <div className="skills-grid">
        {SKILLS.map((category, index) => (
          <article
            className="skill-card"
            key={category.id || category.group}
            style={{ '--card-index': index }}
          >
            <div className="skill-card-heading">
              <span className="skill-category-icon">
                {category.icon}
              </span>

              <div>
                <h3>{category.group}</h3>

                <p>
                  {category.items.length}{' '}
                  {category.items.length > 1
                    ? 'compétences'
                    : 'compétence'}
                </p>
              </div>
            </div>

            <div className="skill-items">
              {category.items.map((skill) => {
                const name =
                  typeof skill === 'string'
                    ? skill.split(' — ')[0]
                    : skill.name;

                const detail =
                  typeof skill === 'string'
                    ? skill.includes(' — ')
                      ? skill.split(' — ')[1]
                      : ''
                    : skill.detail || '';

                const normalizedSkill =
                  typeof skill === 'string'
                    ? { name, logo: null, color: '#8b7bff' }
                    : skill;

                return (
                  <div className="skill-item" key={name}>
                    <div className="skill-item-logo">
                      <SkillLogo skill={normalizedSkill} />
                    </div>

                    <div className="skill-item-info">
                      <span className="skill-item-name">
                        {name}
                      </span>

                      {detail && (
                        <span className="skill-item-detail">
                          {detail}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


// ==============================
// EXPÉRIENCES PROFESSIONNELLES
// ==============================

function ExperiencesSection() {
  return (
    <section id="experiences" className="experience-section">
      <p className="eyebrow">MON PARCOURS</p>

      <h2>
        Expériences professionnelles
        <span className="skills-title-dot">.</span>
      </h2>

      <p className="body-text">
        Mes expériences, les missions auxquelles j’ai participé
        et les compétences développées sur le terrain.
      </p>

      <div className="experience-timeline">
        {EXPERIENCES.map((experience) => (
          <article
            className="experience-card"
            key={experience.id}
          >
            <div className="experience-marker">
              <BriefcaseBusiness size={20} />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <span className="experience-type">
                  {experience.type}
                </span>

                <span className="experience-period">
                  <CalendarDays size={15} />
                  {experience.period}
                </span>
              </div>

              <h3>{experience.position}</h3>

              <h4>{experience.company}</h4>

              <p className="experience-location">
                <MapPin size={15} />
                {experience.location}
              </p>

              <p className="experience-summary">
                {experience.summary}
              </p>

              <h5>Mes principales missions</h5>

              <ul className="experience-missions">
                {experience.missions.map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ul>

              <h5>Technologies utilisées</h5>

              <div className="experience-tags">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


// ==============================
// FORMATION
// ==============================

function EducationSection() {
  return (
    <section id="formation" className="education-section">
      <p className="eyebrow">ÉTUDES & APPRENTISSAGE</p>

      <h2>
        Ma formation<span className="skills-title-dot">.</span>
      </h2>

      <div className="education-grid">
        {EDUCATION.map((education) => (
          <article className="education-card" key={education.id}>
            <div className="education-icon">
              <GraduationCap size={25} />
            </div>

            <div className="education-content">
              <span className="education-period">
                {education.period}
              </span>

              <h3>{education.degree}</h3>

              <h4>{education.specialization}</h4>

              <p className="education-institution">
                {education.institution}
              </p>

              <p>{education.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


// ==============================
// CARTES DES PROJETS
// ==============================

function ProjectCard({ project }) {
  return (
    <li>
      <a href={`/projet/${project.id}`}>
        <span className="year">{project.year}</span>

        <span className="p-main">
          <strong>{project.title}</strong>
          <span>{project.summary}</span>
        </span>

        <span className="tags">
          {project.tags.join(', ')}
          <ArrowUpRight size={16} />
        </span>
      </a>
    </li>
  );
}


// ==============================
// FORMULAIRE DE CONTACT
// ==============================

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    text: '',
    type: '',
  });

  const [sending, setSending] = useState(false);

  const update = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  async function submit(event) {
    event.preventDefault();

    setStatus({ text: '', type: '' });
    setSending(true);

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL || 'http://localhost:5000'
        }/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Impossible d’envoyer le message.'
        );
      }

      setStatus({
        text: 'Message envoyé avec succès !',
        type: 'ok',
      });

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        text:
          error.message ||
          'Serveur inaccessible. Vérifie que le backend est lancé.',
        type: 'error',
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        Ton nom
        <input
          name="name"
          value={form.name}
          onChange={update}
          autoComplete="name"
          required
          maxLength={100}
        />
      </label>

      <label>
        Ton email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          autoComplete="email"
          required
          maxLength={200}
        />
      </label>

      <label>
        Ton message
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          required
          maxLength={5000}
        />
      </label>

      <p className={`form-msg ${status.type}`} role="status">
        {status.text}
      </p>

      <button className="btn" type="submit" disabled={sending}>
        {sending ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
    </form>
  );
}


// ==============================
// PAGE D'ACCUEIL
// ==============================

function Home() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);

      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  }

  return (
    <>
      <section className="hero" id="top">
        
        <h1 className="hero-title">
          Développeuse Full Stack
          <br />
          <span className="hero-gradient"> & UI/UX Designer</span>
        </h1>

        <p className="lead">
          Je suis <strong>{SITE.name}</strong>, {SITE.job.toLowerCase()}.
          {' '}{SITE.intro}
        </p>

        <div className="actions">
          <a className="btn" href="#projets">
            Découvrir mes projets
            <ArrowUpRight size={18} />
          </a>

          <a
            className="btn btn-ghost"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Voir mon CV
          </a>

          <a className="btn btn-ghost" href="#contact">
            Me contacter
          </a>
        </div>

        
      </section>

      <ExperiencesSection />

      <section id="projets">
        <p className="eyebrow">MES RÉALISATIONS</p>

        <h2>
          Projets sélectionnés
          <span className="skills-title-dot">.</span>
        </h2>

        <p className="body-text">
          Une sélection de projets qui illustrent ma créativité
          et mes compétences en conception et développement.
        </p>

        <ul className="projects">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </section>

      <SkillsSection />

      <EducationSection />

      <section id="contact">
        <p className="eyebrow">TRAVAILLONS ENSEMBLE</p>

        <h2>
          Parlons de ton projet
          <span className="skills-title-dot">.</span>
        </h2>

        <p className="lead">
          Une idée, une collaboration ou une opportunité ?
          N’hésite pas à m’écrire.
        </p>

        <p>
          <a className="mail" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>

          <button
            className="btn btn-ghost small"
            type="button"
            onClick={copyEmail}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Adresse copiée' : 'Copier l’adresse'}
          </button>
        </p>

        <p>
          <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
        </p>

        <ContactForm />

        <div className="links">
          {SITE.github && (
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}

          {SITE.linkedin && (
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          )}
        </div>
      </section>
    </>
  );
}


// ==============================
// PAGE DÉTAIL D'UN PROJET
// ==============================

function ProjectPage({ id }) {
  const index = PROJECTS.findIndex((project) => project.id === id);
  const project = PROJECTS[index];

  useEffect(() => {
    document.title = project
      ? `${project.title} – ${SITE.name}`
      : `Projet introuvable – ${SITE.name}`;
  }, [project]);

  if (!project) {
    return (
      <section className="hero">
        <h1>Projet introuvable</h1>

        <p className="lead">
          Ce projet n’existe pas ou a été déplacé.
        </p>

        <div className="actions">
          <a className="btn" href="/#projets">
            Voir tous les projets
          </a>
        </div>
      </section>
    );
  }

  const previous =
    PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];

  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <section className="hero">
        <a className="back" href="/#projets">
          ← Tous les projets
        </a>

        <p className="eyebrow">{project.category}</p>

        <h1 className="p-title">{project.title}</h1>

        <p className="lead">{project.summary}</p>

        <div
          className="cover"
          style={{ background: project.color }}
        >
          <span>{project.title}</span>
        </div>
      </section>

      <section>
        <h2>À propos du projet</h2>

        <p className="body-text">{project.description}</p>

        <dl className="skills meta">
          <dt>Année</dt>
          <dd>{project.year}</dd>

          <dt>Mon rôle</dt>
          <dd>{project.role}</dd>

          <dt>Technologies</dt>
          <dd>{project.tags.join(', ')}</dd>
        </dl>

        <div className="actions">
          {project.demo && (
            <a
              className="btn"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Voir le site <ExternalLink size={16} />
            </a>
          )}

          {project.code && (
            <a
              className="btn btn-ghost"
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              Voir le code <ExternalLink size={16} />
            </a>
          )}
        </div>
      </section>

      <section className="pager">
        <a href={`/projet/${previous.id}`}>
          ← {previous.title}
        </a>

        <a href={`/projet/${next.id}`}>
          {next.title} →
        </a>
      </section>
    </>
  );
}


// ==============================
// APPLICATION
// ==============================

function App() {
  const path = window.location.pathname;

  const projectMatch = path.match(/^\/projet\/([^/]+)/);

  const projectId = projectMatch
    ? decodeURIComponent(projectMatch[1])
    : null;

  useEffect(() => {
    if (!projectId) {
      document.title = `${SITE.name} – Portfolio`;
    }
  }, [projectId]);

  return (
    <>
      <Header />

      <main>
        {projectId ? <ProjectPage id={projectId} /> : <Home />}
      </main>

      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
