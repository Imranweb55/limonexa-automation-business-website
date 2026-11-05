# Limonexa — AI Image Prompts

Every placeholder image on the website, with a ready-to-paste AI prompt, the page where it appears, and the exact
folder and file name to save it as.

## How to use this file

1. Copy the **Global style block** below and paste it **before** every prompt (or save it as your tool's style / preset).
2. Copy the image's own prompt after it. Set the **aspect ratio** shown in the entry.
3. Generate, pick the best result, then export / convert to **WebP** (or JPG), under about 300 KB
   (free converter: https://squoosh.app). Resize to the size shown if your tool allows.
4. Save the file in the **folder shown**, with the **exact file name** shown (extension can be `.webp`, `.jpg`,
   `.jpeg`, `.png` or `.avif`).
5. Refresh the browser. The placeholder is replaced automatically. **No code change is needed.**

Works with Midjourney, DALL·E / ChatGPT, Adobe Firefly, Leonardo, Ideogram, Stable Diffusion and similar tools.

### Where the routes are

The website uses hash routes. Open them in the browser like this:

| Page | Address while running locally |
|---|---|
| Home | `http://localhost:5173/#home` |
| Services → AI Automation (and others) | `#services/ai`, `#services/web`, `#services/custom`, `#services/cloud`, `#services/consulting` |
| Solutions | `#solutions/workflow`, `#solutions/data`, `#solutions/assistants`, `#solutions/process`, `#solutions/growth` |
| Industries | `#industries/manufacturing`, `#industries/healthcare`, `#industries/finance`, `#industries/retail`, `#industries/education` |
| Resources | `#resources/blog`, `#resources/cases`, `#resources/guides`, `#resources/faqs` |
| About | `#about` |
| Contact | `#contact` |

(The Services, Solutions, Industries and Resources pages are also reachable by hovering the matching navbar tab and
clicking a sub-item.)

---

## Where to put the downloaded image and which line to change

### Method A — rename the file (recommended, no code change)

1. Save the downloaded image in the **folder** shown for it (see the table below).
2. Rename it to the **exact file name** shown, for example `about-main.webp`.
3. Refresh the browser. Done. The website scans these six folders automatically and swaps the placeholder:
   `src/assets/images/home/`, `services/`, `solutions/`, `industries/`, `resources/`, `contact/`.

### Method B — keep your own file name and change one line

Use this if you want to keep a different file name, for example `my-office-photo.jpg`.

1. Save the file in the **same folder** listed for that image (it must be one of the six folders above).
2. Open the **code file** listed below and go to the **line** shown.
3. Replace the **keyword** (the text inside the quotes after `name=`) with your **file name without the extension**.
   Example: the file is `my-office-photo.jpg`, so use `my-office-photo`.
4. Save and refresh.

Rules:
- Do **not** include the extension (`.jpg`, `.webp`) in the keyword.
- Every image file name must be **unique across all six folders** (two folders cannot both contain `photo.jpg`).
- Only the text inside the quotes changes. Leave `<ImagePlaceholder`, `className` and everything else exactly as it is.

#### Images with a single, fixed line (easy for Method B)

Line numbers are for the current files. If you edit a file and the numbers shift, search for the keyword instead.

| Image (default name) | Folder | Code file | Line | Keyword to replace |
|---|---|---|---|---|
| `about-main` — About page photo | `home` | `src/components/Home/sections/AboutIntro.jsx` | 35 | `name="about-main"` → `name="YOUR-FILE-NAME"` |
| `workflow-bg` — Solutions → Workflow background | `home` | `src/components/Home/sections/WorkflowShowcase.jsx` | 20 | `name="workflow-bg"` → `name="YOUR-FILE-NAME"` |
| `case-study` — Resources → Case Studies featured photo | `home` | `src/components/Home/sections/CaseStudy.jsx` | 11 | `name="case-study"` → `name="YOUR-FILE-NAME"` |
| `testimonial-1` — Home client photo 1 | `home` | `src/components/Home/sections/Testimonials.jsx` | 7 | `image: "testimonial-1"` → `image: "YOUR-FILE-NAME"` |
| `testimonial-2` — Home client photo 2 | `home` | `src/components/Home/sections/Testimonials.jsx` | 8 | `image: "testimonial-2"` → `image: "YOUR-FILE-NAME"` |
| `testimonial-3` — Home client photo 3 | `home` | `src/components/Home/sections/Testimonials.jsx` | 9 | `image: "testimonial-3"` → `image: "YOUR-FILE-NAME"` |
| `res-blog-featured` — Blog featured article | `resources` | `src/components/Resources/BlogFeatured.jsx` | 11 | `name="res-blog-featured"` → `name="YOUR-FILE-NAME"` |
| `contact-header-bg` — Contact header background | `contact` | `src/components/Contact/ContactHeader.jsx` | 9 | `name="contact-header-bg"` → `name="YOUR-FILE-NAME"` |
| `contact-office` — Contact office photo | `contact` | `src/components/Contact/OfficeMap.jsx` | 22 | `name="contact-office"` → `name="YOUR-FILE-NAME"` |
| `contact-map` — Contact map image | `contact` | `src/components/Contact/OfficeMap.jsx` | 25 | `name="contact-map"` → `name="YOUR-FILE-NAME"` |

**Example (About photo):** you downloaded `team-meeting.jpg` and saved it in `src/assets/images/home/`.
In `src/components/Home/sections/AboutIntro.jsx` line 35, change

```jsx
<ImagePlaceholder name="about-main" className="aspect-[4/5] rounded-sm" />
```

to

```jsx
<ImagePlaceholder name="team-meeting" className="aspect-[4/5] rounded-sm" />
```

#### Images that repeat in a group (Method A is simplest)

These are drawn in a loop, so one line produces many images and the name is built automatically
(for example `svc-ai-main`, `svc-web-main`). **Use Method A (rename the file)** for them.
The lines that build the names are listed so you know where they come from.

| Images | Folder | Code file | Line | Name pattern built here |
|---|---|---|---|---|
| Service hero backgrounds (`svc-ai-main`, `svc-web-main`, `svc-custom-main`, `svc-cloud-main`, `svc-consulting-main`) | `services` | `src/components/Services/ServiceOverview.jsx` | 87 | `` `svc-${tab.key}-main` `` |
| Client logos (`client-1..6`) | `services` | `src/components/Services/TrustedClients.jsx` | 18 | `` `client-${n}` `` |
| Solution main images (`sol-workflow-main`, `sol-data-main`, `sol-assistants-main`, `sol-process-main`, `sol-growth-main`) | `solutions` | `src/components/Solutions/SolutionOverview.jsx` | 13 | `` `sol-${tab.key}-main` `` |
| Industry banners (`ind-<industry>-hero`) | `industries` | `src/components/Industries/IndustryHero.jsx` | 7 | `` `ind-${tab.key}-hero` `` |
| Industry cards (`ind-<industry>-1..3`) | `industries` | `src/components/Industries/IndustrySolutions.jsx` | 15 | `` `ind-${tab.key}-${i + 1}` `` |
| Blog article images (`res-blog-1..6`) | `resources` | `src/components/Resources/BlogGrid.jsx` | 15 | `` `res-blog-${i + 1}` `` |
| Case study cards (`res-case-1..3`) | `resources` | `src/components/Resources/CaseCards.jsx` | 15 | `` `res-case-${i + 1}` `` |
| Home industry tiles (`home-ind-manufacturing`, `-healthcare`, `-finance`, `-retail`, `-education`) | `home` | `src/components/Home/sections/IndustriesStrip.jsx` | 32 | `` `home-ind-${ind.key}` `` |
| Guide covers (`res-guide-1..4`) | `resources` | `src/components/Resources/GuidesGrid.jsx` | 12 | `` `res-guide-${i + 1}` `` |

**If you really want custom file names for a group** (Method B for a loop), replace the template string on that line with a lookup.
Example for the 5 service hero backgrounds, `src/components/Services/ServiceOverview.jsx` line 87:

```jsx
// before
<ImagePlaceholder name={`svc-${tab.key}-main`} overlay className="absolute inset-0 border-0" />

// after  (left side = the sub-service key, right side = YOUR file name without extension)
<ImagePlaceholder
  name={{ ai: "my-ai-photo", web: "my-web-photo", custom: "my-custom-photo", cloud: "my-cloud-photo", consulting: "my-consulting-photo" }[tab.key]}
  overlay
  className="absolute inset-0 border-0"
/>
```

The same idea works for the other loops: the keys are `ai, web, custom, cloud, consulting` (services), `workflow, data, assistants, process, growth`
(solutions) and `manufacturing, healthcare, finance, retail, education` (industries). For the numbered groups (`i + 1`),
use an array instead: `name={["my-photo-a", "my-photo-b", "my-photo-c"][i]}`.

#### Where the exact names and sizes are also listed

`src/components/Home/sections/shared/homeImages.js` holds the label and size shown inside every placeholder.
You do **not** need to edit it when you add an image.

---

## Global style block (paste before every prompt)

```
Premium corporate photography for a business automation and AI technology company. Realistic, natural, high-end editorial look,
shot on a full-frame camera, shallow depth of field, soft cinematic lighting. Cool, deep navy-blue and steel-blue colour
palette (navy #06192F, brand blue #0764C0) with subtle warm champagne-gold accents. Slightly dark, moody, sophisticated
mood with clean negative space. Modern, minimal, trustworthy, professional.
No text, no words, no letters, no logos, no watermarks, no signatures, no UI labels. No cartoon, no illustration, no 3D
render look, no clip-art, no neon, no oversaturated colours, no distorted hands or faces.
```

**Negative prompt (for tools that support one):**
`text, watermark, logo, cartoon, illustration, anime, 3d render, oversaturated, neon, blurry, distorted face, extra fingers, low quality, stock-photo cliché handshake`

**Tips**
- Dark overlays are added by the website on the full-width banners and backgrounds, so slightly dark images look best.
- Keep the focal subject away from the **left third** on wide banners (text sits on the left there).
- Real photos of your own office, team and clients are always better than AI for those items; the prompts below are provided as a fallback.

---

# 1. Home page images

Folder: `src/assets/images/home/`

### 1.1 `about-main`
- **Shown on:** About page (`#about`), first section "We build the systems that quietly run your business."
- **Save as:** `src/assets/images/home/about-main.webp`
- **Size / ratio:** 1200 × 1500 px, portrait 4:5
- **Prompt:**
  > A modern, bright-but-moody corporate workspace where two professionals collaborate over a laptop showing abstract data
  > dashboards, glass walls and city skyline blurred in the background, warm desk lamp glow against cool blue ambient light,
  > confident and focused atmosphere, portrait composition, subjects partially turned, no visible text on screens.

### 1.2 `workflow-bg`
- **Shown on:** Solutions → Workflow Automation (`#solutions/workflow`), full-width background behind the 5-step "Automation in action" diagram.
- **Save as:** `src/assets/images/home/workflow-bg.webp`
- **Size / ratio:** 1920 × 1080 px, 16:9
- **Prompt:**
  > Abstract dark navy background of softly glowing interconnected network nodes and fine thin lines forming a calm,
  > elegant data-flow pattern, very subtle blue and champagne-gold light points, deep depth of field blur, large empty
  > areas for overlaid content, premium technology feel, extremely clean, no text.

### 1.3 `case-study`
- **Shown on:** Resources → Case Studies (`#resources/cases`), featured case study "From 6 hours of daily admin to fully automated."
- **Save as:** `src/assets/images/home/case-study.webp`
- **Size / ratio:** 1400 × 1000 px, 7:5
- **Prompt:**
  > A small business team of three in a meeting room reviewing results on a large screen with abstract charts (no readable text),
  > relaxed satisfied expressions, natural window light, modern minimal office, shallow depth of field, documentary feel.

### 1.4–1.6 `testimonial-1`, `testimonial-2`, `testimonial-3`
- **Shown on:** Home (`#home`), "Trusted by teams who value their time" client voices. Round portrait crops.
- **Save as:** `src/assets/images/home/testimonial-1.webp`, `testimonial-2.webp`, `testimonial-3.webp`
- **Size / ratio:** 400 × 400 px, 1:1 (face centred, shoulders visible)
- **Prompts (one each):**
  > 1) Professional headshot of a confident man in his 40s, business-casual blazer, neutral dark-blue gradient background,
  > soft studio key light, friendly natural smile, looking at camera.
  >
  > 2) Professional headshot of a woman in her 30s, smart business attire, neutral soft-grey and navy background,
  > soft studio light, warm approachable expression, looking at camera.
  >
  > 3) Professional headshot of a man in his 50s with short grey hair, formal shirt without tie, neutral dark background,
  > soft studio light, calm assured expression, looking at camera.
