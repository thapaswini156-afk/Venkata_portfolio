import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1rem 2rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: '1.25rem', color: 'var(--accent2)' }}>
        {resume.initials}
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['story', 'experience', 'projects', 'skills', 'contact'].map(id => (
          <a key={id} href={`#${id}`} style={{
            color: 'var(--text2)', textDecoration: 'none',
            fontSize: '0.875rem', fontWeight: 500,
            transition: 'color 0.2s', textTransform: 'capitalize',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent3)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
          >
            {id}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
