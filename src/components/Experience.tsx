import FadeIn from './FadeIn'
import { resume } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" style={{
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
          Professional Experience
        </p>

        <h2 style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.015em',
        }}>
          Where I've created <em style={{ color: 'var(--accent2)' }}>real impact.</em>
        </h2>

        <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 620, lineHeight: 1.85, fontWeight: 300, marginBottom: '2.5rem' }}>
          Every role has been about solving a real problem — not just writing code that compiles,
          but building systems people depend on.
        </p>

        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {resume.experience.map((job, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '1.75rem',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
            >
              <div style={{
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', gap: '1rem',
                marginBottom: '1rem', flexWrap: 'wrap',
              }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>{job.company}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent3)', fontWeight: 500, marginTop: '0.2rem' }}>{job.role}</div>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', whiteSpace: 'nowrap', marginTop: '0.25rem' }}>{job.period}</div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {job.impacts.map((imp, j) => (
                  <li key={j} style={{
                    fontSize: '0.88rem', color: 'var(--text2)',
                    padding: '0.4rem 0',
                    borderBottom: j < job.impacts.length - 1 ? '1px solid var(--border)' : 'none',
                    display: 'flex', gap: '0.75rem', lineHeight: 1.6,
                  }}>
                    <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '0.05rem' }}>→</span>
                    <span>
                      {imp.text}
                      {imp.stat && (
                        <span style={{
                          display: 'inline-block',
                          background: 'rgba(45,212,191,0.12)',
                          color: 'var(--teal)', borderRadius: 999,
                          padding: '0.15rem 0.6rem', fontSize: '0.75rem',
                          fontWeight: 600, marginLeft: '0.25rem',
                        }}>
                          {imp.stat}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
