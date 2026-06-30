# northninth Style Guide

## Purpose

This style guide defines the visual system for the northninth website.

It exists to keep the design consistent as the site is built section by section in VS Code.

This guide is based on:

- The Showcasy style guide for visual structure, grayscale color use, typography, icons, spacing, buttons, and form styling.
- The northninth brand direction for a premium, modern, slightly editorial website focused on web design and AI automation.
- A motion-forward experience inspired by modern agency websites, while keeping the base layout clean, readable, and conversion-focused.

---

## Brand Direction

northninth should feel:

- Modern
- Clean
- Premium
- Strategic
- Motion-aware
- Business-focused

The design should not feel playful, noisy, trendy for the sake of trendiness, or overly “tech startup.”
It should feel sharp, restrained, current, and trustworthy.

---

## Core Visual Principles

1. Gray is the foundation of the interface.
2. Black or near-black is used for primary text and important emphasis.
3. Lighter gray is used for secondary text and visual contrast inside headlines.
4. The layout should feel spacious, but not empty.
5. Motion should enhance the experience, not distract from the content.
6. Every section should feel polished, but still easy for a client to understand.
7. The site should look premium without becoming complicated.

---

## Color System

The color system is grayscale-first.

Gray is the base color for the interface and should be used in backgrounds, dividers, muted text, subtle UI structure, and certain headline emphasis treatments.

### Primary Color Roles

- Background: soft light gray
- Surface: white or near-white
- Primary text: dark charcoal / near-black
- Secondary text: mid gray
- Accent gray: logo gray used for highlighted words like “Smart,” “Practical,” and “Better”
- Borders and dividers: light neutral gray

### Starting Color Tokens

Use these as the starting point:

```css
:root {
  --bg-color: #f2f2f2;
  --surface-color: #ffffff;
  --text-dark: #050816;
  --text-gray: #aeb4bf;
  --text-muted: #6f7782;
  --border-light: #d9dde3;
  --border-dark: #111111;
}
```

---

## Rules & Guidelines

### Color Rules

- Use gray as the main foundation color.
- Use dark text for readability and strong contrast.
- Use the logo gray for selected word emphasis and certain supporting UI moments.
- Do not add bright accent colors unless intentionally approved later.
- Keep the palette restrained and professional.

### Typography

The main typeface is Inter Tight.
This is the primary font for:

- Headlines
- Body text
- Buttons
- Navigation
- Form labels
- Interface text

### Typography Rules

- Use Inter Tight throughout the site unless a future design decision changes this.
- Headlines should feel bold, large, and clean.
- Body text should remain highly readable and not overly stylized.
- Headline emphasis can be created through color contrast, not just font weight.
- Avoid mixing too many font sizes on the same section.

### Type Hierarchy

Suggested starting scale:

- Hero headline: very large, bold, tightly spaced
- Section heading: large, bold
- Body copy: medium size, easy to read
- Small labels: smaller but still clean and readable
- Buttons: medium size with clear weight

---

## Logo Usage

The northninth logo should appear in the header.

Rules:

- Use the provided logo file as the official brand mark.
- Keep enough spacing around the logo so it does not feel cramped.
- Do not stretch the logo.
- Do not recolor the logo unless an approved alternate version is created.
- Use the gray portion of the logo as the visual reference for muted headline emphasis.

---

## Buttons

Buttons are important conversion elements and should remain visually clean and modern.

### Button Rules

- Primary buttons should feel bold and clear.
- Rounded pill shapes are allowed and fit the current design direction.
- Button text should be easy to read.
- Hover states should be subtle and polished.
- Buttons should not feel overly playful or decorative.

### Button Types

1. Primary button

- Dark background
- Light text
- Strong call to action

2. Secondary button

- Transparent or light background
- Dark border
- Dark text

### Button Behavior

- Hover effects should be smooth.
- Transitions should be quick and refined.
- Buttons should feel clickable without being flashy.

