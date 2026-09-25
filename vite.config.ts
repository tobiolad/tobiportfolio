import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { profile, experience, projects, education, writing } from './src/data/portfolio'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * This is a client-rendered SPA, so the raw HTML shipped to a crawler is
 * otherwise just an empty <div id="root">. Many AI crawlers (GPTBot,
 * ClaudeBot, PerplexityBot) don't execute JavaScript, so without this they
 * would see only the <head> metadata and none of the actual page content.
 * This mirrors the real content into a <noscript> block at build time so
 * non-JS crawlers can read it; JS-enabled browsers render the live app in
 * #root as normal and never see this block.
 */
function noscriptFallbackHtml(): string {
  const experienceItems = experience
    .map(
      (e) =>
        `<li><strong>${escapeHtml(e.role)}, ${escapeHtml(e.company)}</strong> (${escapeHtml(e.period)}) — ${escapeHtml(e.summary)}</li>`
    )
    .join('');

  const projectItems = projects
    .map(
      (p) =>
        `<li><strong>${escapeHtml(p.title)}</strong> (${escapeHtml(p.category)}) — ${escapeHtml(p.blurb)} <a href="${escapeHtml(p.href)}">${escapeHtml(p.href)}</a></li>`
    )
    .join('');

  const educationItems = education
    .map((e) => `<li>${escapeHtml(e.degree)}, ${escapeHtml(e.school)} (${escapeHtml(e.year)})</li>`)
    .join('');

  const writingItems = writing
    .map(
      (w) =>
        `<li>${escapeHtml(w.title)} — ${escapeHtml(w.source)}: ${escapeHtml(w.blurb)} <a href="${escapeHtml(w.href)}">${escapeHtml(w.href)}</a></li>`
    )
    .join('');

  return `<noscript>
    <main>
      <h1>${escapeHtml(profile.name)}</h1>
      <p>${escapeHtml(profile.bio)}</p>
      <p>${escapeHtml(profile.headline)}</p>
      <p>${escapeHtml(profile.intro)}</p>
      <p>Location: ${escapeHtml(profile.location)}</p>
      <h2>Experience</h2>
      <ul>${experienceItems}</ul>
      <h2>Selected projects</h2>
      <ul>${projectItems}</ul>
      <h2>Education</h2>
      <ul>${educationItems}</ul>
      <h2>Writing &amp; recognition</h2>
      <ul>${writingItems}</ul>
      <p>
        <a href="${escapeHtml(profile.linkedin)}">LinkedIn</a> ·
        <a href="${escapeHtml(profile.github)}">GitHub</a> ·
        <a href="${escapeHtml(profile.x)}">X</a>
      </p>
    </main>
  </noscript>`;
}

function noscriptSeoFallback(): Plugin {
  return {
    name: 'noscript-seo-fallback',
    transformIndexHtml(html) {
      return html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscriptFallbackHtml()}`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), noscriptSeoFallback()],
})
