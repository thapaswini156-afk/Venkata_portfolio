import { motion } from 'framer-motion'
import { resume } from '../data/resume'

const heroTags = ['Angular · TypeScript', 'Node.js · .NET', 'AI Integration', 'PostgreSQL · MongoDB', 'AWS · Docker']

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '6rem 2rem 4rem',
      maxWidth: 900, margin: '0 auto', position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-15%',
        width: 600, height: 600,
        background: 'radial-gradient(ellipse, rgba(124,109,250,0.12) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: -1,
      }} />

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--teal)',
          marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{ display: 'inline-block', width: '2rem', height: 1, background: 'var(--teal)' }} />
        Full Stack Engineer · {resume.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem',
        }}
      >
        Building products<br />
        that{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>actually work</em>
        <br />at scale.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: '1.125rem', color: 'var(--text2)',
          maxWidth: 600, marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.8,
        }}
      >
        I'm Thapaswini — a full stack engineer who turns complex problems into clean, performant software.
        {resume.yearsExp} years shipping enterprise SaaS, integrating AI, and making APIs measurably faster.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}
      >
        {heroTags.map((tag, i) => (
          <span key={i} style={{
            padding: '0.35rem 0.9rem',
            border: `1px solid ${i < 3 ? 'var(--accent)' : 'var(--border2)'}`,
            borderRadius: 999, fontSize: '0.8rem',
            color: i < 3 ? 'var(--accent3)' : 'var(--text2)',
            background: i < 3 ? 'rgba(124,109,250,0.1)' : 'var(--card)',
          }}>
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
      >
        <a href="#experience" style={{
          padding: '0.75rem 1.75rem', borderRadius: 8, fontSize: '0.9rem',
          fontWeight: 500, background: 'var(--accent)', color: '#fff',
          textDecoration: 'none', transition: 'all 0.2s',
          fontFamily: '"DM Sans", sans-serif',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none' }}
        >
          See My Work ↓
        </a>
        <a href="#contact" style={{
          padding: '0.75rem 1.75rem', borderRadius: 8, fontSize: '0.9rem',
          fontWeight: 500, background: 'transparent',
          border: '1px solid var(--border2)', color: 'var(--text2)',
          textDecoration: 'none', transition: 'all 0.2s',
          fontFamily: '"DM Sans", sans-serif',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent3)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)' }}
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  )
}
