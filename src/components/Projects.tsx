import FadeIn from './FadeIn'
import { resume } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '6rem 2rem 4rem',
      maxWidth: 1100, margin: '0 auto',
    }}>
      <FadeIn>
        <p style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--text3)',
          marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{ display: 'inline-block', width: '1.5rem', height: 1, background: 'var(--text3)' }} />
          Projects
        </p>

        <h2 style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.015em',
        }}>
          Built to <em style={{ color: 'var(--accent2)' }}>solve something.</em>
        </h2>

        <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 620, lineHeight: 1.85, fontWeight: 300, marginBottom: '2.5rem' }}>
          Not side projects for the sake of it — each one tackles a real problem with a real solution.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {resume.projects.map((proj, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '1.5rem',
              transition: 'all 0.2s', position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
            >
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                PROJECT {proj.num}
              </p>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>
                {proj.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Problem:</strong> {proj.problem}<br /><br />
                <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Solution:</strong> {proj.solution}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {proj.stack.map((tech, j) => (
                  <span key={j} style={{
                    fontSize: '0.72rem', padding: '0.2rem 0.55rem',
                    background: 'rgba(124,109,250,0.12)',
                    border: '1px solid rgba(124,109,250,0.25)',
                    borderRadius: 5, color: 'var(--accent3)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--teal)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                ✦ {proj.outcome}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
