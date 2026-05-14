# Design System — Editorial Learning Landing Page (Agnostic & LLM-Oriented)

## 1. Design Philosophy

This design system represents a playful editorial landing page aesthetic combining:

- Flat illustration storytelling
- Soft educational/productivity atmosphere
- High contrast typography
- Organic hand-drawn decorative elements
- Structured card layouts
- Large editorial headlines
- Pastel backgrounds with vibrant accent colors
- Friendly startup/edtech/product marketing visual language

The system should feel:

- Human
- Approachable
- Creative
- Energetic
- Modern
- Lightweight
- Accessible
- Visually expressive without being noisy

---

# 2. Visual Identity

## Core Characteristics

| Attribute | Description |
|---|---|
| Tone | Friendly, educational, optimistic |
| Layout Style | Editorial + modular grid |
| Illustration Style | Flat vector with playful proportions |
| Typography | Bold geometric sans-serif |
| Density | Medium-low density |
| Spacing | Large breathing spaces |
| Contrast | Strong text contrast with soft surfaces |
| Motion Feel | Floating / organic / slightly imperfect |
| Decorative Language | Scribbles, doodles, highlights |

---

# 3. Color System

## Primary Palette

### Warm Sand Background
Used for hero sections.

```css
--color-sand-100: #E9BD69;
```

Characteristics:
- Warm
- Friendly
- Energetic
- Non-corporate

Usage:
- Hero backgrounds
- Highlight blocks
- Large section backgrounds

---

### Mint Surface
Used for secondary educational sections.

```css
--color-mint-100: #CFE4DA;
```

Usage:
- Feature sections
- CTA containers
- Soft cards

---

### Neutral Surface

```css
--color-neutral-50: #EEF0EF;
```

Usage:
- Main page background
- Alternating sections
- Large containers

---

## Accent Colors

### Orange Accent

```css
--color-orange-500: #F26A2E;
```

Usage:
- Buttons
- Highlight words
- Interactive emphasis
- Decorative shapes

---

### Deep Navy

```css
--color-navy-900: #0D1225;
```

Usage:
- Headlines
- Primary text
- Icons
- Contrast elements

---

### Electric Blue

```css
--color-blue-500: #3D7CFF;
```

Usage:
- Secondary CTAs
- Active states
- Pills
- Links

---

### Soft Purple

```css
--color-purple-400: #8A4D9E;
```

Usage:
- Illustration outlines
- Decorative details
- Accent strokes

---

### Highlight Green

```css
--color-green-300: #8AA676;
```

Usage:
- Text highlights
- Marker effects
- Emphasis backgrounds

---

# 4. Typography System

## Typeface Characteristics

Typography should follow these principles:

- Geometric sans-serif
- Heavy weight headlines
- Rounded visual personality
- Tight optical alignment
- Strong readability
- Slight editorial compression

Suggested font categories:

- Geometric Grotesk
- Neo-grotesk
- Rounded grotesk

Potential font inspirations:

- Poppins
- Gilroy
- Circular
- Satoshi
- Plus Jakarta Sans
- General Sans

---

## Heading Styles

### Hero Heading

```css
font-size: 72px;
font-weight: 800;
line-height: 0.95;
letter-spacing: -0.04em;
```

Characteristics:
- Extremely bold
- Dense
- Compact
- Dominant visual hierarchy

---

### Section Heading

```css
font-size: 56px;
font-weight: 800;
line-height: 1;
letter-spacing: -0.03em;
```

---

### Card Heading

```css
font-size: 24px;
font-weight: 700;
line-height: 1.2;
```

---

### Body Text

```css
font-size: 16px;
font-weight: 400;
line-height: 1.7;
```

Characteristics:
- Spacious line-height
- Light density
- Airy readability

---

# 5. Layout System

## Global Structure

The page follows a:

- Vertical storytelling layout
- Alternating section rhythm
- Asymmetric editorial compositions
- Modular grid system

---

## Container Rules

### Main Container

```css
max-width: 1280px;
padding-inline: 48px;
margin-inline: auto;
```

---

## Section Spacing

```css
padding-block: 120px;
```

Mobile:

```css
padding-block: 72px;
```

---

## Grid System

### Desktop

```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 32px;
```

---

### Tablet

```css
grid-template-columns: repeat(6, 1fr);
gap: 24px;
```

---

### Mobile

```css
grid-template-columns: 1fr;
gap: 20px;
```

---

# 6. Hero Section Pattern

## Composition

