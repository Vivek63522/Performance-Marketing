# Brand Website Design Specification for Next.js

**Reference preview:**
https://preview.themeforest.net/item/brand-technology-it-services-html-template/full_screen_preview/50851114\
**Reference product details:**
https://themeforest.net/item/brand-technology-it-services-html-template/50851114

## 1. Purpose

Rebuild the existing Brand technology and IT services landing page in Next.js while preserving its visual identity, layout hierarchy, spacing, typography, colors, imagery, responsive behavior, sliders, hover states, and custom cursor.

The implementation should be component-driven, accessible, responsive, and ready to extend into additional pages such as Services, About, Projects, Blog, Contact, Pricing, and Shop.

## 2. Design direction

- **Brand:** Brand
- **Category:** Technology, software, IT services, and digital solutions
- **Visual style:** Modern corporate technology website with strong editorial headings, large hero imagery, geometric overlays, rounded cards, and bright orange accent colors.
- **Overall tone:** Confident, technical, premium, clean, and conversion-focused.
- **Primary visual contrast:** White/light-gray content sections against dark navy/charcoal headings and orange actions.
- **Motion style:** Smooth, subtle, and purposeful. Use entrance reveals, carousel transitions, hover elevation, and a custom pointer without distracting from content.

## 3. Page shell

### 3.1 Global structure

The home page follows this order:

1. Top information bar
2. Main navigation header
3. Full-width hero slider
4. Services section
5. About/solution section
6. Why choose us section
7. Testimonials carousel
8. Additional service or capability sections
9. Footer
10. Floating back-to-top control

The header becomes sticky while scrolling. The page uses full-width sections with centered containers and generous vertical spacing.

### 3.2 Container

- Desktop max content width: approximately `1200px` to `1320px`
- Wide hero and header areas may use a fluid container
- Horizontal page padding:
  - Desktop: `30px` to `60px`
  - Tablet: `24px` to `32px`
  - Mobile: `16px` to `20px`
- Avoid horizontal overflow at every breakpoint.

## 4. Color system

Define these colors as CSS variables or Tailwind theme tokens:

```css
--brand-base: #ffaa17; /* primary orange */
--brand-secondary: #232429; /* dark charcoal/navy */
--brand-text-dark: #222429;
--brand-text: #686a6f;
--brand-text-gray: #999b9f;
--brand-gray: #f4f5f8;
--brand-white: #ffffff;
--brand-border: #e6e7eb;
```

### Usage

- Orange: primary buttons, active states, accent lines, icons, progress details, cursor ring
- Dark charcoal: header text, hero overlays, footer, headings, secondary buttons
- Light gray: alternating section backgrounds and card backgrounds
- White: main page background, cards, text on dark surfaces

## 5. Typography

Use the closest available Google or local font matching the original template. Typography must preserve the same visual weight and hierarchy.

Recommended fallback stack:

```css
font-family: "Arial", "Helvetica Neue", sans-serif;
```

Typography rules:

- Hero title: large, bold, compact line-height, responsive from approximately `48px` desktop to `34px` mobile
- Section title: bold, approximately `36px` to `48px` desktop
- Eyebrow/tagline: uppercase or title-case, orange accent, semibold
- Body text: `16px`, readable line-height around `1.7` to `1.9`
- Navigation: compact semibold labels
- Buttons: semibold, uppercase or title-case, clear letter spacing

Use `clamp()` for fluid heading sizes rather than fixed desktop-only values.

## 6. Header design

### 6.1 Top bar

- Full-width dark or light utility strip depending on the page variant
- Left side:
  - location icon and address
  - email link
- Right side:
  - phone number
  - social links for Facebook, X/Twitter, Pinterest, and Instagram/YouTube
- Hide or compress low-priority utility content on small screens.

### 6.2 Main navigation

- White background
- Brand logo on the left
- Horizontal navigation on desktop:
  - Demos
  - About
  - Services
  - Pages
  - Projects
  - Blog
  - Contact
- Right controls:
  - search
  - cart/shop link where applicable
  - highlighted CTA if present
  - mobile menu button
- Sticky header uses a subtle shadow or background transition.
- Mobile navigation opens as an off-canvas or full-width panel with nested menu support.

## 7. Hero slider

### 7.1 Layout

- Full viewport-width carousel immediately below the header
- Minimum hero height:
  - Desktop: approximately `680px` to `760px`
  - Tablet: approximately `600px`
  - Mobile: approximately `560px`
- Each slide contains:
  - full-bleed background image
  - dark translucent overlay where required for readability
  - centered content container
  - eyebrow: `IT Software Solution`
  - heading: `IT Software` followed by `Tech & Solutions`
  - two CTAs: `Discover More` and `Take Service`
  - decorative frame/shape image

