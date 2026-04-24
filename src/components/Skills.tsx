import FadeIn from './FadeIn'
import { resume } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '6rem 2rem 4rem',
      maxWidth: 900, margin: '0 auto',
    }}>
      <FadeIn>
        <p style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--text3)',
          marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{ display: 'inline-block', width: '1.5rem', height: 1, background: 'var(--text3)' }} />
          Technical Skills
        </p>

        <h2 style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.015em',
        }}>
          What's in my <em style={{ color: 'var(--accent2)' }}>toolkit.</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}>
          {resume.skills.map((group, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1.25rem',
            }}>
              <p style={{
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                color: 'var(--accent2)', textTransform: 'uppercase', marginBottom: '0.75rem',
              }}>
                {group.group}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.items.map((item, j) => (
                  <span key={j} style={{
                    fontSize: '0.78rem', padding: '0.25rem 0.6rem',
                    background: 'var(--bg3)', borderRadius: 5, color: 'var(--text2)',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