Hero consists of:

| Element | Position |
|---|---|
| Navigation | Top horizontal |
| Headline block | Left |
| Illustration | Right |
| Decorative elements | Floating |
| CTA | Below copy |
| Badge/Pill | Near headline |

---

## Hero Layout Ratio

```css
content: 45%;
illustration: 55%;
```

---

## Visual Behavior

The illustration should:

- Overflow naturally
- Not feel constrained
- Interact with typography area
- Create directional movement

---

# 7. Component System

# 7.1 Navigation

## Structure

```text
[Links Left] [Logo Center] [Actions Right]
```

---

## Navigation Height

```css
height: 88px;
```

---

## Navigation Typography

```css
font-size: 14px;
font-weight: 500;
```

---

# 7.2 Buttons

## Primary Button

### Visual Characteristics

- Pill shape
- Strong color fill
- Soft shadow
- Medium-large padding
- Rounded organic feel

---

### Styles

```css
background: var(--color-orange-500);
color: white;
padding: 16px 28px;
border-radius: 999px;
font-weight: 600;
font-size: 15px;
```

---

### Shadow

```css
box-shadow: 0 6px 0 rgba(0,0,0,0.08);
```

---

## Secondary Button

```css
background: var(--color-blue-500);
color: white;
```

---

## Hover Behavior

```css
transform: translateY(-2px);
transition: 180ms ease;
```

---

# 7.3 Cards

## Card Characteristics

- Soft surface
- Thin border
- Light elevation
- Rounded corners
- Generous padding
- Minimal visual noise

---

## Card Style

```css
background: #F5ECD9;
border: 1px solid rgba(0,0,0,0.08);
border-radius: 8px;
padding: 32px;
```

---

## Card Layout

```text
[Icon]
[Title]
[Description]
[Action]
```

---

# 7.4 Statistic Blocks

## Characteristics

- Oversized number
- Minimal supporting text
- Strong hierarchy
- Center aligned

---

## Example Structure

```text
[10K+]
[Descriptor]
```

---

# 7.5 Highlighted Text Marker

## Visual Pattern

Text emphasis uses:

- Brush-like background
- Organic imperfect shape
- Contrasting color layer
- Offset positioning

---

## Styles

```css
position: relative;
```

Pseudo-element:

```css
::after {
  background: var(--color-green-300);
  border-radius: 14px;
  transform: rotate(-2deg);
}
```

---

# 7.6 Floating Pills

## Characteristics

- Rounded capsule
- Small label
- Floating offset
- Layered shadows

---

## Styles

```css
padding: 12px 20px;
border-radius: 999px;
background: #F7E7B5;
font-weight: 600;
```

---

# 8. Illustration System

## Style Characteristics

Illustrations should:

- Be flat vectors
- Use exaggerated body proportions
- Include thin outlines
- Mix geometric and organic forms
- Use limited color palette
- Include playful poses

---

## Outline Style

```css
stroke-width: 2px;
stroke-color: var(--color-purple-400);
```

---

## Illustration Palette

Allowed colors:

- Orange
- Yellow
- Purple
- Light blue
- Coral
- Mint
- White

Avoid:

- Realistic shading
- Gradients
- Hyper-detailing
- Dark realism

---

# 9. Decorative Language

## Decorative Elements

The page uses micro decorations extensively.

### Types

- Scribbles
- Hand-drawn arrows
- Marker circles
- Abstract lines
- Paint strokes
- Doodles
- Spark shapes

---

## Rules

Decorations should:

- Never overpower content
- Create movement
- Break rigidity
- Reinforce playfulness
- Sit near edges or whitespace

---

## Positioning

```css
position: absolute;
z-index: 0;
```

Main content:

```css
position: relative;
z-index: 2;
```

---

# 10. Section Architecture

## Section Pattern

Most sections follow:

```text
[Headline]
[Supporting Copy]
[CTA]
[Illustration or Cards]
```

---

## Alternating Rhythm

Sections alternate between:

| Pattern | Layout |
|---|---|
| A | Text left / visual right |
| B | Visual left / text right |
| C | Centered content |
| D | Grid cards |

This creates narrative movement.

---

# 11. CTA Strategy

## CTA Hierarchy

### Primary CTA

- Orange fill
- Strong visual dominance
- Used once per major section

---

### Secondary CTA

- Blue fill
- Lower hierarchy
- Used for exploration actions

---

## CTA Copy Style

Should be:

- Short
- Action-oriented
- Friendly
- 2–4 words maximum