- **Note:** these are illustrative. For real testimonials use the real client's photo with permission.

### 1.7 `home-ind-manufacturing`, `home-ind-healthcare`, `home-ind-finance`, `home-ind-retail`, `home-ind-education`
- **Shown on:** Home (`#home`), "Industries we serve" tiles. Each tile links to its Industries page.
- **Save as:** `src/assets/images/home/home-ind-<name>.webp`
- **Size / ratio:** 900 × 1200 px, 3:4 portrait. A dark gradient covers the bottom, so keep the lower third calm.
- **Prompts (one each):**
  > manufacturing: Clean modern factory floor with a robotic arm and a tidy production line, cool blue light with warm highlights, wide portrait composition, no people in the foreground, no text.
  >
  > healthcare: Bright modern clinic corridor with soft daylight, a doctor in a white coat blurred in the distance, calm trustworthy mood, no readable text.
  >
  > finance: Glass towers of a financial district at dusk looking upward, deep navy sky with warm window lights, premium and secure feel, no text.
  >
  > retail: A stylish boutique counter with neatly packed parcels and a tablet, soft warm light, shallow depth of field, no brand logos or text.
  >
  > education: A modern university library with tall windows and rows of desks in golden-hour light, calm and aspirational, no people in focus, no text.

---

# 2. Services page images

