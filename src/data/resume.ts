export const resume = {
  name: 'Venkata Thapaswini Thota',
  shortName: 'Thapaswini Thota',
  initials: 'TT',
  title: 'Full Stack Software Engineer',
  location: 'Raleigh, NC',
  email: 'thapaswinithota08@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thapaswini-thota',
  yearsExp: '3+',

  stats: [
    { num: '32%', label: 'API response time improvement' },
    { num: '27%', label: 'Reliability increase' },
    { num: '25%', label: 'Faster release cycles' },
    { num: '20+', label: 'Production features shipped' },
  ],

  timeline: [
    {
      year: '2015–2019',
      title: 'B.Tech, Computer Science — Acharya Nagarjuna University',
      body: 'Built the foundation. Learned to think in systems, not just syntax.',
      color: 'var(--accent)',
    },
    {
      year: '2019–2022',
      title: 'Software Engineer @ CitiusTech, India',
      body: 'First real-world reps. Shipped 20+ production features, owned backend services, and learned what scale actually means in enterprise software.',
      color: 'var(--teal)',
    },
    {
      year: '2022–2024',
      title: 'M.S. Computer Science — University of Central Florida',
      body: 'Relocated to the US. AI/ML coursework, graduate projects, and building at the intersection of software and intelligence.',
      color: 'var(--coral)',
    },
    {
      year: '2024–Now',
      title: 'Software Engineer II @ DXC Technology, Raleigh NC',
      body: 'Leading feature development across enterprise SaaS. Integrating AI. Mentoring. Delivering measurable improvements every sprint.',
      color: 'var(--accent2)',
    },
  ],

  experience: [
    {
      company: 'DXC Technology',
      role: 'Software Engineer II — Full Stack',
      period: 'Aug 2024 – Present · Raleigh, NC',
      impacts: [
        { text: 'Built RESTful APIs with JWT auth + RBAC, reducing access-related incidents by', stat: '32%' },
        { text: 'Cut API response time from 820ms → 560ms through PostgreSQL query optimization', stat: '32% gain' },
        { text: 'Improved application reliability via centralized error handling and validation patterns', stat: '+27%' },
        { text: 'Containerized services on AWS EC2 via Docker, cutting release cycle time by', stat: '25%' },
        { text: 'Integrated AI/ML services with data science partners — surfacing insights directly in the product UI', stat: null },
        { text: 'Mentored junior engineers on TypeScript best practices and component architecture', stat: null },
      ],
    },
    {
      company: 'CitiusTech',
      role: 'Software Engineer — Full Stack',
      period: 'Oct 2019 – Dec 2022 · India',
      impacts: [
        { text: 'Delivered 20+ production features on enterprise SaaS platforms using React.js, Node.js, and REST services', stat: null },
        { text: 'Built reusable Express middleware for logging, validation, and error handling — improved backend stability by', stat: '28%' },
        { text: 'Optimized PostgreSQL and MongoDB databases — data retrieval performance improved by', stat: '35%' },
        { text: 'Deployed cloud delivery pipelines on AWS EC2/S3, Netlify, and Vercel', stat: null },
        { text: 'Wrote unit tests with Jest, validated APIs via Postman, led code reviews in Agile sprints', stat: null },
      ],
    },
  ],

  projects: [
    {
      num: '01',
      title: 'AI-Integrated Task Management Platform',
      problem: 'Teams waste time writing task descriptions and assigning priorities manually.',
      solution: 'Full-stack app where AI reads your raw input and auto-generates task summaries + priority scores using the OpenAI API — saving cognitive load for actual work.',
      stack: ['Angular 16', 'TypeScript', '.NET Web API', 'OpenAI API', 'PostgreSQL', 'JWT Auth', 'Entity Framework Core'],
      outcome: 'AI-powered prioritization — no manual tagging needed',
    },
    {
      num: '02',
      title: 'Real-Time Health Dashboard with AI Anomaly Detection',
      problem: 'Clinicians need to catch abnormal patient vitals in real time — not from a report generated minutes later.',
      solution: 'WebSocket-powered dashboard with live Chart.js visualizations and a Python AI anomaly detection microservice that flags outlier vitals instantly.',
      stack: ['Angular', 'TypeScript', 'Java Spring Boot', 'WebSocket', 'Chart.js', 'Python (AI Microservice)', 'REST'],
      outcome: 'Real-time outlier flagging — zero polling delay',
    },
  ],

  skills: [
    { group: 'Frontend', items: ['Angular', 'TypeScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { group: 'Backend & APIs', items: ['Node.js', 'Express.js', '.NET', 'Java', 'REST APIs', 'JWT Auth', 'Middleware'] },
    { group: 'AI & Modern Dev', items: ['OpenAI API', 'AI Integration', 'GitHub Copilot', 'LLM Features'] },
    { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQL', 'Query Optimization', 'Indexing'] },
    { group: 'Cloud & DevOps', items: ['AWS EC2/S3', 'Docker', 'CI/CD Pipelines', 'Netlify', 'Vercel'] },
    { group: 'Practices', items: ['Agile/Scrum', 'Code Reviews', 'Jest', 'Postman', 'Git', 'Cross-Functional Collab'] },
  ],

  futureGoals: [
    { icon: '⚡', title: 'Full Stack Engineer', body: 'End-to-end ownership of features in a product-focused team — building things users actually care about.' },
    { icon: '🤖', title: 'AI-Integrated Product Roles', body: 'Teams embedding AI into real workflows — not as a gimmick, but as a genuine force multiplier for users.' },
    { icon: '🏗', title: 'Senior / Lead Engineering', body: 'Roles where I can mentor, set technical direction, and help a team build with consistency and quality.' },
  ],

  resumeContext: `
    Name: Venkata Thapaswini Thota. Location: Raleigh, NC. Email: thapaswinithota08@gmail.com.
    Title: Full Stack Software Engineer. Experience: 3+ years.
    Current Role: Software Engineer II at DXC Technology (Aug 2024–Present, Raleigh NC).
    Previous Role: Software Engineer at CitiusTech (Oct 2019–Dec 2022, India).
    Education: M.S. Computer Science, University of Central Florida (2022–2024); B.Tech Computer Science, Acharya Nagarjuna University (2015–2019).
    Frontend Skills: Angular, TypeScript, React.js, HTML5, CSS3, Tailwind CSS.
    Backend Skills: .NET REST services, Node.js, Express.js, Java, RESTful API Design, JWT Auth, Middleware.
    AI Skills: AI Service Integration, GitHub Copilot, OpenAI API, LLM-powered feature development.
    Database Skills: PostgreSQL, MongoDB, SQL, Query Optimization, Indexing.
    Cloud/DevOps Skills: AWS EC2/S3, Docker, CI/CD Pipelines, Netlify, Vercel.
    Tools: Git, Jest, Postman, Agile/Scrum, Code Reviews.
    Key Achievements at DXC: Reduced API response time from 820ms to 560ms (32% improvement). Reduced access incidents by 32% with JWT + RBAC. Improved reliability 27% with centralized error handling. Reduced release cycle by 25% using Docker + AWS. Integrated AI/ML services with data science teams.
    Key Achievements at CitiusTech: Delivered 20+ production features. Improved backend stability 28% with reusable middleware. Improved DB performance 35% by optimizing PostgreSQL and MongoDB.
    Projects: (1) AI-Integrated Task Management Platform using Angular 16, TypeScript, .NET, OpenAI API, PostgreSQL. (2) Real-Time Health Dashboard with Angular, TypeScript, Java Spring Boot, WebSocket, Chart.js, Python AI microservice.
    Targeting roles: Full Stack Engineer, AI-integrated product roles, Senior/Lead Engineering.
  `,
}