### 7.2 Slider behavior

- Use Swiper or Embla Carousel in Next.js.
- Enable:
  - looping
  - autoplay around `7000ms`
  - smooth transition around `1000ms`
  - pagination dots
  - keyboard accessibility
  - touch/swipe support
- Pause autoplay on hover and focus.
- Respect `prefers-reduced-motion`.
- Render the first slide immediately to avoid layout shift.

### 7.3 Hero assets

Use the existing assets from:

- `assets/background/slider-1-1.jpg`
- `assets/background/slider-1-2.jpg`
- `assets/background/slider-1-3.jpg`
- `assets/shapes/frame-hero-2-1.png`

In Next.js, place public assets in `public/assets/...` and reference them as:

```tsx
backgroundImage: "url('/assets/background/slider-1-1.jpg')";
```

## 8. Buttons

Create a reusable `Button` component with variants:

- `base`: orange background, dark text
- `secondary`: dark background, white text
- `outline`: transparent background with dark/orange border
- `icon`: circular or square icon-only button

Button behavior:

- Rounded corners, not pill-shaped unless specifically used
- Minimum height around `48px`
- Horizontal padding around `24px` to `32px`
- Hover: darker/lighter background, slight upward movement, smooth `200ms` transition
- Focus-visible: clear orange outline

## 9. Section patterns

### 9.1 Section title

Reusable section heading pattern:

1. Small decorative orange/gray shape
2. Eyebrow label
3. Large heading
4. Optional supporting paragraph

### 9.2 Service cards

- Grid of cards with icon, title, description, and optional arrow link
- Desktop: 3 or 4 columns
- Tablet: 2 columns
- Mobile: 1 column
- Cards have generous padding, subtle border/shadow, and hover elevation
- Use orange icon backgrounds or orange icon accents

### 9.3 Image/content split sections

- Two-column desktop layout
- Image or illustration on one side
- Text, bullet points, metrics, or CTA on the other
- Stack image above content on mobile
- Decorative shapes may overlap the image but must not cause horizontal overflow

### 9.4 Testimonials

- Carousel cards on a light-gray or white background
- Five-star row
- Quote text
- Author avatar, name, and role
- Decorative quote mark and geometric SVG/shape
- Desktop: two visible cards where space allows
- Mobile: one visible card

## 10. Footer

- Dark charcoal background
- Brand/logo area
- Short company description
- Navigation columns
- Services or useful links
- Contact details
- Social icons
- Instagram/image strip if used
- Bottom copyright row
- Decorative footer shape and earth/illustration assets

## 11. Custom cursor

Implement only on devices that support hover:

```css
@media (hover: hover) and (pointer: fine) {
  /* custom cursor */
}
```

Cursor design:

- Outer ring: `25px`, orange border, fixed position
- Inner dot: `10px`, orange fill, approximately `0.3` opacity
- `pointer-events: none`
- Very high z-index
- Outer ring follows the pointer directly
- Inner dot follows the pointer directly
- Links and buttons add a hover class that enlarges or changes opacity
- On touch/mobile devices, use the native cursor and do not render the custom cursor
- Keep the native pointer available for keyboard and accessibility users

## 12. Responsive breakpoints

Use project-wide breakpoints approximately as follows:

```text
xs: 0-575px
sm: 576-767px
md: 768-991px
lg: 992-1199px
xl: 1200px+
```

Responsive requirements:

- Desktop navigation collapses below `992px`
- Hero title and spacing scale down smoothly
- Multi-column grids collapse progressively
- Decorative shapes are hidden or repositioned on narrow screens
- Buttons may stack vertically on mobile
- Topbar content may hide address/social details on mobile
- No section should exceed the viewport width

## 13. Next.js component architecture

Recommended structure:

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  layout/
    TopBar.tsx
    Header.tsx
    MobileNavigation.tsx
    Footer.tsx
  home/
    HeroSlider.tsx
    SectionHeading.tsx
    ServicesGrid.tsx
    AboutSection.tsx
    WhyChooseUs.tsx
    TestimonialsCarousel.tsx
  ui/
    Button.tsx
    Icon.tsx
    CustomCursor.tsx
    BackToTop.tsx
data/
  navigation.ts
  home.ts
public/
  assets/
