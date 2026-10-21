# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static, single-page website for "Профессиональный лицей №12" (a vocational college in Osh, Kyrgyzstan), built as plain HTML/CSS/JS with no build tooling, package manager, or framework. The entire site is three files:

- [index.html](index.html) — all markup, single page
- [css/style.css](css/style.css) — all styles, including responsive breakpoints
- [js/script.js](js/script.js) — i18n (RU/KG language switch) and the hero image slider

External dependencies are loaded via CDN links in the `<head>` of `index.html`: Google Fonts (Noto Sans) and Font Awesome icons. There is no local toolchain.

## Running / developing

There is no build step. Open [index.html](index.html) directly in a browser, or serve the directory with any static file server (e.g. `npx serve` or VS Code's "Open with Live Server") to avoid `file://` path issues. There are no tests, linters, or package scripts configured.

## Architecture

### Content vs. translation duplication

Visible text in `index.html` is the Russian-language fallback/default content, hardcoded inline (e.g. `<a data-i18n="nav.home">Главная</a>`). The `data-i18n="key"` attribute on an element is the lookup key into the `translations` object in [js/script.js](js/script.js), which has parallel `ru` and `kg` dictionaries keyed by the same dot-separated strings (`nav.home`, `footer.address1`, etc.).

When editing text content, both places must stay in sync:
1. The hardcoded Russian text in `index.html` (shown before JS runs, and used as the `ru` value visually)
2. The corresponding key in `translations.ru` and `translations.kg` in `script.js`

Adding a new translatable string means: add `data-i18n="some.key"` to the HTML element, then add `'some.key': '...'` to both `ru` and `kg` objects in `script.js`. `setLanguage()` walks every `[data-i18n]` element and swaps `textContent` based on the active language; clicking a `.lang-btn` (`data-lang="ru"|"kg"`) calls it.

### Layout grid

The main content area (`.content` in `style.css`) uses a single CSS grid with named areas (`sidebar`, `hero`, `director`, `news`, `ads`) rather than nested flex containers — when repositioning sections, change `grid-template-areas`/`grid-template-columns` rather than DOM order. Below 1200px this collapses to a single column via the `@media (max-width: 1200px)` override, with further breakpoints at 900px, 720px, and 480px for finer adjustments. Keep new sections consistent with this grid-area approach rather than introducing ad-hoc positioning.

### Slider

The hero image slider (`.slider` / `.slides` / `.dot`) is driven by plain DOM queries in `script.js`: `showSlide(index)` toggles `.active` on both slides and dots, wraps via modulo, and auto-advances every 4000ms via `setInterval`. Dot buttons call `showSlide` directly on click. There's no dependency between slide count and dot count beyond them being kept in matching order in the HTML.

### Content placeholders

Many data-bearing areas (news images, announcement links, media captions, hero banner) currently contain literal `"..."` or empty `href="#"` placeholders — these are stand-ins for real CMS/content data, not bugs to silently "fix" by inventing content.
