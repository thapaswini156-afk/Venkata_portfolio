import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center', padding: '3rem 2rem',
        borderTop: '1px solid var(--border)',
        color: 'var(--text3)', fontSize: '0.8rem',
      }}>
        <p>Designed & coded with intention — Thapaswini Thota · 2025</p>
        <p style={{ marginTop: '0.5rem' }}>Angular · TypeScript · Node.js · AWS · AI</p>
      </footer>
      <ChatWidget />
    </>
  )
}