```

Use Server Components by default. Mark only interactive components with `"use client"`:

- `HeroSlider`
- `TestimonialsCarousel`
- `MobileNavigation`
- `CustomCursor`
- `BackToTop`

## 14. Accessibility requirements

- Use semantic `header`, `nav`, `main`, `section`, and `footer`
- All images require meaningful `alt` text; decorative images use empty alt text
- All buttons and links must have visible focus states
- Carousel controls require accessible labels
- Do not rely on color alone to communicate state
- Support keyboard navigation
- Respect reduced-motion preferences
- Maintain readable contrast ratios
- Do not hide important content from screen readers

## 15. Image and asset migration

Copy the current project assets into the Next.js `public` directory:

```text
public/assets/about/
public/assets/background/
public/assets/blog/
public/assets/instagram/
public/assets/resources/
public/assets/services/
public/assets/shapes/
```

Use `next/image` for content images where possible. For full-bleed hero backgrounds, use CSS `background-image` or a positioned `Image` with `fill` and `object-fit: cover`.

Do not reference paths such as:

```text
/images/...
/vendors/...
assets/images/...
```

Use one consistent public path convention:

```text
/assets/...
```

## 16. Interaction and motion checklist

- Hero autoplay and pagination
- Testimonial carousel drag/swipe
- Sticky header on scroll
- Mobile navigation open/close
- Search panel open/close
- Hover state for every button, navigation link, card, and social icon
- Custom cursor hover and click states
- Back-to-top visibility after scrolling
- Section reveal animations
- Reduced-motion fallback

## 17. Implementation acceptance criteria

The Next.js result is complete when:

- The home page visually matches the existing Brand reference.
- Header, hero, sections, testimonials, footer, and spacing preserve the same hierarchy.
- Hero and testimonial sliders work on desktop, tablet, and mobile.
- All local assets load from `/public/assets`.
- No broken `/images`, `/vendors`, or `assets/images` paths remain.
- No horizontal scrolling occurs at any supported viewport.
- Custom cursor works only on fine-pointer devices.
- Keyboard navigation and focus states work.
- `npm run lint` and the production build pass.

## 18. Professional copy-ready implementation prompt

Copy the prompt below into a Next.js coding agent after providing this `design.md` file.

````text
You are a senior Next.js product engineer and UI implementation specialist.

Build a production-ready, pixel-accurate recreation of the Brand technology and IT services website described in the attached design.md file. Treat design.md as the source of truth for layout, visual styling, responsive behavior, interaction behavior, asset usage, accessibility, and acceptance criteria.

## Objective

Create the Brand home page in Next.js with a polished, responsive implementation that matches the supplied reference design. Do not create a generic SaaS landing page. Preserve the Brand visual hierarchy, spacing rhythm, typography scale, orange accent system, dark charcoal surfaces, decorative geometry, hero composition, card proportions, sliders, and footer structure.

## Technical requirements

- Use Next.js App Router and TypeScript.
- Use Server Components by default.
- Use `"use client"` only for components that require browser interaction.
- Use the existing project package manager and conventions.
- Reuse existing dependencies where possible.
- Use a typed data model for navigation items, hero slides, services, testimonials, footer links, and social links.
- Keep components small, composable, and easy to extend to additional pages.
- Do not introduce unnecessary state management or duplicate markup.
- Do not use `any` unless there is no type-safe alternative.
- Do not use inline SVG markup for icons when an existing icon library or project asset is appropriate.

## Required implementation sequence

1. Inspect the repository and existing assets before editing.
2. Confirm the existing Next.js structure, scripts, dependencies, and styling approach.
3. Copy or map the supplied Brand assets into `public/assets`.
4. Implement the global design tokens and typography.
5. Build the page shell: top bar, sticky header, navigation, mobile menu, main content, and footer.
6. Build the hero slider and verify it works before continuing.
7. Build the service, about, why-choose-us, capability, and testimonial sections.
8. Add custom cursor, search interaction, scroll behavior, hover states, and back-to-top behavior.
9. Test every responsive breakpoint and resolve layout overflow.
10. Run linting, type-checking, tests if available, and a production build.

## Page structure

Implement the home page in this exact order:

1. Utility top bar with location, email, phone, and social links.
2. Main sticky navigation with the Brand logo, desktop navigation, search control, optional cart control, CTA, and responsive mobile navigation.
3. Full-width hero slider.
4. Services grid.
5. About/technology solution split section.
6. Why Choose Us section with decorative imagery and feature/metric content.
7. Additional capability or service sections using the same visual language.
8. Testimonials carousel.
9. Dark multi-column footer with contact details, navigation, social links, image strip, and decorative assets.
10. Floating back-to-top control.

## Visual requirements

Use the following design tokens:

```css
--brand-base: #ffaa17;
--brand-secondary: #232429;
--brand-text-dark: #222429;
--brand-text: #686a6f;
--brand-text-gray: #999b9f;
--brand-gray: #f4f5f8;
--brand-white: #ffffff;
--brand-border: #e6e7eb;
````

