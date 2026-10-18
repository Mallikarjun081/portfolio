# Design notes: Mallikarjun Deshmukh portfolio

## 1. Mobbin research

These references come from searches run through the connected Mobbin MCP (web sections and screens) on 2026-10-18.
Mobbin has very few portfolios for individual developers. Most of its matches were studio and agency
sites, plus engineering and case-study pages from product companies. The patterns below come from those
sources. Nothing was copied directly.

| # | Reference (Mobbin) | What works | Adapt | Do not copy | How it applies here |
|---|---|---|---|---|---|
| 1 | [Cloudstudio: Selected work](https://mobbin.com/sites/sections/48890788-7d16-4887-baaa-5b22583ef055) | Numbered tiles (`01`, `02`) with a monospace metadata line under each title; the preview images show real product UI | Index numbers and a mono category line under each project title | Dark full-bleed tiles, sound/game toggles, large vanity numbers | Projects get `01 / 02 / 03` labels and a mono category line |
| 2 | [MOUTHWASH Studio: Selected Work](https://mobbin.com/sites/sections/e2bc218a-3568-43c0-a95e-b95b0d829e6c) | An asymmetric grid where one large lead piece outranks smaller secondary pieces; small tag chips | The flagship project gets a full-width row and the other two share the next row | Industry filters and loud, saturated imagery | The Pomegranate Smart Sprayer leads at full width |
| 3 | [Fiasco: Selected works](https://mobbin.com/sites/sections/4ed7c118-a866-41fa-824c-32a24323c927) | A warm off-white paper background, short one-line descriptors and small tags; very calm | The warm paper base and one-sentence project descriptors | Italic serif on every title; the staggered collage | Base colour `#F3F1EB` and concise project descriptions |
| 4 | [Locomotive: All Work](https://mobbin.com/sites/sections/77eac98e-ea26-429d-b27e-3d922800c5ff) and [footer](https://mobbin.com/sites/sections/beb9cb86-4fed-476d-a6ec-e760e93f9b7a) | Hairline horizontal rules give the page its structure; editorial serif at large sizes; the footer is plain columns of lists | Hairline rules as the main structural device instead of cards | Glyph-substitution type tricks | Each section starts on a rule with a mono label |
| 5 | [Analogue Agency: Capabilities](https://mobbin.com/sites/sections/7063e124-d7b5-4fe4-9797-b318a5be20d1) | Skills appear as plain typographic lists in columns, each set off by a thin vertical rule | Typographic skill lists with no badges, logos or progress bars | Dark-only theme | The Skills section uses five grouped lists |
| 6 | [Raw Materials: Our Capabilities](https://mobbin.com/sites/sections/67c9761c-a201-45f1-910a-ca8faa50cb33) | Numbered capability groups with rule-separated items | Numbered groups | Boxed containers and saturated colour blocks | Skill groups are numbered `01–05` |
| 7 | [Feather: contact](https://mobbin.com/sites/sections/98f85e8c-3dcf-4f11-a37a-24e43a29ee0c) | Contact details shown as label/value rows; quiet and easy to scan | Label/value rows for contact methods | Grey-on-grey low contrast | The Contact section lists Email and LinkedIn as rows |
| 8 | [Aino Agency: contact panel](https://mobbin.com/sites/sections/1083cf3c-a197-4ee7-9632-e9bfe0d4e416) | A **Copy email** action next to the address; technical hardware photography | A copy-email button | Halftone overlay pattern | The Contact section has a copy-to-clipboard button |
| 9 | [Büro: timeline](https://mobbin.com/sites/sections/bcad6cf8-5eb5-4590-bb1f-b8f4d4ecfb88) | Rows with the title on the left, a right-aligned year range and a thin rule between rows | Rule-separated rows with right-aligned years | Diagonal decorative line | Education and Certifications use these rows |
| 10 | [Linear: How we built Project Updates](https://mobbin.com/sites/sections/58253722-b6e5-40c4-b1e0-ee513061c7f9) | An engineering write-up: category label, title, honest intro paragraph, then a technical visual | Write-up tone and a category, title, intro, visual order | Glow effects and the dark gradient visual | Each project page opens this way |
| 11 | [Tailscale: case study](https://mobbin.com/sites/sections/84f94fa1-216c-40e9-aa21-d4b6e8039f5b) | Title and tags first, then the body beside a narrow metadata column (Company, Website, Industry) | A sticky metadata column beside the body | Logo-centric hero | Project pages show Category, Stack and Links in a side column |
| 12 | [GitHub ReadME Project: profile hero](https://mobbin.com/sites/sections/10928b8e-852d-4424-b248-8028e8ff92d5) | A mono byline (`NAME // @HANDLE`) above a large display headline | The mono byline above the display headline | Pixel-image decorations | The hero opens with `MALLIKARJUN DESHMUKH // AI & ML` |
| 13 | [Vercel: feature labels](https://mobbin.com/sites/sections/2c78e955-6048-40ea-880c-031dbae553b1) | Small mono uppercase labels with an icon above short body copy | Mono eyebrow labels | n/a | Used for every section label |

Patterns I chose not to use: Framer/Bento style 3D blobs and bento grids, which read as templates; big
stats rows like Customer.io's, because there are no real metrics to show; and testimonial blocks.

## 2. Direction: "Field notebook"

The site should read like an engineer's lab notebook. Ink sits on warm paper, hairline rules carry the
structure, mono annotations act as margin notes, and the technical drawings are honest and labelled as
sketches. The approach suits an early-career engineer with three projects. It puts the work and the
reasoning first, avoids chrome that would make the portfolio feel thin, and ties back to the flagship
project's agricultural, hands-on hardware subject.

### Colour

| Token | Value | Use |
|---|---|---|
| `paper` | `#F3F1EB` | Page background |
| `paper-2` | `#EAE7DE` | Visual panels, subtle fills |
| `ink` | `#17181A` | Text, primary buttons |
| `ink-2` | `#55575B` | Secondary text (6.4:1 on paper) |
| `ink-3` | `#646569` | Mono labels (5.1:1 on paper) |
| `rule` | `#D6D2C7` | Hairlines |
| `accent` | `#A8322A` | Pomegranate red, used sparingly: detection boxes, focus ring, link hover (5.9:1 on paper) |
| `leaf` | `#3F5B3A` | Used only inside illustrations |

There are no gradients, no glows, no glass effects, and no dark mode, because the site is meant to look
like a printed notebook.

### Typography

- **Display:** Newsreader, an optical-size serif, at weight 400 with tight tracking. It gives the
  headlines a human, editorial voice.
- **Body:** Geist, 16–18px, line-height 1.6.
- **Labels and metadata:** Geist Mono at 12px, uppercase, tracking 0.08em.
- **Scale:** 12 / 14 / 16 / 18 / 22 / 28 / 40 / 56–76 (the hero uses `clamp()`).

### Spacing and layout

- 4px base unit. Sections use `py-24` (`py-32` on desktop) and start on a hairline rule.
- Content width is capped at 1200px, with 20px gutters on mobile and 40px on desktop.
- 12-column grid. Section labels sit in columns 1–3 and content in columns 4–12, like a notebook margin.

### Navigation

- Sticky top bar: the name on the left; Projects, About and Contact plus a **Resume** button on the
  right. Home is the name link.
- On mobile the links collapse into a menu button that opens a full-width sheet. The sheet has
  `aria-expanded`, closes on Escape and on link click, and traps nothing.

### Hero

- Left column: mono byline, the serif headline from the brief, supporting text, the **Explore Projects**
  (primary) and **Download Resume** (secondary) buttons, then a row of LinkedIn and email links. GitHub
  appears only once a URL is added.
- Right column: Mallikarjun's photograph, framed as a camera **viewfinder**.
  - Fixed ink crop marks sit outside a 4:5 photo with a 3px radius. Below 768px the photo switches to
    a top-aligned 4:3 crop.
  - A thin face-detection bracket with a red `MALLIKARJUN` tag ties the portrait to the
    computer-vision work.
  - A mono caption reads `FIG. 01` and `PYTHON · ML · COMPUTER VISION`.
  - On fine pointers the photo tilts up to about 2–3° toward the cursor, with a parallax shift of up to
    7px, and eases back when the pointer leaves. Touch devices and reduced-motion users get the
    static composition.
  - On load, the text rises in a 60ms stagger, the photo unveils, the bracket draws in and the tag
    fades in. Each of these runs once, in CSS only.
  - Portrait references (Mobbin): [Slack leadership bio](https://mobbin.com/sites/sections/1bafeb86-728a-425b-aa78-c5e680e7f640)
    for the calm text-beside-portrait balance;
    [Face Formula About](https://mobbin.com/sites/sections/7446404d-31fb-4f96-9f65-2a8752d7abf6) for a
    mono caption attached to an editorial photo;
    [Freshman](https://mobbin.com/sites/sections/cc46fe95-d2fb-46a6-927a-96c9bc6d5ecc) for letting the
    type lead while the photo supports it.
  - The red sweater in the photo echoes the pomegranate accent, so no colour treatment is applied.
- The illustrative inference-frame sketch that used to sit here now appears only on the Smart Sprayer
  project page.

### Projects

- `01` Sprayer at full width; `02` and `03` share a two-column row.
- Each item has an illustrative SVG preview on a `paper-2` panel, a mono index and category, a serif
  title, a one-line description, the stack as plain mono text separated by "·", and a "Read case study"
  link.
- Hover: the preview shifts 4px and the arrow nudges. Focus-visible gives the whole card a ring.

### Project detail pages

- Back link, mono category line, serif title, intro paragraph, then a large illustrative visual.
- A two-column body. The left column is sticky and holds Category, Stack, Links and Status. The right
  column has the sections Overview, Problem, Objective, My contribution, Technical approach (numbered
  steps), and Outcome & learnings.
- A "Next project" link at the bottom.
- Every visual is captioned "Illustrative diagram, not a screenshot of the actual system."

### Interactions and motion

- Sections below the fold fade up 12px once on entry, using a small IntersectionObserver component
  (`components/reveal.tsx`) with a CSS transition of 0.5s ease-out. Content is server-rendered
  visible, so nothing is hidden if JavaScript fails.
- Hero detection boxes draw in once and a scan line passes once (pure CSS).
- Any other motion is a response to hover or focus.
- `prefers-reduced-motion` turns all of this off in CSS.
- Motion for React was tried and removed. It rendered hidden content into the server HTML, and the
  site needs no more than a CSS transition.

### Mobile

- One column. Section labels sit above the content rather than in the margin.
- The hero visual moves below the text, buttons go full width, and project previews stack.
- The metadata column on detail pages becomes an inline block above the body.

## 3. Revision: removing template tells (2026-10-18)

A review of the live site against Mobbin found patterns that read as "AI-generated portfolio".
The [Lovable](https://mobbin.com/screens/d9550298-d9ea-4821-94d8-8e31f15f94e1) and
[Bolt.new](https://mobbin.com/screens/87eea851-37be-4b83-b3d2-f11adbe23b27) results on Mobbin show
what those builders produce: "Selected Work" eyebrows, ghost "01" numbers, category pills and icon
grids. Sites made by people, such as
[Locomotive's project index](https://mobbin.com/sites/sections/280c1a2d-41d4-4495-a4bd-816763c93ad3),
[Polywork](https://mobbin.com/screens/f8d0e856-762c-4287-9178-34e7933d7b59), and the write-ups from
[Linear](https://mobbin.com/sites/sections/80c656f5-2d5d-494c-bbe6-64b63f78ff9b) and
[Tailscale](https://mobbin.com/sites/sections/2aa17c2a-b721-440c-8fe0-83544d7afdd0), use
sentence-case headings, plain lists and prose.

Changes:

- Uppercase mono labels are gone from the UI. Section labels became sentence-case serif headings, and
  categories, captions, contact rows and the project sidebar now use plain text. Mono remains only
  inside the technical diagrams.
- Numbering is removed: no 01/02/03 on projects or skills, and no "Next project · 02". Pipeline
  steps use a plain ordered list.
- The hero byline "NAME // ROLE" became "Hi, I'm Mallikarjun Deshmukh.", and the "FIG. 01" caption
  is gone.
- The filler sentence under "Projects" is removed. Cards show a sentence-case kind, the title, the
  summary, the stack as plain text, and "View project".
- The project pages had six sections (Overview, Problem, Objective, My contribution, Technical
  approach, Outcome & learnings). They now have four: Overview, What I did, How it works and Result.
  The duplicate objective text and the generic "learnings", which didn't come from the resume, are
  removed.
- Skills are rows (group, then list) instead of a grid of five numbered cards. Certifications sit
  under Education instead of having their own section. Contact leads with the email address.
- About is rewritten in plain first person, with no filler sentence.