Folder: `src/assets/images/services/`

Each sub-service has one **hero background image**, shown faintly behind the introduction under a dark overlay. The live workflow panel, numbers, steps, capability cards, comparison, tool list and FAQ are built in code and need no images. Client logos appear on the AI Automation tab only.

### 2.1 Hero backgrounds (1920 × 1080 px, 16:9, dark and abstract, no people or text in the centre)

| File | Page / route | Prompt |
|---|---|---|
| `svc-ai-main` | Services → AI Automation `#services/ai` | A sleek workspace with a large monitor showing an abstract glowing AI workflow of connected cards and lines (no readable text), a professional's hands on the keyboard in the foreground, cool blue light with subtle gold highlights, futuristic yet realistic. |
| `svc-web-main` | Services → Web & App Development `#services/web` | A designer's desk with a laptop and a smartphone showing a clean modern website interface (abstract, no readable text), a stylus and notebook nearby, soft daylight, tidy minimal workspace, shallow depth of field. |
| `svc-custom-main` | Services → Custom Solutions `#services/custom` | A developer's focused hands on a keyboard with code-like abstract blurred screens in a dim office, warm lamp light against cool blue monitors, craft-and-precision mood. |
| `svc-cloud-main` | Services → Cloud & Integration `#services/cloud` | A modern, clean data-centre corridor with rows of server racks and soft blue indicator lights receding into the distance, symmetrical composition, subtle cloud-like light haze, premium and secure feel. |
| `svc-consulting-main` | Services → Consulting & Strategy `#services/consulting` | A strategy session: two consultants at a glass whiteboard sketching abstract process flows (no readable words) with a client, bright modern boardroom, natural light. |

