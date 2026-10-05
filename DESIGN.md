---
name: T7 System
colors:
  primary: "#1a2e4a"
  primary-light: "#243b5e"
  primary-dark: "#0f1d30"
  secondary: "#d4a017"
  secondary-light: "#e8c547"
  secondary-dark: "#b8860b"
  surface: "#ffffff"
  surface-dim: "#f8f9fa"
  surface-container: "#f1f3f5"
  on-surface: "#343a40"
  on-surface-variant: "#495057"
  on-surface-muted: "#868e96"
  outline: "#dee2e6"
  outline-variant: "#ced4da"
  inverse-surface: "#1a2e4a"
  inverse-on-surface: "#ffffff"
  error: "#dc3545"
  success: "#28a745"
  background: "#ffffff"
  on-background: "#343a40"
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: "800"
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: "800"
    lineHeight: 1.2
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: "800"
    lineHeight: 1.2
  h3:
    fontFamily: Inter
    fontSize: 1.2rem
    fontWeight: "700"
    lineHeight: 1.2
  body-lg:
    fontFamily: Inter
    fontSize: 1.1rem
    fontWeight: "400"
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "400"
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.9rem
    fontWeight: "400"
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.85rem
    fontWeight: "700"
    lineHeight: 1
    letterSpacing: 3px
  caption:
    fontFamily: Inter
    fontSize: 0.8rem
    fontWeight: "400"
    lineHeight: 1.4
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: "700"
    lineHeight: 1
    letterSpacing: 1px
    textTransform: uppercase
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 20px
  lg: 20px
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  card-gap: 24px
  section-margin: 100px
  card-padding: 32px
  card-padding-sm: 28px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    borderColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    fontWeight: "600"
    rounded: "{rounded.sm}"
    padding: 14px 32px
    border: 2px solid
    transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)"
  button-primary-hover:
    backgroundColor: "{colors.secondary-light}"
    borderColor: "{colors.secondary-light}"
    transform: "translateY(-2px)"
    boxShadow: "0 4px 20px rgba(212, 160, 23, 0.4)"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.inverse-on-surface}"
    borderColor: rgba(255,255,255,0.3)
    rounded: "{rounded.sm}"
  button-outline-hover:
    backgroundColor: rgba(255,255,255,0.1)
    borderColor: rgba(255,255,255,0.6)
  nav-link:
    color: rgba(255,255,255,0.7)
    padding: 8px 16px
    rounded: "{rounded.sm}"
    fontSize: 0.9rem
    fontWeight: "500"
  nav-link-hover:
    color: "{colors.inverse-on-surface}"
    backgroundColor: rgba(255,255,255,0.1)
  service-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.outline}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.card-padding}"
    transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)"
  service-card-hover:
    borderColor: "{colors.secondary}"
    transform: "translateY(-4px)"
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
  portfolio-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.DEFAULT}"
    overflow: hidden
    borderColor: "{colors.outline}"
  portfolio-card-hover:
    transform: "translateY(-4px)"
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.outline-variant}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    fontSize: 0.95rem
  input-field-focus:
    borderColor: "{colors.secondary}"
    boxShadow: "0 0 0 3px rgba(212, 160, 23, 0.15)"
  form-container:
    backgroundColor: "{colors.surface-dim}"
    padding: 36px
    rounded: "{rounded.DEFAULT}"
    borderColor: "{colors.outline}"
  hero-section:
    backgroundColor: "{colors.primary}"
    minHeight: 100vh
  hero-gradient:
    background: "radial-gradient(ellipse at 80% 50%, rgba(212, 160, 23, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(212, 160, 23, 0.08) 0%, transparent 40%), linear-gradient(135deg, #0f1d30 0%, #1a2e4a 50%, #243b5e 100%)"
  team-card:
    backgroundColor: "linear-gradient(135deg, #1a2e4a, #243b5e)"
    rounded: 20px
    padding: 60px 48px
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
  footer:
    backgroundColor: "{colors.primary-dark}"
    padding: 48px 0
---

## Brand & Style

T7 System is a technology company focused on custom software, process automation, and system integrations for Brazilian businesses. The visual identity communicates **institutional trust, technical precision, and premium positioning** — a "Navy & Gold" language that signals authority without excess.

The aesthetic is corporate-solid: no glassmorphism, no gradients-on-gradients, no ethereal floats. Elements sit firmly on clear surfaces. Gold acts as the singular accent — it drives every call-to-action and brand signature. Navy grounds the composition with weight and depth. The palette is deliberately constrained to force visual hierarchy through color scarcity.

## Colors

