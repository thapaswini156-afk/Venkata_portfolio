import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function Stats() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '1rem 2rem 3rem' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {resume.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: '2.2rem', color: 'var(--text)', display: 'block', lineHeight: 1.1,
            }}>
              {s.num}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text3)', marginTop: '0.25rem', display: 'block' }}>
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