### 2.2 Client logos — `client-1` … `client-6`
- **Shown on:** Services → AI Automation (`#services/ai`), "Trusted by growing businesses" strip. This is the only place the strip appears.
- **Save as:** `src/assets/images/services/client-1.png` … `client-6.png`
- **Size:** 400 × 160 px, **transparent PNG**, logo centred.
- **Do not generate these with AI.** Use your real clients' actual logos (with their permission). If you have none yet, leave the placeholders in place.

---

# 3. Solutions page images

Folder: `src/assets/images/solutions/`
Main image for each solution, shown on the **left** of its introduction (1200 × 900 px, 4:3).

| File | Page / route | Prompt |
|---|---|---|
| `sol-workflow-main` | Solutions → Workflow Automation `#solutions/workflow` | An elegant top-down view of a desk with a tablet showing an abstract flowchart of connected rounded boxes and arrows (no readable text), a coffee cup and notebook, cool blue light, tidy and precise. |
| `sol-data-main` | Solutions → Data & Analytics `#solutions/data` | A wide monitor displaying a clean, abstract analytics dashboard with line and bar charts in blue and gold (no readable text), analyst's silhouette in the foreground, dark room, glowing screen. |
| `sol-assistants-main` | Solutions → AI Assistants `#solutions/assistants` | A customer-support professional with a headset beside a screen showing an abstract chat conversation (blank bubbles, no text), calm modern call-centre, soft blue light. |
| `sol-process-main` | Solutions → Business Process Automation `#solutions/process` | A modern office with a team reviewing approvals on tablets while documents move digitally on a large screen (abstract, no text), organised and efficient atmosphere. |
| `sol-growth-main` | Solutions → Growth & Optimization `#solutions/growth` | A team planning around a glass table with an abstract upward-trending graph on a wall screen (no text), sunrise light through the window, optimistic but professional mood. |

