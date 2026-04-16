# CLAUDE.md — KS HEKSA Website

## Project Overview

Marketing website for **KS HEKSA** (Klub Tenisa Stołowego HEKSA) — a Polish table tennis club. Single-purpose informational site: present the club, its training programs, schedule, and contact form.

**Language:** Polish throughout (UI labels, copy, error messages, metadata).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI library | React 18 |
| Styling | Tailwind CSS 3.3 |
| Form management | react-hook-form 7.54 |
| Email sending | Nodemailer 8.0 |
| Icons | @heroicons/react 2.2 |

Run `npm run dev` to start the dev server on `http://localhost:3000`.

---

## Project Structure

```
heksa_web/
├── app/
│   ├── layout.js           # Root layout — sets <html lang="pl">, imports globals.css
│   ├── page.js             # Home page — assembles all section components
│   ├── contact/
│   │   └── page.js         # /contact route — contact info + ContactForm
│   └── api/
│       └── contact/
│           └── route.js    # POST handler — sends email via Nodemailer
├── components/
│   ├── header.js           # Sticky nav with mobile hamburger
│   ├── hero.js             # Landing hero with CTAs
│   ├── aboutus.js          # "Dlaczego HEKSA?" 3-column feature cards
│   ├── program.js          # 3 program cards (Akademia, Dorośli, Elita)
│   ├── schedule.js         # Weekly training timetable
│   └── contactform.js      # Client form ("use client") with react-hook-form
├── pages/
│   └── about.js            # Redirects → /#about (Pages Router shim, keep it)
├── public/
│   └── img/
│       ├── logo.jpg
│       ├── image1.jpg      # Hero + Elita program
│       ├── image2.jpg      # Akademia program
│       └── image3.jpg      # Adult program
├── styles/
│   └── globals.css         # Tailwind directives, smooth scroll, scroll-padding-top: 80px
├── .env.example            # SMTP env var template
└── tailwind.config.js      # Content paths cover app/, components/, pages/
```

---

## Routing

| URL | File | Notes |
|---|---|---|
| `/` | `app/page.js` | Main single-page with all sections |
| `/contact` | `app/contact/page.js` | Standalone contact page |
| `/about` | `pages/about.js` | Redirects to `/#about` |
| `POST /api/contact` | `app/api/contact/route.js` | Email API endpoint |

The home page uses anchor IDs for in-page navigation: `#about`, `#programs`, `#schedule`, `#contact`.

---

## Components

### `header.js`
- Sticky top nav, height ~80px (scroll-padding-top matches this)
- Logo from `/img/logo.jpg`
- Nav links: Klub → `#about`, Program → `#programs`, Plan → `#schedule`, Kontakt → `/contact`
- Mobile: hamburger toggle with state

### `hero.js`
- Full-width landing section, gray-100 gradient background
- Two CTAs: "Dołącz teraz" (orange, → `#contact`) and "Plan Zajęć" (bordered, → `#schedule`)
- Image: `/img/image1.jpg` — uses standard `<img>` tag, **not** Next.js `<Image>`

### `aboutus.js`
- 3 feature cards with Heroicon icons and orange hover backgrounds
- Cards: Profesjonalny Trening, Tworzymy Społeczność, Regularne Turnieje

### `program.js`
- 3 program cards: Akademia (6–14 lat), Trening dla Dorosłych, Trening Elity
- Images from `/img/image2.jpg`, `/img/image3.jpg`, `/img/image1.jpg` — standard `<img>` tags
- Hover: shadow + translateY effect

### `schedule.js`
- Static table — days: Poniedziałek, Środa, Piątek
- Time slots: 09:00–11:00, 14:00–16:00, 18:00–20:00
- Classes: Juniorów, Dorośli Początkujący / Zaawansowani, Trening Elity, Wolna Gra

### `contactform.js`
- `"use client"` directive required
- Uses `react-hook-form` — fields: name, email, message (all required)
- Submits `POST /api/contact` as JSON
- Shows Polish success/error messages after submit
- Button shows loading state during submission

---

## API — `/api/contact`

**File:** `app/api/contact/route.js`

Expects JSON body: `{ name, email, message }`. Validates all fields are present, then sends email via Nodemailer SMTP.

**Required env vars** (copy `.env.example` → `.env.local`):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password   # Gmail App Password, not account password
CONTACT_EMAIL=recipient@email.com
```

Without `.env.local` the contact form will throw a 500 error.

---

## Styling Conventions

- **Primary color:** Orange — used for buttons, CTAs, hover states. Tailwind class: `bg-orange-500`, `text-orange-500`, hover: `bg-orange-600`.
- **Neutrals:** White, `gray-100` backgrounds for alternating sections.
- All styling is utility-first Tailwind; no custom CSS classes beyond globals.css base resets.
- Responsive breakpoints follow Tailwind defaults (`sm`, `md`, `lg`). Mobile-first.
- Smooth scrolling enabled globally; `scroll-padding-top: 80px` accounts for sticky header.

---

## Images

Images live in `public/img/` and are referenced as `/img/filename.jpg` (absolute public path).

Currently using standard `<img>` tags — **not** Next.js `<Image>` component. If converting to `<Image>`, add width/height props and update `next.config.js` if serving from external domains.

---

## Known Issues / TODO

- **`.env.local` not created** — contact form email sending is non-functional until SMTP credentials are added.
- `pages/about.js` is a Pages Router redirect shim; both routers coexist — do not add new pages to `pages/`, use `app/` only.
- `app/layout.js` metadata should reflect club branding (currently set correctly as "KS HEKSA - Klub Tenisa Stołowego").
- `api/` directory at root contains empty `routes/`, `middleware/`, `services/` folders — ignore these, the real API is at `app/api/`.
- No deployment config (`vercel.json`, `Dockerfile`) — Vercel zero-config deploy should work out of the box.

---

## Development Notes

- Keep scope minimal — this is a simple club marketing site, not a web app.
- All user-facing text is in Polish. Keep it that way.
- Do not add new pages to `pages/` — App Router only.
- Do not over-engineer. No state management libraries, no database, no auth needed.
- When adding new sections, add them to `app/page.js` as components with an `id` anchor, and add a nav link in `header.js`.
