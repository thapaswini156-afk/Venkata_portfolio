import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { resume } from '../data/resume'

interface Message {
  role: 'bot' | 'user'
  text: string
  showQuickReplies?: boolean
}

const QUICK_REPLIES = [
  { label: 'Skills', q: 'What are your technical skills?' },
  { label: 'Experience', q: 'Tell me about your work experience' },
  { label: 'Projects', q: 'What projects have you built?' },
  { label: 'Hire', q: 'Why should I hire you?' },
]

const KB: Record<string, string> = {
  skills: `Thapaswini's skills span the full stack:\n\n• Frontend: Angular, TypeScript, React.js, HTML5, CSS3, Tailwind CSS\n• Backend: Node.js, Express.js, .NET, Java, REST APIs, JWT Auth\n• AI/ML: OpenAI API, AI service integration, GitHub Copilot\n• Databases: PostgreSQL, MongoDB — with hands-on query optimization\n• Cloud/DevOps: AWS EC2/S3, Docker, CI/CD pipelines\n\nStrongest differentiator: she bridges AI/data science teams and production software.`,
  experience: `3+ years of full-stack experience:\n\n• DXC Technology (2024–Now): Cut API response time 32%, improved reliability 27%, integrated AI/ML services into production.\n\n• CitiusTech (2019–2022): Shipped 20+ production features, improved DB performance 35%, built reusable Express middleware (+28% stability).\n\nPlus an M.S. in CS from University of Central Florida (2022–2024).`,
  projects: `Two standout projects:\n\n• AI Task Manager — Angular 16 + .NET + OpenAI API. Auto-generates task summaries and priority scores from raw input.\n\n• Real-Time Health Dashboard — Angular + Java Spring Boot + WebSocket + Python AI microservice. Flags abnormal patient vitals instantly with zero polling delay.`,
  hire: `The case for hiring Thapaswini:\n\n• Ships production code with measurable outcomes (32%, 27%, 25% improvements)\n• Integrates AI into real products, not toy demos\n• Equally strong in browser and backend\n• Mentors junior engineers and collaborates with product & data science\n• M.S. from UCF, currently growing at DXC Technology in Raleigh, NC`,
  contact: `Reach Thapaswini at:\n📧 thapaswinithota08@gmail.com\n📍 Raleigh, NC\n💼 LinkedIn (see contact section)\n\nShe's open to full stack, AI-integrated, and senior/lead roles.`,
  education: `• M.S. Computer Science — University of Central Florida (2022–2024)\n• B.Tech CS&E — Acharya Nagarjuna University, India (2015–2019)\n\nHer UCF graduate work deepened her AI/ML knowledge and directly shaped her project work.`,
  ai: `Thapaswini has hands-on AI experience:\n\n• Integrated OpenAI API into a production task management platform (auto-summarization + priority scoring)\n• Collaborated with data science teams at DXC to surface ML-driven insights in the UI\n• Built a Python AI anomaly detection microservice for real-time health data\n• Uses GitHub Copilot actively in daily development\n\nShe's well-positioned for roles at the AI–software intersection.`,
}

function matchKB(q: string): string | null {
  const lq = q.toLowerCase()
  if (/skill|tech|stack|language|tool|know|use|framework/.test(lq)) return KB.skills
  if (/experience|background|work|job|career|role|company|dxc|citius/.test(lq)) return KB.experience
  if (/project|built|made|portfolio|task|health|dashboard/.test(lq)) return KB.projects
  if (/hire|why|recommend|fit|good|suited|strong|qualify/.test(lq)) return KB.hire
  if (/contact|email|reach|linkedin|phone|location|where/.test(lq)) return KB.contact
  if (/education|degree|school|university|ucf|ms|master|bachelor/.test(lq)) return KB.education
  if (/ai|machine learning|openai|ml|llm|copilot/.test(lq)) return KB.ai
  if (/hello|hi|hey|what can|help|who are/.test(lq)) return `Hi! I'm Thapaswini's career assistant. Ask me about:\n\n• Skills & tech stack\n• Work experience\n• Projects\n• Why you should hire her\n• How to get in touch`
  return null
}

