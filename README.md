# DecodeLabs Full Stack Development Internship — 2026
### Kartik Saxena · qvrtik · Batch 2026

---

## The honest version

I came into this internship as a third-year BTech CSE student who had been 
planning to "start building things properly" for years. The kind of person who 
had folders full of half-started projects and a GitHub with more ideas than 
commits.

This internship forced the hand. Three projects, three weeks, one coherent 
full-stack system — built from scratch, learned in public.

What started as an internship assignment became something I actually want to 
keep building: a personal portfolio and dev journal that documents the journey 
in real time. Not a polished highlight reel. The actual process.

---

## What's in this repo

| Task | What it is | Stack |
|------|-----------|-------|
| [Task 1](./task1) | Responsive personal brand landing page | HTML5, CSS3, Vanilla JS |
| [Task 2](./task2) | REST API backend for a live dev journal | Node.js, Express.js |
| [Task 3](./task3) | Persistent database layer | SQLite, better-sqlite3 |

All three connect into one system — the frontend (Task 1) calls the backend 
(Task 2) which reads and writes to the database (Task 3). A complete full-stack 
application, built week by week.

---

## Task 1 — The Interface

**Goal:** Build a responsive frontend interface. No frameworks. Master the fundamentals first.

What I actually built: a personal brand landing page for **qvrtik** — my 
creator identity across platforms. Inspired by landonorris.com's design language: 
full-screen overlay nav, oversized bold typography, alternating light/dark sections, 
animated CSS blob background.

The brief said "responsive layout." I used that constraint to build something 
I genuinely needed — a home for my work online.

**Key implementation details:**
- Mobile-first CSS with `clamp()` for fluid typography — no fixed breakpoints for type
- CSS Grid for macro layout, Flexbox for components
- `IntersectionObserver` for scroll-reveal animations
- Full-screen overlay nav with hamburger → X animation (pure CSS transforms)
- Animated blob background: layered `radial-gradient` shapes with `@keyframes` drift
- Semantic HTML5 landmarks throughout (`header`, `nav`, `main`, `article`, `footer`)
- Zero dependencies, zero frameworks

**Live demo:** https://kaikartik.github.io/decodelabs_tasks/task1/

---

## Task 2 — The Nervous System

**Goal:** Build a backend API with GET/POST endpoints, handle user input, validate data.

What I actually built: a REST API for **The Log** — a public dev journal feed 
embedded in the portfolio site. Every DSA problem solved, every project shipped, 
every video posted gets logged here through a private admin panel and appears 
live on the portfolio.

**Endpoints:**

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/log` | Public | Fetch all journal entries |
| POST | `/api/log` | Protected | Create new entry |
| DELETE | `/api/log/:id` | Protected | Remove an entry |

**Key implementation details:**
- Proper separation of concerns: `routes/`, `middleware/`, `data/` folders
- Custom auth middleware checking `x-admin-password` header — real security at the API layer, not just UI
- Input validation with semantic HTTP status codes (400 Bad Request, 401 Unauthorized, 201 Created, 404 Not Found)
- CORS configured to whitelist specific origins
- In-memory store in Week 2 (intentionally temporary — replaced in Task 3)

**How to run:**
```bash
cd task2/server
npm install
npm run dev
# Server starts at http://localhost:3000
```

---

## Task 3 — The Memory

**Goal:** Connect the backend to a database, design a schema, perform CRUD operations.

What I actually built: replaced the in-memory array from Task 2 with a real 
SQLite database. Entries now survive server restarts. The `store.js` file 
was the only thing that changed — routes, middleware, and frontend stayed 
identical. That's the point of separated architecture.

**Schema:**
```sql
CREATE TABLE entries (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  type      TEXT    NOT NULL CHECK(type IN ('DSA','BUILD','VIDEO','MUSIC','LIFE')),
  title     TEXT    NOT NULL,
  link      TEXT,
  platform  TEXT,
  date      TEXT    NOT NULL DEFAULT (date('now'))
);
```

**Key implementation details:**
- `CHECK` constraint enforces valid entry types at the database level — not just JavaScript validation
- `NOT NULL` on required fields — data integrity enforced by the schema itself
- Parameterized queries via `better-sqlite3` — SQL injection prevention built in
- `WAL` mode enabled for concurrent read/write performance
- `AUTOINCREMENT` replaces manual ID tracking from the in-memory version
- `db.js` handles connection + schema creation separately from `store.js` which handles queries — single responsibility principle

**How to run:**
```bash
cd task3/server
npm install
npm run dev
# Database file auto-created at server/data/journal.db on first run
```

---

## The bigger picture

These three projects aren't just internship submissions. They're the foundation 
of something I'm continuing to build:

- **The portfolio site** will keep getting refined — proper responsive polish, 
  more sections, deploy to a custom domain eventually
- **The Log** will keep getting entries — DSA progress, projects shipped, 
  content posted, honestly documented
- **The backend** will eventually move to a cloud host so the feed is always live

The internship gave the deadline that forced the start. The project gives the 
reason to keep going.

---

## Connect

- **LinkedIn:** [Kartik Saxena](https://linkedin.com/in/ikartiksaxena)
- **GitHub:** [@kaikartik](https://github.com/kaikartik)


---

*BTech CSE · Year 3 · DecodeLabs Full Stack Internship · Batch 2026*
