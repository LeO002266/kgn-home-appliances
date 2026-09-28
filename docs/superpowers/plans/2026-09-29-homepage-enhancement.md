# Homepage Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the KGN Home Appliances homepage to a modern, high-converting hybrid retail showroom featuring real studio photography, interactive category filtering on featured products, dual-action CTAs, and elevated local trust factors.

**Architecture:** Next.js 14 App Router with Tailwind CSS, Lucide icons, and React client state for interactive filtering. Preserves all Schema.org structured data, bilingual support (EN/HI), and responsive mobile ergonomics.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Lucide React, Node.js

**Constraint:** Do NOT push to git until explicitly requested by the user.

---

### Task 1: Enhance Hero Section & Visual Trust Elements

**Files:**
- Modify: `components/hero.tsx`
- Modify: `components/hero-visual.tsx`

- [ ] **Step 1: Update Hero with dual primary action buttons and bilingual trust micro-cards**
- [ ] **Step 2: Update Hero Visual with floating brand and warranty badges**
- [ ] **Step 3: Run TypeScript typecheck to verify no prop or type mismatches**
  Run: `npx tsc --noEmit`
  Expected: Exited with code 0
- [ ] **Step 4: Commit locally (DO NOT push)**
  ```bash
  git add components/hero.tsx components/hero-visual.tsx
  git commit -m "feat(hero): upgrade hero with dual-action CTAs and enhanced visual trust elements"
  ```

---

### Task 2: Interactive Category Tabs in Featured Products

**Files:**
- Modify: `components/featured-products.tsx`

- [ ] **Step 1: Add interactive filter tabs (All, Kitchen, Cooling & Fans, Water Purifiers, Cookware & Everyday)**
- [ ] **Step 2: Connect client-side state so clicking a tab smoothly filters the displayed featured products**
- [ ] **Step 3: Run TypeScript typecheck and linting**
  Run: `npx tsc --noEmit; npm run lint`
  Expected: Exited with code 0
- [ ] **Step 4: Commit locally (DO NOT push)**
  ```bash
  git add components/featured-products.tsx
  git commit -m "feat(showcase): add interactive category filter tabs to featured products section"
  ```

---

### Task 3: Polish Product Card & WhatsApp Action Link

**Files:**
- Modify: `components/product-card.tsx`

- [ ] **Step 1: Add hover lift, smooth border glow, and high-visibility badge styling**
- [ ] **Step 2: Ensure WhatsApp inquiry message pre-fills with specific product name and model**
- [ ] **Step 3: Verify TypeScript and linting**
  Run: `npx tsc --noEmit; npm run lint`
  Expected: Exited with code 0
- [ ] **Step 4: Commit locally (DO NOT push)**
  ```bash
  git add components/product-card.tsx
  git commit -m "style(product-card): refine studio card aesthetics and WhatsApp inquiry flow"
  ```

---

### Task 4: Upgrade Specialty Highlight & Local Proof Matrix

**Files:**
- Modify: `components/specialty-highlight.tsx`

- [ ] **Step 1: Elevate specialty section with local Bhilai service guarantees and brand portfolio**
- [ ] **Step 2: Verify responsive design for mobile, tablet, and desktop**
- [ ] **Step 3: Commit locally (DO NOT push)**
  ```bash
  git add components/specialty-highlight.tsx
  git commit -m "feat(specialty): upgrade local service highlights and showroom capabilities matrix"
  ```

---

### Task 5: Comprehensive Verification & Quality Assurance

**Files:**
- Verification only

- [ ] **Step 1: Run full TypeScript check**
  Run: `npx tsc --noEmit`
  Expected: 0 errors
- [ ] **Step 2: Run linter**
  Run: `npm run lint`
  Expected: 0 warnings, 0 errors
- [ ] **Step 3: Test local dev server on http://localhost:3000**
  Verify homepage renders cleanly, interactive tabs work, and all studio photos display crisply.
- [ ] **Step 4: Confirm git status (ensure no uncommitted work, and NO git push performed)**
