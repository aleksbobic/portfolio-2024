# Refactor Plan

This file tracks the step-by-step cleanup and refactor work for the portfolio.

## Goals

- Reduce unnecessary client-side JavaScript.
- Replace brittle global DOM scripting with explicit component logic.
- Introduce a typed content layer for posts.
- Clean project hygiene issues that currently show up during builds.
- Improve metadata, accessibility, and maintainability without changing the visual direction.

## Phases

### Phase 1: Foundation Cleanup

- [x] Exclude generated output from TypeScript diagnostics.
- [x] Remove dead files, unused imports, and obvious code smells.
- [x] Fix basic React list key issues and low-risk typing issues.
- [x] Keep `pnpm build` passing cleanly enough to use as a regression check.

### Phase 2: Typed Content Layer

- [x] Move posts into an Astro content collection.
- [x] Define a frontmatter schema for posts.
- [x] Centralize post loading, sorting, and date formatting helpers.
- [x] Update index and posts pages to use the shared content API.

### Phase 3: Hydration Reduction

- [x] Convert static React components to Astro where interactivity is not needed.
- [x] Remove unnecessary `client:load` usage from static content.
- [x] Keep interactive islands only for real UI behavior.

### Phase 4: Interaction Architecture

- [x] Replace global nav-title syncing with explicit page metadata or component state.
- [x] Replace the global image modal DOM wiring with a dedicated component.
- [x] Simplify theme initialization and toggling so it survives navigation cleanly.

### Phase 5: Metadata and Polish

- [x] Improve page metadata and social previews.
- [x] Tighten accessibility on interactive elements and imagery.
- [x] Do a final pass for consistency, cleanup, and documentation.

## Working Rules

- Complete work in phase order unless a later fix is blocked by an earlier dependency.
- Run `pnpm build` after each meaningful phase to catch regressions.
- Prefer smaller reversible refactors over one large rewrite.
