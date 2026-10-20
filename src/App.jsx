import { useEffect, useState } from 'react';
import {
  profile, navLinks, stats, about, highlights, skillGroups, timeline, projects,
} from './data.js';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </a>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-cta">
        <a className="nav-phone" href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
        <a className="btn btn-light" href="#contact">Hire Me</a>
        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-top">
        <span className="dots"><i /><i /><i /></span>
        <span className="file">NEERAJ_RANA.JS</span>
      </div>
      <pre className="code-body">
        <code>
          <span className="k">const</span> <span className="v">developer</span> = {'{'}{'\n'}
          {'  '}<span className="p">name</span>: <span className="s">"{profile.name}"</span>,{'\n'}
          {'  '}<span className="p">role</span>: <span className="s">"{profile.role}"</span>,{'\n'}
          {'  '}<span className="p">stack</span>: [{'\n'}
          {'    '}<span className="s">"React"</span>, <span className="s">"Node.js"</span>,{'\n'}
          {'    '}<span className="s">"Express"</span>, <span className="s">"MongoDB"</span>{'\n'}
          {'  '}],{'\n'}
          {'  '}<span className="p">learning</span>: <span className="n">true</span>,{'\n'}
          {'  '}<span className="p">available</span>: <span className="n">true</span>{'\n'}
          {'}'};
        </code>
      </pre>
      <div className="code-foot">
        <span className="open"><i /> OPEN TO WORK</span>
        <span>ES6+ OK</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="eyebrow">PORTFOLIO 2026</p>
        <span className="pill"><i /> OPEN TO INTERNSHIPS &amp; FULL-TIME</span>
        <p className="kicker">HIRE A MOTIVATED DEVELOPER</p>
        <h1>{profile.first}<br /><em>{profile.last}</em></h1>
        <p className="lead">
          Full Stack Developer skilled in <b>React</b>, <b>Node.js</b> and <b>MongoDB</b>, building
          RESTful APIs and responsive interfaces for the web and mobile with <b>React Native</b>.
        </p>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <strong className={s.color}>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-btns">
          <a className="btn btn-light" href="#projects">View Projects ↓</a>
          <a className="btn btn-ghost" href="#contact">Get In Touch →</a>
        </div>
      </div>
      <CodeCard />
    </section>
  );
}

function SectionHead({ label, title, accent, sub }) {
  return (
    <header className="section-head reveal">
      <p className="eyebrow">{label}</p>
      <h2>{title} <em>{accent}</em></h2>
      {sub && <p className="sub">{sub}</p>}
    </header>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHead label={`WHO IS ${profile.name.toUpperCase()}`} title="Building Real" accent="Projects" />
      <div className="about-grid">
        <div className="about-text reveal">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="cards">
          {highlights.map((h) => (
            <article key={h.title} className="card reveal">
              <span className="icon">{h.icon}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead
        label="ENGINEERING CAPABILITIES"
        title="Technical"
        accent="Toolkit"
        sub="The stack I use to design APIs, build interfaces and ship full-stack apps."
      />
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <article key={g.title} className="card skill reveal">
            <span className="icon">{g.icon}</span>
            <small>{g.title}</small>
            <div className="chips">
              {g.items.map((it) => <span key={it} className="chip">{it}</span>)}
            </div>
            <p>{g.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section">
      <SectionHead
        label="PROFESSIONAL TIMELINE"
        title="Education &amp;"
        accent="Certifications"
        sub="Where I'm learning from and what I've completed so far."
      />
      <div className="timeline">
        {timeline.map((t) => (
          <article key={t.id} className="card job reveal">
            <div className="job-top">
              <span className="tag">{t.type}</span>
              <span className="mono muted">ID: {t.id}</span>
            </div>
            <h3>{t.title}</h3>
            <p className="org">{t.org}</p>
            <p className="mono muted">📅 {t.date}{t.active && <span className="active-badge"> ● ACTIVE</span>}</p>
            {t.points.length > 0 && (
              <ul>
                {t.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead label="FEATURED WORK" title="Projects &amp;" accent="Deliverables" />
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className={`card project reveal ${p.featured ? 'featured' : ''}`}>
            <div className="project-top">
              <span className="icon">{p.icon}</span>
              <span className="links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source`}>Code ↗</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live`}>Live ↗</a>}
              </span>
            </div>
            <h3>{p.title}</h3>
            <p className="kind">{p.kind}</p>
            <p className="desc">{p.text}</p>
            <div className="chips">
              {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', subject: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend: open the visitor's mail client with the message prefilled.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReach me at: ${form.contact}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const items = [
    { icon: '📧', label: 'PROFESSIONAL EMAIL', value: profile.email, href: `mailto:${profile.email}`, cta: 'Send mail →' },
    { icon: '📞', label: 'DIRECT LINE', value: profile.phone, href: `tel:${profile.phoneHref}`, cta: 'Dial number →' },
    { icon: '🔗', label: 'LINKEDIN', value: profile.linkedinLabel, href: profile.linkedin, cta: 'View profile →', ext: true },
    { icon: '📍', label: 'LOCATION', value: profile.location, cta: 'Available for remote work' },
  ];

  return (
    <section id="contact" className="section">
      <SectionHead label="GET IN TOUCH" title="Let's Work" accent="Together" />
      <div className="contact-grid">
        <div className="contact-list">
          {items.map((i) => (
            <div key={i.label} className="card contact-item reveal">
              <span className="icon">{i.icon}</span>
              <div>
                <small>{i.label}</small>
                <strong>{i.value}</strong>
                {i.href
                  ? <a href={i.href} {...(i.ext ? { target: '_blank', rel: 'noreferrer' } : {})}>{i.cta}</a>
                  : <span className="muted">{i.cta}</span>}
              </div>
            </div>
          ))}
        </div>
        <form className="card form reveal" onSubmit={submit}>
          <h3>SEND A MESSAGE</h3>
          <label>YOUR NAME *<input required value={form.name} onChange={set('name')} /></label>
          <label>YOUR EMAIL OR PHONE *<input required value={form.contact} onChange={set('contact')} /></label>
          <label>SUBJECT / PROJECT TOPIC<input value={form.subject} onChange={set('subject')} /></label>
          <label>YOUR MESSAGE *<textarea required rows="5" value={form.message} onChange={set('message')} /></label>
          <button className="btn btn-light" type="submit">→ SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  useReveal();
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono muted">Built with React</span>
      </footer>
    </>
  );
}
