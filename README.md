# Meridian Family Clinic — Demo Clinic Website

A standalone, frontend-only Next.js demo site built to showcase the LogicMate
clinic chatbot widget on a realistic international clinic group — one clinic
each in the USA (New York), UK (London), UAE (Dubai), Australia (Sydney) and
Canada (Toronto), each with its own currency, insurance plans, opening hours,
time zone and emergency number. **This is not a real clinic** — doctors,
services, prices, clinics, phone numbers and patient quotes are illustrative,
built to look like a real, live clinic site for demo purposes only. Insurance
plan names are used only to demonstrate the per-clinic "Insurance accepted"
feature; they do not imply any real agreement.

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
- `/services` — 11 services with self-pay prices in each country's currency (country switcher), durations, preparation notes; some services only in some countries
- `/doctors` — 8 doctors and therapists (speciality, languages, clinics), "female doctors only" filter
- `/insurance` — search an insurance plan and see which clinics accept it, plus each clinic's insurance notes
- `/locations` — 5 clinics in 5 countries: hours + time zone, local emergency number, specialities, insurance accepted, facilities
- `/about` — Story, values, timeline
- `/book` — Appointment request form (mock submit); `?doctor=<id>` and `?branch=<id>` preselect
- `/contact` — Contact form (mock submit), clinic phone numbers, emergency numbers per country

## Setting up the matching chatbot

To demo the bot answering about *this* clinic, copy the content from
`src/data/` into the chatbot dashboard:

- **Locations tab** — one location per entry in `src/data/locations.ts`
  (address, phone, hours, specialities/facilities, insurance accepted).
- **Knowledge Base tab** — services and prices per country (`services.ts`),
  doctors (`doctors.ts`), preparation notes, each country's emergency number,
  the free 7-day follow-up rule, and the booking page link.

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
- All doctors, prices, clinics, addresses and phone numbers are fabricated
  for demo purposes.