---

# 4. Industries page images

Folder: `src/assets/images/industries/`

### 4.1 Hero banners (1920 × 900 px, wide ~2:1)
Shown as the full-width banner at the top of each industry page. Keep the subject toward the **right**; the text sits on the left.

| File | Page / route | Prompt |
|---|---|---|
| `ind-manufacturing-hero` | Industries → Manufacturing `#industries/manufacturing` | A clean, modern smart-factory floor with robotic arms assembling parts on a production line, blue ambient lighting, polished floor reflections, wide cinematic composition with open space on the left. |
| `ind-healthcare-hero` | Industries → Healthcare `#industries/healthcare` | A bright modern clinic corridor, a doctor in a white coat reviewing a tablet in soft focus at the right, clean white and blue tones, calm reassuring mood, open space on the left. |
| `ind-finance-hero` | Industries → Finance & Banking `#industries/finance` | A city financial district at dusk, glass towers reflecting deep blue sky and warm window lights, wide cinematic view, premium and secure feel, open sky on the left. |
| `ind-retail-hero` | Industries → Retail & E-commerce `#industries/retail` | A modern fulfilment warehouse with neatly stacked parcels on shelving and a worker scanning a package, warm and cool lighting mix, wide composition, open space on the left. |
| `ind-education-hero` | Industries → Education `#industries/education` | A modern university campus library or lecture hall with students studying in soft natural light, warm wood and cool blue tones, wide composition, open space on the left. |

### 4.2 Solution card images (1200 × 800 px, 3:2) — three per industry