The system is built on a dual-identity foundation: **Navy** (#1a2e4a) for authority and depth, **Gold** (#d4a017) for interaction and brand signature. Everything else is neutral infrastructure.

- **Primary / Navy (#1a2e4a):** The dominant surface for hero sections, navigation, and footer. Three shades (dark #0f1d30, base #1a2e4a, light #243b5e) create depth through tonal steps rather than shadows.
- **Secondary / Gold (#d4a017):** The exclusive interaction color. Every CTA, every link highlight, every accent mark is gold. Three shades (dark #b8860b, base #d4a017, light #e8c547) allow for hover states. Gold on Navy yields maximum contrast and visual weight.
- **Neutrals:** A 10-step gray scale from #f8f9fa (50) to #212529 (900) provides surface layers, text hierarchy, and borders. #f8f9fa serves as the subtle page background; #343a40 is the default text color.
- **Interactive Gold Glow:** On hover, primary buttons emit `box-shadow: 0 4px 20px rgba(212, 160, 23, 0.4)` — a warm gold halo that confirms user intent.

## Typography

**Inter** is the sole typeface — selected for its tabular figures, excellent Portuguese diacritics, and weight range that supports the brand's "solid" personality without decorative distraction.

- **Display (4rem/800):** Hero headlines. Massive, tight-tracked, designed to anchor the viewport.
- **H2 (2rem/800):** Section titles in Navy. Heavy weight enforces content hierarchy.
- **Label (0.85rem/700, 3px tracking):** Uppercase section labels in Gold. The wide tracking and Gold color creates a "category marker" pattern — scanning for Gold labels orients users within long pages.
- **Body (1rem/400):** Standard reading text in #343a40 on white, or rgba(255,255,255,0.65) on Navy.
- **On Navy surfaces:** All text shifts to white or white-with-alpha. Body text uses `rgba(255,255,255,0.65)` for comfortable reading against the dark background.

## Layout & Spacing

An 8px unit grid governs all dimensions. The spacing system enforces a "spacious premium" feel — nothing crowds.

- **Container:** Max-width 1200px, centered, 24px horizontal padding.
- **Sections:** 100px vertical padding. This generous spacing is deliberate — it prevents the "dense SaaS dashboard" feel.
- **Cards:** 32px internal padding, 24px grid gaps. Borders are 1px solid gray-200; on hover, border shifts to Gold + 4px upward translate.
- **Responsive breakpoints:** 968px (2-col grid), 768px (mobile nav + single column), 480px (compact stats).

## Elevation & Depth

Elevation is minimal and functional. No frosted glass, no layered transparency.

- **Level 0 (Flat):** Default card state. 1px border, no shadow.
- **Level 1 (Hover):** `translateY(-4px)` + `shadow-lg` + Gold border. This is the only elevation event and it's reserved for interactive cards.
- **Level 2 (Navbar):** Scrolled navbar uses `backdrop-filter: blur(12px)` + `rgba(26, 46, 74, 0.95)` + `shadow-md`. The single blur in the entire system.
- **Level 3 (Team card):** `shadow-xl` on the gradient navy card. Decorative, not interactive.

## Shapes

Rounded corners are moderate and consistent. The language is "approachable corporate" — not sharp (enterprise), not pill-shaped (consumer).

- **Cards:** 12px (`radius DEFAULT`). Clean rectangles with softened edges.
- **Buttons:** 8px (`radius-sm`). Slightly tighter than cards to signal "actionable."
- **Tech tags / Portfolio tags:** 20px (pill shape). Small enough to be decorative, round enough to be scannable.
- **Form containers:** 12px, matching cards.

## Components

### Navigation

Fixed top navbar, transparent on hero, transitions to Navy with blur on scroll. Logo is "T7" where "T" is Gold and "7" is White. CTA button is Gold-on-Navy with 600 weight.

### Hero

Full-viewport Navy section with radial Gold gradient accents (15% and 8% opacity). Gold label → White title → Muted white subtitle → Gold CTA. The supporting row highlights qualitative capabilities in Gold text + muted white labels.

### Service Cards

White background, gray-200 border. On hover: Gold border, -4px translate, shadow-lg. Icon at 2rem gold-colored. Title in Navy, description in gray-600.

### Portfolio Cards

White background with 200px Navy-gradient thumbnail. Each project variant uses a unique gradient direction (contabilidade: blue-shift, os: green-shift, atos: purple-shift, nfe: warm-shift). Gold decorative circle in corner. Below: tag in Gold uppercase, title in Navy, description in gray-600, tech stack as pill badges in gray-100.

### Contact Form

Gray-50 background, gray-200 border, 36px padding. Input focus: Gold border + `0 0 0 3px rgba(212, 160, 23, 0.15)` ring.

### Footer

Navy-dark background. Links in `rgba(255,255,255,0.5)`, hover to Gold. Copyright in `rgba(255,255,255,0.3)`. Minimal, branded.