Examples:

- Start now
- Explore more
- View details
- Join today

---

# 12. Responsive Behavior

# Mobile Rules

## Typography Scaling

### Hero

```css
font-size: 48px;
```

### Section

```css
font-size: 38px;
```

---

## Layout Collapse

Desktop asymmetry collapses into:

```text
[Text]
[Visual]
```

---

## Card Stack

Cards become:

```css
grid-template-columns: 1fr;
```

---

## Spacing Reduction

```css
padding-inline: 24px;
```

---

# 13. Accessibility

## Contrast Rules

- Headlines must maintain AA contrast
- Buttons must maintain visible hover states
- Decorative elements must never carry semantic meaning

---

## Typography Rules

Minimum body size:

```css
16px
```

Minimum touch targets:

```css
44px
```

---

# 14. Motion System

## Motion Personality

Motion should feel:

- Soft
- Floating
- Elastic
- Friendly
- Slightly playful

Avoid:

- Aggressive transitions
- High-speed movement
- Sharp mechanical easing

---

## Transition Timing

```css
transition: 220ms cubic-bezier(0.22, 1, 0.36, 1);
```

---

## Recommended Animations

| Component | Motion |
|---|---|
| Buttons | Lift on hover |
| Cards | Soft elevation |
| Illustrations | Floating idle |
| Decorations | Slight drift |
| Sections | Fade-up reveal |

---

# 15. Shadows & Elevation

## Elevation Strategy

Minimal but warm.

---

## Small Elevation

```css
box-shadow: 0 4px 12px rgba(0,0,0,0.06);
```

---

## Medium Elevation

```css
box-shadow: 0 12px 32px rgba(0,0,0,0.08);
```

---

# 16. Border Radius System

## Radius Scale

```css
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;
```

---

# 17. Iconography

## Icon Style

Icons should:

- Be outlined or minimally filled
- Feel hand-crafted
- Use rounded geometry
- Maintain low detail density

---

## Stroke

```css
stroke-width: 1.75px;
```

---

# 18. Content Density Rules

## Text Rules

- Short paragraphs
- Strong whitespace
- High readability
- One primary idea per block

---

## Layout Density

Avoid:

- Dense dashboards
- Data-heavy UI
- Complex enterprise structures
- Multi-level nested interfaces

Prioritize:

- Marketing clarity
- Storytelling
- Education
- Visual breathing room

---

# 19. Reusable Layout Templates

## Template A — Editorial Hero

```text
[Navigation]
[Large Headline + CTA]
[Illustration]
```

---

## Template B — Feature Grid

```text
[Section Intro]
[3-column cards]
```

---

## Template C — Split Narrative

```text
[Illustration]
[Headline + CTA]
```

---

## Template D — Community Showcase

```text
[Centered headline]
[Map/visual/statistics]
[CTA]
```

---

## Template E — App Download CTA

```text
[Centered card]
[Store buttons]
```

---

# 20. LLM Implementation Instructions

## If generating UI from this system:

Prioritize:

1. Large editorial headlines
2. Soft pastel surfaces
3. Strong whitespace
4. Organic decorations
5. Flat illustrations
6. Asymmetric layouts
7. Rounded interactive components
8. Minimal visual clutter
9. High readability
10. Story-driven section sequencing

---

## Never generate:

- Glassmorphism
- Dark cyberpunk aesthetics
- Enterprise dashboards
- Brutalist layouts
- Heavy gradients
- Neumorphism
- Hyper-realistic illustrations
- Dense tables
- Tiny typography
- Sharp rectangular UI

---

# 21. Frontend Engineering Recommendations

## Recommended Stack

- React
- Next.js
- TailwindCSS
- Framer Motion
- SVG illustrations

---

## Recommended Tailwind Tokens

```js
colors: {
  sand: '#E9BD69',
  mint: '#CFE4DA',
  navy: '#0D1225',
  orange: '#F26A2E',
  blue: '#3D7CFF',
  purple: '#8A4D9E',
  neutral: '#EEF0EF'
}
```

---

# 22. Design DNA Summary

This system combines:

- Editorial typography
- Flat educational illustrations
- Startup landing page composition
- Playful micro-decorations
- Warm pastel palette
- Friendly interaction patterns
- Large spacing systems
- Narrative-first UX

The final experience should feel:

- Inspiring
- Human-centered
- Creative
- Youthful
- Accessible
- Light
- Educational
- Visually memorable
- Emotionally welcoming

