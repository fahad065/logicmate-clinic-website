# Noor Family Clinic — Demo Clinic Website

A standalone, frontend-only Next.js demo site built to showcase the LogicMate
clinic chatbot widget on a realistic multi-branch UAE clinic. **This is not a
real clinic** — doctors, services, prices, branches, phone numbers and patient
quotes are illustrative, built to look like a real, live clinic site for demo
purposes only. Insurance provider names are used only to demonstrate the
per-branch "Insurance accepted" feature; they do not imply any real agreement.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` + `react-icons/fa` for icons
- `Plus Jakarta Sans` (headings) + `Inter` (body) via `next/font/google`
- No backend, no database, no API calls — every page is static, all content
  lives in `src/data/*.ts`. Forms (Book Appointment, Contact) simulate a
  network request and show a success state, but submit nowhere.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Pages

- `/` — Home
- `/services` — 12 services with self-pay prices, durations and preparation notes, category filters
- `/doctors` — 8 doctors and therapists (speciality, languages, branches), "female doctors only" filter
- `/insurance` — search an insurer and see which branches accept it
- `/locations` — 5 branches (Dubai, Abu Dhabi, Sharjah): hours incl. Friday, specialities, insurance accepted, facilities
- `/about` — Story, values, timeline
- `/book` — Appointment request form (mock submit); `?doctor=<id>` and `?branch=<id>` preselect
- `/contact` — Contact form (mock submit), branch phone numbers, emergency notice

## Setting up the matching chatbot

To demo the bot answering about *this* clinic, copy the content from
`src/data/` into the chatbot dashboard:

- **Locations tab** — one location per entry in `src/data/locations.ts`
  (address, phone, hours, specialities/facilities, and the **Insurance
  accepted** list — shown for UAE branches).
- **Knowledge Base tab** — services and prices (`services.ts`), doctors
  (`doctors.ts`), preparation notes, the emergency number (998), the free
  7-day follow-up rule, and the booking page link.

## Adding the LogicMate chatbot widget

Open `src/app/layout.tsx` and find the commented placeholder inside `<head>`.
Paste the `<script>` snippet from your chatbot's **Channels → Website** tab
right there — it self-injects a floating chat bubble, nothing else on the
page needs to change.

```tsx
<script>
  window.LMChatbot = { embedKey: "YOUR_EMBED_KEY", ... };
</script>
<script src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js" async></script>
```

## Notes

- Images are hotlinked from Unsplash and gracefully fall back to a branded
  gradient placeholder (`src/components/safe-img.tsx`) if a URL ever fails
  to load — verify these render correctly on the machine you're demoing from.
- All doctors, prices, branches, addresses and phone numbers are fabricated
  for demo purposes.