The visual result must have:

- A premium corporate IT/software appearance.
- White and light-gray content sections.
- Dark charcoal headings, navigation details, and footer.
- Bright orange buttons, accents, active states, and cursor ring.
- Bold editorial headings with compact line height.
- Generous vertical whitespace and consistent container alignment.
- Rounded service and testimonial cards.
- Subtle borders, shadows, hover elevation, and smooth transitions.
- Geometric decorative shapes layered behind or beside content.
- No unintended horizontal scrolling.

## Hero slider

Use Swiper or Embla Carousel. The hero must:

- Be full width and approximately `680px` to `760px` tall on desktop.
- Scale fluidly on tablet and mobile.
- Use three slides with these assets:
  - `/assets/background/slider-1-1.jpg`
  - `/assets/background/slider-1-2.jpg`
  - `/assets/background/slider-1-3.jpg`
- Use `/assets/shapes/frame-hero-2-1.png` for the decorative frame.
- Display the eyebrow `IT Software Solution`.
- Display the heading `IT Software` and `Tech & Solutions`.
- Display `Discover More` and `Take Service` CTA buttons.
- Use a dark readability overlay over the background image.
- Use orange pagination indicators.
- Support loop, touch/swipe, keyboard controls, and autoplay near `7000ms`.
- Use a smooth transition near `1000ms`.
- Pause autoplay on hover and focus.
- Render the first slide immediately to prevent layout shift.
- Respect `prefers-reduced-motion`.

## Responsive behavior

Use responsive breakpoints near `576px`, `768px`, `992px`, and `1200px`.

- Collapse desktop navigation below `992px`.
- Provide a keyboard-accessible mobile menu.
- Scale hero typography with `clamp()`.
- Use one-column cards on mobile, two columns on tablet, and three or four columns on desktop.
- Stack split image/content sections on mobile.
- Stack CTA buttons where required on narrow screens.
- Hide or reposition decorative elements when they would reduce readability.
- Reduce or hide low-priority utility-bar content on mobile.
- Verify layouts at `375px`, `390px`, `768px`, `1024px`, `1280px`, and `1440px`.

## Custom cursor

Implement the custom cursor only for fine-pointer devices:

```css
@media (hover: hover) and (pointer: fine) {
  /* custom cursor styles */
}
```

Use:

- A `25px` orange outlined outer ring.
- A `10px` semi-transparent orange inner dot.
- `position: fixed`.
- `pointer-events: none`.
- A high z-index.
- Hover enlargement and opacity changes for links and buttons.
- Click feedback on mouse down/up.

Do not replace the native pointer on touch devices. Preserve keyboard accessibility and visible focus states.

## Assets and paths

Place local assets under `public/assets` and reference them only with root-relative public paths:

```text
/assets/...
```

Use `next/image` for normal content images. Use a CSS background image or a positioned `Image fill` for full-bleed hero backgrounds.

Never use:

```text
/images/...
/vendors/...
assets/images/...
absolute filesystem paths
```

If an expected asset is missing, do not silently invent a broken path. Identify the missing asset, use the closest existing asset when appropriate, and report the substitution.

## Accessibility and quality

- Use semantic HTML landmarks.
- Add meaningful `alt` text to content images.
- Use empty alt text for decorative images.
- Add accessible labels to icon-only controls.
- Ensure all interactive elements are keyboard accessible.
- Add visible `:focus-visible` styles.
- Maintain readable color contrast.
- Use reduced-motion fallbacks.
- Ensure carousel controls are announced correctly.
- Do not rely on hover as the only way to access content.

## Validation

Before finishing:

1. Run the project lint command.
2. Run the project type-check command if available.
3. Run the production build.
4. Check the browser console for runtime errors.
5. Test hero and testimonial sliders manually.
6. Test mobile navigation, search, back-to-top, links, hover states, and keyboard focus.
7. Verify all local asset requests return successfully.
8. Check the page at all required viewport widths.
9. Fix errors caused by the implementation rather than hiding them.

## Expected deliverables

- A complete responsive Brand home page.
- Reusable typed components.
- Correct local asset paths.
- Functional hero and testimonial sliders.
- Functional responsive navigation.
- Custom cursor restricted to fine-pointer devices.
- Accessible interactions and focus states.
- Clean, maintainable code.
- A successful lint and production build.
- A concise summary of changed files, validation commands, and any missing-asset substitutions.

```

```