| File | Card | Prompt |
|---|---|---|
| `ind-manufacturing-1` | Production tracking | A factory supervisor with a tablet looking at a production line, abstract dashboard on the tablet (no text). |
| `ind-manufacturing-2` | Inventory & supplier alerts | Neatly organised warehouse shelving with boxes and a handheld scanner in the foreground. |
| `ind-manufacturing-3` | Maintenance scheduling | A technician inspecting a machine with a tablet in hand, blue industrial lighting. |
| `ind-healthcare-1` | Booking & reminders | A smartphone showing an abstract appointment calendar (no text) held by a patient in a bright reception area. |
| `ind-healthcare-2` | Patient follow-up | A friendly doctor speaking with a patient in a calm consultation room, shallow depth of field. |
| `ind-healthcare-3` | Records & billing | A medical administrator at a clean desk with a monitor showing abstract records (no text) and organised folders. |
| `ind-finance-1` | KYC & document checks | Close-up of hands reviewing identity documents beside a laptop with a soft verification glow, desk in a bank office. |
| `ind-finance-2` | Loan & lead processing | A financial advisor meeting a client across a desk, tablet showing abstract charts, professional warm office. |
| `ind-finance-3` | Compliance reporting | A tidy analyst's desk with printed reports and a monitor showing abstract graphs (no text), cool lighting. |
| `ind-retail-1` | Order automation | A packed order box on a packing bench with a barcode scanner, bright e-commerce warehouse. |
| `ind-retail-2` | Live stock sync | Rows of well-organised product shelves in a modern retail stockroom with a tablet inventory check. |
| `ind-retail-3` | Customer chat bots | A smiling shopper using a smartphone with an abstract chat window (blank bubbles, no text) in a boutique store. |
| `ind-education-1` | Admissions assistant | A friendly admissions desk at a college with a staff member helping a prospective student, bright and welcoming. |
| `ind-education-2` | Fee reminders | A parent using a smartphone at home with a calm, abstract payment-confirmation screen (no text). |
| `ind-education-3` | Attendance & results | A teacher reviewing results on a tablet in a classroom with students softly blurred behind. |

---

# 5. Resources page images

Folder: `src/assets/images/resources/`

### 5.1 Blog — `#resources/blog`

| File | Where | Size / ratio | Prompt |
|---|---|---|---|
| `res-blog-featured` | Large featured article (left) | 1400 × 800, 7:4 | A wide, atmospheric shot of a modern team workspace with an abstract workflow diagram on a large wall screen (no text) and people collaborating, cool blue tones with warm accents. |
| `res-blog-1` | Article: WhatsApp automation | 1200 × 800, 3:2 | A smartphone in hand showing an abstract green-and-blue chat interface (blank bubbles, no text), blurred office behind. |
| `res-blog-2` | Article: Connect your CRM | 1200 × 800, 3:2 | A laptop with an abstract customer-relationship dashboard of cards and graphs (no text), clean desk, cool light. |
| `res-blog-3` | Article: AI assistants for support | 1200 × 800, 3:2 | A support agent with a headset and a monitor showing an abstract chat assistant window (no text), calm modern office. |
| `res-blog-4` | Article: Invoices and payment reminders | 1200 × 800, 3:2 | A neat desk with invoices, a calculator and a laptop, soft natural light, accounting mood. |
| `res-blog-5` | Article: ROI of automation | 1200 × 800, 3:2 | A hand pointing at an abstract rising bar chart on a tablet (no text), clean minimalist desk, optimistic mood. |
| `res-blog-6` | Article: Map a workflow | 1200 × 800, 3:2 | Sticky notes arranged as a process flow on a glass wall (blank notes, no text), a person stepping back to review, bright studio. |

### 5.2 Case studies — `#resources/cases`

The large featured case study uses `case-study` (see 1.3). The three cards below are 1200 × 800 px, 3:2.