---

## Icons

Use Phosphor-style SVG icons.

### Icon Rules

- Icons should be embedded as SVG.
- SVG color should be set to  currentColor .
- SVG dimensions should be able to scale with the parent.
- Add a reusable class for icons.
- Add size classes when needed, such as 16x16, 24x24, or 32x32.

### Icon Principles

- Keep icons simple and modern.
- Do not use overly decorative icon sets.
- Match icon weight and tone to the rest of the site.

---

## Spacing System

The spacing system should follow 4px-based increments.

### Approved Spacing Scale

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 40px
- 48px
- 56px
- 64px
- 72px
- 80px

### Spacing Rules

- Use consistent spacing values throughout the site.
- Avoid random spacing numbers.
- Keep vertical rhythm clean and intentional.
- Use more generous spacing in hero and major section transitions.
- Use tighter spacing in buttons, navigation, and form groups.

---

## Grid and Layout

The site should feel structured, aligned, and spacious.

### Layout Rules

- Keep content aligned to a consistent grid.
- Use centered hero layouts when appropriate.
- Use cleaner and more structured layouts for services, process, and case study sections.
- Avoid cluttered multi-column layouts unless they clearly improve the design.
- Keep the mobile layout just as intentional as desktop.

### Responsive Architecture

Responsive behavior is a core requirement.

Rules:

- The site must work cleanly on desktop, tablet, and mobile.
- Spacing and typography should scale fluidly.
- Layout shifts should feel intentional, not broken.
- Buttons, forms, and content blocks should remain usable on smaller screens.
- The code structure should support responsive updates without requiring a full rewrite.

---

## Forms

Forms are part of the lead-generation system and should be treated as a priority.

### Form Rules

- Forms should look clean and professional.
- Inputs should be easy to read and easy to use.
- Labels should be clear.
- Field spacing should feel open and organized.
- Form styling should match the same grayscale system as the rest of the site.
- Forms should support future interactive intake or lead capture systems.

---

## Rich Media

The site should support embedded media cleanly.

### Rich Media Rules

- Layouts should be able to hold images, videos, and motion content without breaking.
- Media containers should feel intentional and high-end.
- Embedded content should scale properly across devices.
- Rich media should enhance storytelling, not overcrowd the page.

---

## Header Rules

The header should feel light, clean, and premium.

Rules:

- Logo on the left
- Primary CTA on the right
- Navigation should remain simple
- Header spacing should be balanced and intentional
- The header may be refined as needed to better match this style guide

---

## Hero Rules

The hero is the strongest visual statement on the page.

Rules:

- Large bold centered headline
- Strategic use of gray emphasis in selected words
- Short supporting subheadline
- Clear call-to-action button
- Spacious layout
- Strong contrast between bold message and quiet background
- The hero may be modified as needed to better align with this style guide

---

## Section Design Rules

Each section of the site should follow these standards:

- It must support the overall northninth visual system.
- It must fit within the current build phase.
- It must use the grayscale-first color system.
- It must remain responsive.
- It must be easy to maintain in code.
- It must feel consistent with the rest of the site.

Screenshots from other sites can be used as inspiration, but each section must be adapted to fit the northninth style guide and build rules.

---

## What to Avoid

Avoid the following:

- Bright random accent colors
- Overly busy layouts
- Inconsistent spacing
- Too many fonts
- Overly playful animations
- Trendy effects that weaken readability
- Sections that look copied without being adapted
- Visual decisions that conflict with the gray-first system

---

## Build Usage Rule

Before building or revising any section, check:

1. Does it match the grayscale-first style system?
2. Does it use Inter Tight or the approved type system?
3. Does it respect the spacing system?
4. Does it fit the current phase?
5. Does it support responsiveness?
6. Does it feel like northninth rather than a direct copy of another site?
7. Does it support the site’s business goal of presenting web design and AI automation professionally?

If the answer is no to any of these, revise before finalizing the code.
