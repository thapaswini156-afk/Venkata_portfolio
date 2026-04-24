# Thapaswini Thota — Portfolio

A modern, story-driven portfolio with an AI career assistant built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start (Local)

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx          # Fixed top navigation
│   ├── Hero.tsx         # Landing section
│   ├── Story.tsx        # Career timeline narrative
│   ├── Stats.tsx        # Impact numbers bar
│   ├── Experience.tsx   # Job cards (Problem → Action → Impact)
│   ├── Projects.tsx     # Project mini-stories
│   ├── Skills.tsx       # Skills grid by category
│   ├── Contact.tsx      # Future goals + contact links
│   ├── ChatWidget.tsx   # AI career assistant (floating)
│   └── FadeIn.tsx       # Scroll-triggered animation wrapper
├── data/
│   └── resume.ts        # All content in one place — edit here
├── App.tsx
├── main.tsx
└── index.css
```

> **To update any content**, only edit `src/data/resume.ts`. Everything else pulls from that file.

---

## Deploy to Vercel (Recommended — Free)

### Option A: One-click via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live at `https://your-project.vercel.app`.

### Option B: Via GitHub + Vercel dashboard
1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/thapaswini-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** — done in ~60 seconds

---

## Deploy to Netlify (Alternative — Free)

### Option A: Drag & drop
```bash
npm run build
```
Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

### Option B: Via GitHub
1. Push to GitHub (same steps as above)
2. Go to [netlify.com](https://netlify.com) → **Add New Site → Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**

---

## Custom Domain (Optional)

After deploying to Vercel or Netlify:
- Go to your project's **Domain Settings**
- Add your custom domain (e.g. `thapaswini.dev`)
- Follow their DNS setup guide (usually just adding a CNAME record)

---

## AI Assistant Notes

The chat widget uses two layers:
1. **Local knowledge base** — instant responses for common questions (skills, experience, projects, hire, contact, education, AI)
2. **Claude API fallback** — for any question not matched locally, it calls the Anthropic API

The API call is handled client-side in `ChatWidget.tsx`. The API key is not required — it uses the Anthropic API endpoint without a key (handled by the Claude.ai environment). If you deploy this standalone and need the AI fallback to work, you'll need to add your own Anthropic API key.

### Adding your API key for standalone deployment:
In `src/components/ChatWidget.tsx`, update the fetch headers:
```ts
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_ANTHROPIC_API_KEY',
  'anthropic-version': '2023-06-01',
  'anthropic-dangerous-direct-browser-access': 'true',
}
```

> ⚠️ For production, move the API call to a serverless function to keep your key secure.

---

## Customization

| What to change | Where |
|---|---|
| Name, email, LinkedIn | `src/data/resume.ts` → top fields |
| Timeline events | `src/data/resume.ts` → `timeline` array |
| Job experience | `src/data/resume.ts` → `experience` array |
| Projects | `src/data/resume.ts` → `projects` array |
| Skills | `src/data/resume.ts` → `skills` array |
| Colors / theme | `src/index.css` → `:root` CSS variables |
| AI chat responses | `src/components/ChatWidget.tsx` → `KB` object |
