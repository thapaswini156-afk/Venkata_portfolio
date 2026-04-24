import FadeIn from './FadeIn'
import { resume } from '../data/resume'

export default function Contact() {
  return (
    <>
      {/* Future Goals */}
      <section style={{
        padding: '6rem 2rem 4rem', maxWidth: 900, margin: '0 auto',
      }}>
        <FadeIn>
          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--text3)',
            marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ display: 'inline-block', width: '1.5rem', height: 1, background: 'var(--text3)' }} />
            What's Next
          </p>

          <h2 style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.015em',
          }}>
            The roles I'm <em style={{ color: 'var(--accent2)' }}>excited about.</em>
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 620, lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
            I'm looking for environments where thoughtful engineering meets ambitious product thinking.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {resume.futureGoals.map((goal, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.25rem',
              }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{goal.icon}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{goal.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.65 }}>{goal.body}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        minHeight: '60vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '4rem 2rem 6rem',
        maxWidth: 900, margin: '0 auto',
      }}>
        <FadeIn>
          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--text3)',
            marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ display: 'inline-block', width: '1.5rem', height: 1, background: 'var(--text3)' }} />
            Let's Talk
          </p>

          <h2 style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.015em',
          }}>
            Ready when <em style={{ color: 'var(--accent2)' }}>you are.</em>
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 560, lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
            Whether you're hiring, exploring, or just want to talk software — I'm happy to connect. No formality needed.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {[
              { label: `✉ ${resume.email}`, href: `mailto:${resume.email}` },
              { label: '↗ LinkedIn', href: resume.linkedin },
              { label: `📍 ${resume.location}`, href: null },
            ].map((link, i) => (
              link.href ? (
                <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.6rem 1.25rem', border: '1px solid var(--border2)',
                    borderRadius: 8, color: 'var(--text2)', textDecoration: 'none',
                    fontSize: '0.875rem', fontWeight: 500, transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(124,109,250,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)'; (e.currentTarget as HTMLElement).style.color = 'var(--text2)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  {link.label}
                </a>
              ) : (
                <span key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.25rem', border: '1px solid var(--border2)',
                  borderRadius: 8, color: 'var(--text2)', fontSize: '0.875rem', fontWeight: 500,
                }}>
                  {link.label}
                </span>
              )
            ))}
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text3)' }}>
            Also try the AI assistant (bottom right) — ask it anything about my background!
          </p>
        </FadeIn>
      </section>
    </>
  )
}