async function askClaude(userMsg: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: `You are a concise, friendly AI career assistant for ${resume.shortName}. Use ONLY the resume data below. Keep answers under 120 words. Use bullet points or short paragraphs. Never invent information.\n\nRESUME:\n${resume.resumeContext}`,
      messages: [{ role: 'user', content: userMsg }],
    }),
  })
  const data = await res.json()
  return data.content?.[0]?.text ?? "I'm not sure — reach Thapaswini directly at thapaswinithota08@gmail.com!"
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const msgsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          role: 'bot',
          text: "Hey! 👋 I'm Thapaswini's career assistant. I know everything on her resume — ask me anything!",
          showQuickReplies: true,
        }])
      }, 200)
    }
  }, [open])

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [messages, loading])

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)

    await new Promise(r => setTimeout(r, 400 + Math.random() * 300))

    let reply = matchKB(text)
    if (!reply) {
      try { reply = await askClaude(text) }
      catch { reply = "I'm not sure — reach Thapaswini directly at thapaswinithota08@gmail.com!" }
    }

    setLoading(false)
    setMessages(prev => [...prev, { role: 'bot', text: reply! }])
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--accent)', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(124,109,250,0.4)',
        }}
        aria-label="Open AI assistant"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', bottom: '5.5rem', right: '2rem',
              width: 360, maxWidth: 'calc(100vw - 2rem)',
              background: 'var(--card)', border: '1px solid var(--border2)',
              borderRadius: 20, zIndex: 999,
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              overflow: 'hidden', maxHeight: 520,
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e1d30, #161624)',
              padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent), var(--teal))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', flexShrink: 0,
              }}>✦</div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>Career Assistant</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
                  Ask me anything about Thapaswini
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={msgsRef} className="chat-scroll" style={{
              flex: 1, overflowY: 'auto', padding: '1rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  maxWidth: '85%', display: 'flex', flexDirection: 'column', gap: '0.2rem',
                  alignSelf: msg.role === 'bot' ? 'flex-start' : 'flex-end',
                }}>
                  <div style={{
  padding: '0.65rem 0.9rem',
  fontSize: '0.83rem',
  lineHeight: 1.6,
  background: msg.role === 'bot' ? 'var(--bg3)' : 'var(--accent)',
  color: msg.role === 'bot' ? 'var(--text2)' : '#fff',
  borderRadius: msg.role === 'bot' ? '4px 12px 12px 12px' : '12px 12px 4px 12px',
  whiteSpace: 'pre-line' as const,
}}>
  {msg.text}
</div>
                  {msg.showQuickReplies && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                      {QUICK_REPLIES.map(qr => (
                        <button key={qr.label} onClick={() => send(qr.q)} style={{
                          padding: '0.3rem 0.7rem', border: '1px solid var(--border2)',
                          borderRadius: 999, fontSize: '0.75rem', color: 'var(--accent3)',
                          background: 'transparent', cursor: 'pointer',
                          fontFamily: '"DM Sans", sans-serif', transition: 'all 0.18s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,109,250,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)' }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)' }}
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div style={{
                  maxWidth: '85%', alignSelf: 'flex-start',
                  padding: '0.65rem 0.9rem', background: 'var(--bg3)',
                  borderRadius: '4px 12px 12px 12px',
                }}>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    {[0, 1, 2].map(i => (
                      <span key={i} className="typing-dot" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{
              padding: '0.75rem', borderTop: '1px solid var(--border)',
              display: 'flex', gap: '0.5rem', alignItems: 'center',
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send(input)}
                placeholder="Ask about skills, experience..."
                maxLength={200}
                style={{
                  flex: 1, background: 'var(--bg3)', border: '1px solid var(--border)',
                  borderRadius: 8, padding: '0.5rem 0.75rem',
                  color: 'var(--text)', fontSize: '0.83rem', outline: 'none',
                  fontFamily: '"DM Sans", sans-serif',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              <button onClick={() => send(input)} style={{
                background: 'var(--accent)', border: 'none', borderRadius: 7,
                width: 32, height: 32, display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent2)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
