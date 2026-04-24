import FadeIn from './FadeIn'
import { resume } from '../data/resume'

export default function Story() {
  return (
    <section id="story" style={{
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
          My Beginning
        </p>

        <h2 style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.015em',
        }}>
          From curiosity to <em style={{ color: 'var(--accent2)' }}>craft.</em>
        </h2>

        <p style={{
          fontSize: '1rem', color: 'var(--text2)', maxWidth: 620,
          lineHeight: 1.85, fontWeight: 300, marginBottom: '3rem',
        }}>
          It started in India — a Computer Science student learning how software could solve real problems.
          Four years of study weren't just about passing exams; they were about building a mindset that code
          is never just code — it's someone's experience, someone's workflow, someone's livelihood.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 0 }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, var(--accent), var(--teal), transparent)',
          }} />
          {resume.timeline.map((item, i) => (
            <div key={i} style={{ paddingLeft: '2rem', marginBottom: '2.75rem', position: 'relative' }}>
              <div style={{
                position: 'absolute', left: -5, top: '0.4rem',
                width: 10, height: 10, borderRadius: '50%',
                background: item.color, border: '2px solid var(--bg)',
              }} />
              <p style={{
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                color: 'var(--accent2)', marginBottom: '0.35rem', textTransform: 'uppercase',
              }}>
                {item.year}
              </p>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>
                {item.title}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.75 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
