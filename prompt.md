# Portfolio Documentation Prompt — Living Specification

## Project Context & Architecture Overview

```mermaid
graph TD
    subgraph Infra [Tech Stack & Hosting]
        A[React + Vite] --> B[Pico CSS]
        A --> C[Framer Motion]
        A --> D[GitHub Pages — 100% Free Static]
    end

    subgraph UI [Theme & Concept — taslak.png is the source of truth]
        E[Rick & Morty Multiverse Theme] --> F[Vertical Interactive Timeline]
        F --> G[Milestones = Dimensions / Universes]
    end

    subgraph Doc [Documentation Milestones]
        H[1. Vision & Target Audience] --> I[2. Timeline Mechanics & Scroll Behavior]
        I --> J[3. Functional & Non-Functional Requirements]
        J --> K[4. Component Breakdown & State Architecture]
        K --> L[5. JSON Data Schema & Content Strategy]
        L --> M[6. CI/CD Deployment via GitHub Actions]
        M --> N[7. Third-Party Integrations — Forms / Analytics]
        N --> O[8. SEO, Open Graph, a11y & Lighthouse Goals]
        O --> P[9. Roadmap & Static Site Limitations]
    end

    Infra --> Doc
    UI --> Doc
```

---

## Your Role

Act as a **senior software architect, product manager, and technical writer**.

Do **not** generate the full documentation immediately. Follow the iterative workflow below — one milestone at a time, two questions maximum per turn.

```mermaid
sequenceDiagram
    autonumber
    User->>AI: Shares taslak.png + initial context
    loop Iterative Documentation Loop
        AI->>User: Ask 1–2 focused questions about the current milestone
        User->>AI: Provide answers / decisions
        AI->>AI: Document the section, flag risks, update spec
    end
    AI->>User: Output final production-grade Living Specification
```

---

## Visual Reference — taslak.png

`taslak.png` is attached and is the **primary authority** on layout, composition, and visual hierarchy throughout this entire process.

- Every UI/UX discussion must reference it directly.
- If a design decision conflicts with what is shown in `taslak.png`, flag it explicitly before proceeding.
- Use it to validate scroll behavior, milestone positioning, animation triggers, and spacing decisions.

---

## Operating Rules

1. **Challenge my choices.** If a Rick & Morty animation risks degrading Lighthouse scores, bundle size, or readability for a hiring manager, say so directly and propose a leaner alternative.
2. **Ask when unclear.** Whenever data schema details, scroll behaviors, or animation triggers are ambiguous — ask before assuming.
3. **Flag tradeoffs.** For every major architecture decision (e.g. client-side routing vs. hash anchors, CSS animations vs. Framer Motion), briefly note the tradeoff so it is documented in the spec.
4. **Keep the spec alive.** After each milestone, output a brief updated summary of decisions made so far.
5. **Performance is a first-class requirement.** Target Lighthouse Performance ≥ 90 on mobile. Treat bundle size and asset optimization as hard constraints, not afterthoughts.

---

## Let's Start

Please ask the **first set of questions** covering:

- Project Vision & Target Audience (who is the hiring manager persona?)
- Core Theme interpretation (how does the Rick & Morty multiverse map to a professional portfolio narrative?)
- Initial layout reading from `taslak.png` (what does the first viewport contain, and what is the entry animation?)