| File | Card | Prompt |
|---|---|---|
| `res-case-1` | Real estate agency | A modern apartment building exterior at golden hour with a real-estate agent holding a tablet in the foreground, glass and warm light. |
| `res-case-2` | Healthcare clinic group | A bright modern clinic reception with a receptionist and a patient, calm blue-white palette, shallow depth of field. |
| `res-case-3` | E-commerce store | An organised e-commerce packing station with parcels, a laptop and a barcode scanner, bright warehouse light. |

### 5.3 Guides & ebooks — `#resources/guides`

Four portrait **cover** images, 800 × 1000 px, 4:5. AI tools struggle with text, so generate **text-free covers** and add the
titles yourself in Canva (https://www.canva.com) or Photoshop before saving.

| File | Guide | Prompt |
|---|---|---|
| `res-guide-1` | The Business Automation Starter Guide | A premium minimalist book cover background: deep navy gradient with fine gold geometric lines forming an abstract network, large empty area at the top for a title, subtle texture, no text. |
| `res-guide-2` | WhatsApp Automation Playbook | A premium minimalist book cover background: deep navy to teal gradient with a soft abstract chat-bubble outline pattern in gold lines, empty area for a title, no text. |
| `res-guide-3` | Choosing the Right CRM Workflow | A premium minimalist book cover background: navy with abstract connected flowchart nodes in blue and gold thin lines, empty area for a title, no text. |
| `res-guide-4` | AI Assistants for Customer Support | A premium minimalist book cover background: dark navy with a soft glowing abstract circuit-and-conversation pattern in blue with gold highlights, empty area for a title, no text. |

---

# 6. Contact page images

Folder: `src/assets/images/contact/`

| File | Where | Size / ratio | Prompt |
|---|---|---|---|
| `contact-header-bg` | Full-width header background at the top of `#contact` | 1920 × 700, wide ~2.7:1 | A softly blurred city skyline at dusk seen through floor-to-ceiling office windows, deep navy sky with warm window lights, large calm empty area, subtle depth, no people, no text. |
| `contact-office` | Office photo in the "Visit our office" section (`#contact`) | 1200 × 800, 3:2 | A welcoming modern office interior with a reception desk, a few desks softly blurred behind, warm wood and cool blue accents, natural light. **Replace with a real photo of your office when possible.** |
| `contact-map` | Large map image in the same section | 1400 × 600, wide ~2.3:1 | **Do not generate with AI.** Take a screenshot of your real location in Google Maps (zoom so your office is centred) and save it. If you want a decorative fallback: a minimal dark navy stylised city street map with thin blue road lines and one small gold location pin, no text. |

---

# Quick checklist (all files and where they go)

| Folder | Files |
|---|---|
| `src/assets/images/home/` | `about-main`, `workflow-bg`, `case-study`, `testimonial-1`, `testimonial-2`, `testimonial-3`, `home-ind-manufacturing`, `home-ind-healthcare`, `home-ind-finance`, `home-ind-retail`, `home-ind-education` |
| `src/assets/images/services/` | `svc-ai-main`, `svc-web-main`, `svc-custom-main`, `svc-cloud-main`, `svc-consulting-main`, `client-1..6` |
| `src/assets/images/solutions/` | `sol-workflow-main`, `sol-data-main`, `sol-assistants-main`, `sol-process-main`, `sol-growth-main` |
| `src/assets/images/industries/` | `ind-<manufacturing\|healthcare\|finance\|retail\|education>-hero` and `-1`, `-2`, `-3` for each |
| `src/assets/images/resources/` | `res-blog-featured`, `res-blog-1..6`, `res-case-1..3`, `res-guide-1..4` |
| `src/assets/images/contact/` | `contact-header-bg`, `contact-office`, `contact-map` |

**Not needed:** older slots from earlier designs (`service-*`, `industry-*`, `contact-bg` in `src/assets/images/home/`) are no longer
used by any page, so you can ignore them.

**Not images to generate:** the Hero background video and poster (`src/assets/videos/`) and the AI tool logos (`src/assets/AI-logos/`)
are already in the project.
