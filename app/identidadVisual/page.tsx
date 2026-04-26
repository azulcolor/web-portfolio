import React from 'react';

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function IdentidadVisual() {
    return (
        <>
        






<style dangerouslySetInnerHTML={{ __html: `
  :root {
    --cream: #FAF6F1;
    --sand: #F0EBE3;
    --charcoal: #1A1A17;
    --charcoal-light: #2C2A27;
    --forest: #4A5D3C;
    --forest-dark: #3A4A2F;
    --sage: #7A9268;
    --mint: #B5C4A8;
    --mint-light: #D4DFC9;
    --mocha: #6B5243;
    --warm-brown: #8B7355;
    --caramel: #C4A882;
    --caramel-light: #D9C4A5;
    --text-secondary: #6B6560;
    --text-muted: #9C9590;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; max-width: 100%; }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    background: var(--cream);
    color: var(--charcoal-light);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ─── COVER ─── */
  .cover {
    width: 100%;
    min-height: 100vh;
    background: var(--charcoal);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 80px 60px;
    page-break-after: always;
  }

  .cover::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74,93,60,0.3) 0%, transparent 70%);
  }

  .cover::after {
    content: '';
    position: absolute;
    bottom: -150px; left: -150px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196,168,130,0.2) 0%, transparent 70%);
  }

  .cover-tag {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    color: var(--caramel);
    letter-spacing: 0.02em;
    margin-bottom: 32px;
    position: relative; z-index: 1;
  }

  .cover-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 80px;
    font-weight: 300;
    color: var(--cream);
    text-align: center;
    line-height: 1;
    letter-spacing: -0.02em;
    position: relative; z-index: 1;
    margin-bottom: 12px;
  }

  .cover-title span {
    color: var(--caramel);
  }

  .cover-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 400;
    color: var(--mint);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 20px;
    position: relative; z-index: 1;
  }

  .cover-divider {
    width: 60px;
    height: 1px;
    background: var(--caramel);
    margin: 40px auto;
    position: relative; z-index: 1;
  }

  .cover-meta {
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative; z-index: 1;
  }

  /* ─── SECTIONS ─── */
  .section {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 60px;
    page-break-inside: avoid;
  }

  .section-full {
    max-width: 100vw;
    overflow-x: hidden;
    width: 100%;
    padding: 80px 60px;
    page-break-inside: avoid;
  }

  .section-label {
    font-family: 'Caveat', cursive;
    font-size: 18px;
    color: var(--caramel);
    margin-bottom: 8px;
    display: block;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 48px;
    font-weight: 600;
    color: var(--charcoal-light);
    line-height: 1;
    margin-bottom: 48px;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, var(--caramel), transparent);
    margin-bottom: 60px;
  }

  /* ─── BRAND STORY ─── */
  .brand-story {
    background: var(--sand);
  }

  .brand-story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: center;
  }

  .brand-pillar {
    padding: 40px;
    border-left: 2px solid var(--caramel);
    margin-bottom: 32px;
  }

  .brand-pillar h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--forest);
    margin-bottom: 12px;
  }

  .brand-pillar p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 14px;
  }

  .brand-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px;
    font-weight: 400;
    font-style: italic;
    color: var(--charcoal-light);
    line-height: 1.3;
  }

  .brand-quote span {
    color: var(--forest);
  }

  /* ─── COLORS ─── */
  .colors-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 48px;
  }

  .color-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  .color-swatch {
    height: 120px;
    width: 100%;
  }

  .color-info {
    background: white;
    padding: 16px;
  }

  .color-name {
    font-weight: 600;
    font-size: 13px;
    color: var(--charcoal-light);
    margin-bottom: 4px;
  }

  .color-hex {
    font-size: 12px;
    color: var(--text-muted);
    font-family: monospace;
    margin-bottom: 4px;
  }

  .color-usage {
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .colors-secondary {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }

  .color-chip {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }

  .color-chip-swatch {
    height: 80px;
  }

  .color-chip-info {
    background: white;
    padding: 12px;
  }

  /* ─── TYPOGRAPHY ─── */
  .type-section {
    background: var(--charcoal);
    color: var(--cream);
  }

  .type-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .type-card {
    border-top: 1px solid rgba(196,168,130,0.3);
    padding-top: 32px;
  }

  .type-card-label {
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--caramel);
    margin-bottom: 20px;
  }

  .type-display {
    font-family: 'Cormorant Garamond', serif;
    font-size: 52px;
    font-weight: 400;
    color: var(--cream);
    line-height: 1;
    margin-bottom: 16px;
  }

  .type-accent {
    font-family: 'Caveat', cursive;
    font-size: 40px;
    color: var(--caramel);
    line-height: 1;
    margin-bottom: 16px;
  }

  .type-body-demo {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: rgba(250,246,241,0.7);
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .type-specs {
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }

  .type-specs span {
    display: block;
    margin-bottom: 4px;
  }

  .type-scale {
    max-width: 1100px;
    margin: 48px auto 0;
    border-top: 1px solid rgba(196,168,130,0.2);
    padding-top: 48px;
  }

  .type-scale-row {
    display: flex;
    align-items: baseline;
    gap: 32px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .type-scale-label {
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    width: 80px;
    flex-shrink: 0;
  }

  /* ─── LOGO / WORDMARK ─── */
  .logo-section {
    background: var(--cream);
  }

  .logo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 48px;
  }

  .logo-card {
    border-radius: 20px;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 220px;
  }

  .logo-card.bg-cream { background: var(--cream); border: 1px solid var(--caramel); }
  .logo-card.bg-sand { background: var(--sand); }
  .logo-card.bg-dark { background: var(--charcoal); }
  .logo-card.bg-forest { background: var(--forest); }

  .wordmark-light {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 600;
    color: var(--charcoal-light);
    letter-spacing: -0.01em;
    text-align: center;
  }

  .wordmark-dark {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 600;
    color: var(--cream);
    letter-spacing: -0.01em;
    text-align: center;
  }

  .wordmark-tagline {
    font-family: 'Caveat', cursive;
    font-size: 18px;
    color: var(--caramel);
    margin-top: 8px;
    text-align: center;
  }

  .wordmark-tagline-light {
    font-family: 'Caveat', cursive;
    font-size: 18px;
    color: var(--mint);
    margin-top: 8px;
    text-align: center;
  }

  .logo-card-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-top: 8px;
    text-align: center;
  }

  /* ─── VOICE & TONE ─── */
  .voice-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .voice-do {
    background: rgba(74,93,60,0.06);
    border: 1px solid rgba(74,93,60,0.2);
    border-radius: 16px;
    padding: 40px;
  }

  .voice-dont {
    background: rgba(107,82,67,0.06);
    border: 1px solid rgba(107,82,67,0.2);
    border-radius: 16px;
    padding: 40px;
  }

  .voice-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
  }

  .voice-badge {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
  }

  .voice-badge.do { background: var(--forest); color: var(--cream); }
  .voice-badge.dont { background: var(--mocha); color: var(--cream); }

  .voice-item {
    padding: 14px 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .voice-item:last-child { border-bottom: none; }

  .voice-item strong {
    color: var(--charcoal-light);
    display: block;
    margin-bottom: 4px;
  }

  /* ─── INSTAGRAM TEMPLATES ─── */
  .ig-section {
    background: var(--sand);
  }

  .ig-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 48px;
  }

  .ig-post {
    aspect-ratio: 1;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }

  /* Post 1 — Tip técnico */
  .ig-1 {
    background: var(--charcoal);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Post 2 — Caso de éxito */
  .ig-2 {
    background: var(--forest);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Post 3 — Personal */
  .ig-3 {
    background: var(--cream);
    border: 1px solid var(--caramel);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ig-tag {
    font-family: 'Caveat', cursive;
    font-size: 15px;
    color: var(--caramel);
  }

  .ig-tag-light {
    font-family: 'Caveat', cursive;
    font-size: 15px;
    color: var(--mint);
  }

  .ig-tag-dark {
    font-family: 'Caveat', cursive;
    font-size: 15px;
    color: var(--mocha);
  }

  .ig-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--cream);
    line-height: 1.1;
  }

  .ig-title-dark {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--charcoal-light);
    line-height: 1.1;
  }

  .ig-html, body {
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 12px;
    color: rgba(250,246,241,0.7);
    line-height: 1.5;
    margin-top: 8px;
  }

  .ig-body-dark {
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-top: 8px;
  }

  .ig-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ig-handle {
    font-size: 11px;
    color: rgba(250,246,241,0.4);
    letter-spacing: 0.08em;
  }

  .ig-handle-dark {
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.08em;
  }

  .ig-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--caramel);
    opacity: 0.6;
  }

  .ig-dot-mint {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--mint);
    opacity: 0.6;
  }

  .ig-dot-forest {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--forest);
    opacity: 0.4;
  }

  /* Post número grande */
  .ig-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 72px;
    font-weight: 700;
    color: rgba(74,93,60,0.15);
    line-height: 1;
    position: absolute;
    bottom: 24px;
    right: 24px;
  }

  /* ─── CONTENT PILLARS ─── */
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 48px;
  }

  .pillar-card {
    background: white;
    border-radius: 16px;
    padding: 28px 20px;
    border-top: 3px solid var(--forest);
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  }

  .pillar-card:nth-child(2) { border-top-color: var(--caramel); }
  .pillar-card:nth-child(3) { border-top-color: var(--mocha); }
  .pillar-card:nth-child(4) { border-top-color: var(--sage); }
  .pillar-card:nth-child(5) { border-top-color: var(--mint); }

  .pillar-emoji {
    font-size: 28px;
    margin-bottom: 12px;
    display: block;
  }

  .pillar-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--charcoal-light);
    margin-bottom: 8px;
  }

  .pillar-desc {
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .pillar-examples {
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .pillar-pct {
    font-family: 'Cormorant Garamond', serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--forest);
    margin-top: 16px;
  }

  .pillar-card:nth-child(2) .pillar-pct { color: var(--caramel); }
  .pillar-card:nth-child(3) .pillar-pct { color: var(--mocha); }
  .pillar-card:nth-child(4) .pillar-pct { color: var(--sage); }
  .pillar-card:nth-child(5) .pillar-pct { color: var(--mint); }

  /* ─── HASHTAGS ─── */
  .hashtag-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }

  .hashtag-group h4 {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--forest);
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--mint-light);
  }

  .hashtag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .hashtag {
    font-size: 12px;
    color: var(--text-secondary);
    background: var(--sand);
    padding: 4px 10px;
    border-radius: 100px;
    border: 1px solid var(--caramel);
  }

  /* ─── PAGE BREAKS ─── */
  @media print {
    .page-break { page-break-before: always; }
  }

  .page-break { margin-top: 80px; }

  /* ─── CAPTION TEMPLATES ─── */
  .caption-card {
    background: white;
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;
    border-left: 4px solid var(--forest);
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  }

  .caption-card:nth-child(2) { border-left-color: var(--caramel); }
  .caption-card:nth-child(3) { border-left-color: var(--mocha); }

  .caption-type {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--forest);
    margin-bottom: 16px;
  }

  .caption-card:nth-child(2) .caption-type { color: var(--caramel); }
  .caption-card:nth-child(3) .caption-type { color: var(--mocha); }

  .caption-text {
    font-size: 14px;
    color: var(--charcoal-light);
    line-height: 1.8;
    white-space: pre-line;
  }

  /* ─── GRID PATTERN ─── */
  .grid-pattern {
    background: var(--sand);
    padding: 60px;
  }

  .grid-visual {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(3, 120px);
    gap: 8px;
    margin-bottom: 32px;
  }

  .grid-cell {
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    font-weight: 500;
  }

  .gc-1 { background: var(--charcoal); grid-column: span 2; color: var(--cream); font-size: 22px; }
  .gc-2 { background: var(--mint); grid-column: span 1; }
  .gc-3 { background: var(--cream); border: 1px solid var(--caramel); grid-column: span 2; color: var(--text-secondary); font-size: 12px; padding: 16px; text-align: center; }
  .gc-4 { background: var(--forest); grid-column: span 2; color: var(--cream); font-size: 22px; }
  .gc-5 { background: var(--sand); border: 1px solid var(--caramel); grid-column: span 2; color: var(--text-muted); font-size: 12px; padding: 12px; text-align: center; }
  .gc-6 { background: var(--caramel); grid-column: span 2; color: var(--charcoal-light); font-size: 22px; }
  .gc-7 { background: var(--cream); border: 1px solid var(--mint); grid-column: span 1; }
  .gc-8 { background: var(--charcoal); grid-column: span 2; color: var(--cream); font-size: 11px; padding: 16px; text-align: center; }
  .gc-9 { background: var(--forest); grid-column: span 2; color: var(--mint); font-size: 22px; }
  .gc-10 { background: var(--cream); border: 1px solid var(--caramel); grid-column: span 2; color: var(--text-secondary); font-size: 12px; padding: 16px; text-align: center; }
  .gc-11 { background: var(--mocha); grid-column: span 2; color: var(--cream); font-size: 22px; }
  .gc-12 { background: var(--sand); border: 1px solid var(--caramel); grid-column: span 1; }
  .gc-13 { background: var(--mint-light); grid-column: span 2; color: var(--forest); font-size: 22px; }
  .gc-14 { background: var(--charcoal); grid-column: span 2; color: var(--cream); font-size: 12px; padding: 16px; text-align: center; }

  /* ─── HEADER REPEAT ─── */
  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 60px;
    background: var(--charcoal);
  }

  .page-header-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--cream);
  }

  .page-header-section {
    font-size: 11px;
    color: var(--caramel);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .page-number {
    font-size: 11px;
    color: var(--text-muted);
  }

  
  
    .hashtag-strategy-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    
    @media (max-width: 768px) {
      .hashtag-strategy-grid {
        grid-template-columns: 1fr !important;
        gap: 32px !important;
      }
      .hashtag-strategy-grid > div {
        padding-left: 20px !important;
      }
    }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .cover { padding: 60px 24px !important; min-height: 80vh !important; }
    .cover-title { font-size: 48px; }
    .cover-subtitle { font-size: 18px; margin-top: 12px; }
    
    .section, .section-full {
    max-width: 100vw;
    overflow-x: hidden; padding: 60px 24px !important; }
    .section-title { font-size: 32px; margin-bottom: 24px; }
    
    .brand-story-grid { grid-template-columns: 1fr; gap: 40px; }
    .brand-pillar { padding: 24px; }
    .brand-quote { font-size: 26px; }
    
    .colors-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .colors-secondary { grid-template-columns: repeat(2, 1fr); }
    
    .type-grid { grid-template-columns: 1fr; gap: 40px; }
    .type-display { font-size: 38px; }
    .type-accent { font-size: 32px; }
    .type-scale-row { gap: 12px; flex-direction: column; align-items: flex-start; }
    .type-scale-label { width: 100%; margin-bottom: 4px; }
    
    .logo-grid { grid-template-columns: 1fr; gap: 20px; }
    .logo-card { padding: 40px 24px; min-height: 160px; }
    
    .voice-grid { grid-template-columns: 1fr; gap: 24px; }
    .voice-do, .voice-dont { padding: 28px 20px; }
    
    .pillars-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .pillar-card { padding: 16px; }
    
    .grid-visual { 
      grid-template-columns: repeat(2, 1fr); 
      grid-template-rows: auto;
      gap: 8px;
    }
    .grid-cell { grid-column: span 1 !important; height: 100px; font-size: 11px; }
    .gc-1, .gc-4, .gc-6, .gc-9, .gc-11, .gc-13 { font-size: 16px; }
    
    .ig-grid { grid-template-columns: 1fr; gap: 24px; }
    .hashtag-grid { grid-template-columns: 1fr; gap: 20px; }
    
    .page-header { padding: 16px 20px; }
    .page-header-logo { font-size: 16px; }
    .page-header-section { font-size: 9px; }
    
    .caption-card { padding: 24px; }
  }
  
  @media (max-width: 480px) {
    .pillars-grid { grid-template-columns: 1fr; }
    .colors-grid { grid-template-columns: 1fr; }
    .colors-secondary { grid-template-columns: 1fr; }
    .cover-title { font-size: 36px; }
    .wordmark-light, .wordmark-dark { font-size: 28px; }
    .section-title { font-size: 28px; }
  }
` }} />



{/* ═══════════════════════════════════════ PORTADA ═══════════════════════════════════════ */}
<div className="cover">
  <div className="cover-tag">Documento confidencial de marca</div>
  <div className="cover-title">Eduardo<br /><span>Leal</span></div>
  <div className="cover-subtitle">Identidad Visual & Guía de Contenido</div>
  <div className="cover-divider"></div>
  <div className="cover-meta">lealpastelin.com {" "}·{" "} Instagram {" "}·{" "} 2025</div>
</div>

{/* ═══════════════════════════════════════ ESENCIA DE MARCA ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">01 — Esencia de Marca</span>
  <span className="page-number">02</span>
</div>

<div className="section-full brand-story" style={{ padding: '80px 60px' }}>
  <div className="brand-story-grid">
    <div>
      <span className="section-label">¿Quién es Eduardo?</span>
      <h2 className="section-title" style={{ marginBottom: '32px' }}>La esencia<br />de la marca</h2>

      <div className="brand-pillar">
        <h3>Misión</h3>
        <p>Crear experiencias web que transmitan la esencia de cada negocio — sitios rápidos, hermosos y que convierten visitantes en clientes reales.</p>
      </div>

      <div className="brand-pillar">
        <h3>Visión</h3>
        <p>Ser el desarrollador web de referencia para restaurantes y marcas premium en México, conocido por el detalle y la calidad de cada entrega.</p>
      </div>

      <div className="brand-pillar">
        <h3>Valores</h3>
        <p>Creatividad con propósito · Detalle obsesivo · Calidez humana · Honestidad · Resultados medibles</p>
      </div>
    </div>

    <div>
      <blockquote className="brand-quote">
        "Cada sitio que entrego debe <span>enamorar</span> a tus clientes antes de que digan una sola palabra."
      </blockquote>

      <div style={{ marginTop: '48px', padding: '32px', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>Personalidad de marca</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ padding: '8px 16px', background: 'var(--mint-light)', borderRadius: '100px', fontSize: '13px', color: 'var(--forest)', fontWeight: '500' }}>Creativo</span>
          <span style={{ padding: '8px 16px', background: 'var(--sand)', borderRadius: '100px', fontSize: '13px', color: 'var(--mocha)', fontWeight: '500' }}>Cálido</span>
          <span style={{ padding: '8px 16px', background: 'rgba(74,93,60,0.1)', borderRadius: '100px', fontSize: '13px', color: 'var(--forest)', fontWeight: '500' }}>Confiable</span>
          <span style={{ padding: '8px 16px', background: 'var(--caramel-light)', borderRadius: '100px', fontSize: '13px', color: 'var(--mocha)', fontWeight: '500' }}>Premium</span>
          <span style={{ padding: '8px 16px', background: 'var(--sand)', borderRadius: '100px', fontSize: '13px', color: 'var(--charcoal-light)', fontWeight: '500' }}>Auténtico</span>
          <span style={{ padding: '8px 16px', background: 'var(--mint-light)', borderRadius: '100px', fontSize: '13px', color: 'var(--forest)', fontWeight: '500' }}>Detallista</span>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ PALETA DE COLOR ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">02 — Paleta de Color</span>
  <span className="page-number">03</span>
</div>

<div className="section">
  <span className="section-label">Identidad visual</span>
  <h2 className="section-title">Colores primarios</h2>

  <div className="colors-grid">
    <div className="color-card">
      <div className="color-swatch" style={{ background: '#4A5D3C' }}></div>
      <div className="color-info">
        <div className="color-name">Forest</div>
        <div className="color-hex">#4A5D3C</div>
        <div className="color-usage">Color principal. CTAs, acentos, elementos de énfasis.</div>
      </div>
    </div>
    <div className="color-card">
      <div className="color-swatch" style={{ background: '#1A1A17' }}></div>
      <div className="color-info">
        <div className="color-name">Charcoal</div>
        <div className="color-hex">#1A1A17</div>
        <div className="color-usage">Fondos oscuros, texto principal en fondos claros.</div>
      </div>
    </div>
    <div className="color-card">
      <div className="color-swatch" style={{ background: '#FAF6F1' }}></div>
      <div className="color-info">
        <div className="color-name">Cream</div>
        <div className="color-hex">#FAF6F1</div>
        <div className="color-usage">Fondo principal. Transmite calidez y elegancia.</div>
      </div>
    </div>
    <div className="color-card">
      <div className="color-swatch" style={{ background: '#C4A882' }}></div>
      <div className="color-info">
        <div className="color-name">Caramel</div>
        <div className="color-hex">#C4A882</div>
        <div className="color-usage">Detalles decorativos, separadores, acentos cálidos.</div>
      </div>
    </div>
  </div>

  <h3 style={{ fontFamily: '\'Cormorant Garamond\', serif', fontSize: '28px', marginBottom: '24px', color: 'var(--charcoal-light)' }}>Colores secundarios</h3>

  <div className="colors-secondary">
    <div className="color-chip">
      <div className="color-chip-swatch" style={{ background: '#F0EBE3' }}></div>
      <div className="color-chip-info">
        <div className="color-name">Sand</div>
        <div className="color-hex">#F0EBE3</div>
      </div>
    </div>
    <div className="color-chip">
      <div className="color-chip-swatch" style={{ background: '#B5C4A8' }}></div>
      <div className="color-chip-info">
        <div className="color-name">Mint</div>
        <div className="color-hex">#B5C4A8</div>
      </div>
    </div>
    <div className="color-chip">
      <div className="color-chip-swatch" style={{ background: '#7A9268' }}></div>
      <div className="color-chip-info">
        <div className="color-name">Sage</div>
        <div className="color-hex">#7A9268</div>
      </div>
    </div>
    <div className="color-chip">
      <div className="color-chip-swatch" style={{ background: '#6B5243' }}></div>
      <div className="color-chip-info">
        <div className="color-name">Mocha</div>
        <div className="color-hex">#6B5243</div>
      </div>
    </div>
    <div className="color-chip">
      <div className="color-chip-swatch" style={{ background: '#8B7355' }}></div>
      <div className="color-chip-info">
        <div className="color-name">Warm Brown</div>
        <div className="color-hex">#8B7355</div>
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ TIPOGRAFÍA ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">03 — Tipografía</span>
  <span className="page-number">04</span>
</div>

<div className="section-full type-section" style={{ padding: '80px 60px' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
    <span className="section-label" style={{ color: 'var(--caramel)' }}>Sistema tipográfico</span>
    <h2 className="section-title" style={{ color: 'var(--cream)', marginBottom: '60px' }}>Tres voces,<br />una identidad</h2>
  </div>

  <div className="type-grid">
    <div className="type-card">
      <div className="type-card-label">Display / Titulares</div>
      <div className="type-display">Cormorant<br />Garamond</div>
      <div className="type-specs">
        <span>Uso: H1, H2, citas, portadas</span>
        <span>Pesos: 300, 400, 600, 700</span>
        <span>Estilo: Elegante, editorial</span>
      </div>
    </div>

    <div className="type-card">
      <div className="type-card-label">Acento / Handwriting</div>
      <div className="type-accent">¡Hola, soy Eduardo!</div>
      <div className="type-specs" style={{ color: 'rgba(250,246,241,0.5)' }}>
        <span>Uso: Etiquetas, toques personales</span>
        <span>Fuente: Caveat</span>
        <span>Estilo: Cálido, humano, cercano</span>
      </div>
    </div>

    <div className="type-card">
      <div className="type-card-label">Cuerpo / Body</div>
      <div className="type-body-demo">Creo sitios web para restaurantes y marcas premium que no solo se ven increíbles — sino que convierten.</div>
      <div className="type-specs">
        <span>Uso: Párrafos, UI, captions</span>
        <span>Fuente: DM Sans</span>
        <span>Estilo: Limpio, legible, moderno</span>
      </div>
    </div>
  </div>

  <div className="type-scale">
    <div className="type-scale-row">
      <span className="type-scale-label">H1 / 80px</span>
      <span style={{ fontFamily: '\'Cormorant Garamond\', serif', fontSize: '52px', fontWeight: '600', color: 'var(--cream)', lineHeight: '1' }}>Creo experiencias web</span>
    </div>
    <div className="type-scale-row">
      <span className="type-scale-label">H2 / 48px</span>
      <span style={{ fontFamily: '\'Cormorant Garamond\', serif', fontSize: '36px', fontWeight: '600', color: 'var(--cream)' }}>Proyectos seleccionados</span>
    </div>
    <div className="type-scale-row">
      <span className="type-scale-label">Accent</span>
      <span style={{ fontFamily: '\'Caveat\', cursive', fontSize: '28px', color: 'var(--caramel)' }}>¡Así se escribe un caption!</span>
    </div>
    <div className="type-scale-row">
      <span className="type-scale-label">Body / 16px</span>
      <span style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '15px', color: 'rgba(250,246,241,0.6)' }}>Especializado en restaurantes y marcas premium en México.</span>
    </div>
    <div className="type-scale-row">
      <span className="type-scale-label">Small / 12px</span>
      <span style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '12px', color: 'rgba(250,246,241,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>DISEÑO WEB · CANCÚN, MX · 2025</span>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ LOGO / WORDMARK ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">04 — Wordmark & Aplicaciones</span>
  <span className="page-number">05</span>
</div>

<div className="section logo-section">
  <span className="section-label">Marca personal</span>
  <h2 className="section-title">Wordmark en<br />todos los fondos</h2>

  <div className="logo-grid">
    <div className="logo-card bg-cream">
      <div className="wordmark-light">Leal Pastelin</div>
      <div className="wordmark-tagline">Desarrollador Web</div>
      <div className="logo-card-label" style={{ marginTop: '20px' }}>Sobre fondo claro</div>
    </div>
    <div className="logo-card bg-dark">
      <div className="wordmark-dark">Leal Pastelin</div>
      <div className="wordmark-tagline-light">Desarrollador Web</div>
      <div className="logo-card-label" style={{ color: 'var(--text-muted)', marginTop: '20px' }}>Sobre fondo oscuro</div>
    </div>
    <div className="logo-card bg-forest">
      <div className="wordmark-dark">Leal Pastelin</div>
      <div className="wordmark-tagline-light">Desarrollador Web</div>
      <div className="logo-card-label" style={{ color: 'rgba(250,246,241,0.4)', marginTop: '20px' }}>Sobre verde bosque</div>
    </div>
    <div className="logo-card bg-sand">
      <div className="wordmark-light">Leal Pastelin</div>
      <div className="wordmark-tagline">Desarrollador Web</div>
      <div className="logo-card-label" style={{ marginTop: '20px' }}>Sobre fondo sand</div>
    </div>
  </div>

  <div style={{ background: 'var(--sand)', borderRadius: '20px', padding: '40px', marginTop: '8px' }}>
    <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>Reglas de uso del wordmark</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      <div>
        <p style={{ fontSize: '13px', color: 'var(--forest)', fontWeight: '600', marginBottom: '8px' }}>✓ Sí hacer</p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>Usar sobre fondos sólidos del sistema · Mantener el tamaño mínimo de 20px · Respetar el espacio de respiro alrededor</p>
      </div>
      <div>
        <p style={{ fontSize: '13px', color: 'var(--mocha)', fontWeight: '600', marginBottom: '8px' }}>✗ No hacer</p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>Cambiar la tipografía · Usar sobre fondos con poco contraste · Distorsionar proporciones · Agregar efectos de sombra</p>
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ VOZ Y TONO ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">05 — Voz y Tono</span>
  <span className="page-number">06</span>
</div>

<div className="section">
  <span className="section-label">Comunicación</span>
  <h2 className="section-title">Cómo habla<br />la marca</h2>

  <div className="voice-grid">
    <div className="voice-do">
      <div className="voice-header">
        <span className="voice-badge do">✓ Sí decimos</span>
      </div>
      <div className="voice-item">
        <strong>Cercano y profesional</strong>
        "¿Tu restaurante merece una web que esté a la altura? Hablemos."
      </div>
      <div className="voice-item">
        <strong>Resultados concretos</strong>
        "Este sitio cargó 3x más rápido después de la optimización."
      </div>
      <div className="voice-item">
        <strong>Storytelling visual</strong>
        "La Moresca tenía una historia increíble. Mi trabajo fue contarla en digital."
      </div>
      <div className="voice-item">
        <strong>Humano y auténtico</strong>
        "Trabajé en esto tomando un café desde Mérida. Así se hace."
      </div>
      <div className="voice-item">
        <strong>Educativo sin presumir</strong>
        "Esto se llama LCP. Es lo que determina si Google te penaliza o no."
      </div>
    </div>

    <div className="voice-dont">
      <div className="voice-header">
        <span className="voice-badge dont">✗ No decimos</span>
      </div>
      <div className="voice-item">
        <strong>Corporativo y frío</strong>
        "Ofrezco soluciones integrales de desarrollo web con enfoque en UX."
      </div>
      <div className="voice-item">
        <strong>Vago y genérico</strong>
        "Hago páginas web de calidad para todo tipo de negocios."
      </div>
      <div className="voice-item">
        <strong>Demasiado técnico</strong>
        "Implemento arquitecturas JAMstack con SSR y edge computing."
      </div>
      <div className="voice-item">
        <strong>Arrogante</strong>
        "Soy el mejor desarrollador de México."
      </div>
      <div className="voice-item">
        <strong>Inseguro</strong>
        "No sé si esto te sirva, pero por si acaso..."
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ PILARES DE CONTENIDO ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">06 — Pilares de Contenido</span>
  <span className="page-number">07</span>
</div>

<div className="section">
  <span className="section-label">Estrategia de contenido</span>
  <h2 className="section-title">Qué publicar<br />en Instagram</h2>

  <div className="pillars-grid">
    <div className="pillar-card">
      <span className="pillar-emoji">🛠️</span>
      <div className="pillar-name">Tips Técnicos</div>
      <div className="pillar-desc">Educas a tu audiencia sobre diseño y rendimiento web.</div>
      <div className="pillar-examples">
        · Cómo mejorar el LCP<br />
        · Qué hace un buen sitio<br />
        · Errores comunes en web<br />
        · Herramientas que uso
      </div>
      <div className="pillar-pct">30%</div>
    </div>

    <div className="pillar-card">
      <span className="pillar-emoji">✨</span>
      <div className="pillar-name">Casos de Éxito</div>
      <div className="pillar-desc">Muestras tu trabajo real con contexto y resultados.</div>
      <div className="pillar-examples">
        · Before & After<br />
        · Proceso de un proyecto<br />
        · Métricas obtenidas<br />
        · Testimoniales de clientes
      </div>
      <div className="pillar-pct">25%</div>
    </div>

    <div className="pillar-card">
      <span className="pillar-emoji">🎬</span>
      <div className="pillar-name">Vida & Proceso</div>
      <div className="pillar-desc">Humanizas la marca mostrando quién eres tú.</div>
      <div className="pillar-examples">
        · Day in the life<br />
        · Setup de trabajo<br />
        · Detrás de cámaras<br />
        · Gustos personales
      </div>
      <div className="pillar-pct">20%</div>
    </div>

    <div className="pillar-card">
      <span className="pillar-emoji">💡</span>
      <div className="pillar-name">Valor para Clientes</div>
      <div className="pillar-desc">Contenido que habla directamente a tu cliente ideal.</div>
      <div className="pillar-examples">
        · Por qué tu restaurante<br />
        · necesita web propia<br />
        · Preguntas frecuentes<br />
        · Checklist antes de contratar
      </div>
      <div className="pillar-pct">15%</div>
    </div>

    <div className="pillar-card">
      <span className="pillar-emoji">🌿</span>
      <div className="pillar-name">Inspiración</div>
      <div className="pillar-desc">Diseños, tendencias y referencias que amas.</div>
      <div className="pillar-examples">
        · Sitios que me inspiran<br />
        · Paletas de color<br />
        · Tendencias de diseño<br />
        · Recomendaciones
      </div>
      <div className="pillar-pct">10%</div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ GRID DE INSTAGRAM ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">07 — Grid de Instagram</span>
  <span className="page-number">08</span>
</div>

<div className="grid-pattern">
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
    <span className="section-label">Planificación visual</span>
    <h2 className="section-title" style={{ marginBottom: '32px' }}>Así se ve tu<br />feed ideal</h2>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', fontSize: '14px', lineHeight: '1.7' }}>Alterna entre fondos oscuros (charcoal/forest), fondos cálidos (cream/sand) y piezas con color (caramel/mint) para crear un ritmo visual atractivo y coherente.</p>

    <div className="grid-visual">
      <div className="gc-1 grid-cell"><span style={{ fontFamily: '\'Cormorant Garamond\',serif' }}>Tip #1</span></div>
      <div className="gc-2 grid-cell"></div>
      <div className="gc-3 grid-cell"><span style={{ fontFamily: '\'DM Sans\',sans-serif' }}>Caso de éxito</span></div>
      <div className="gc-4 grid-cell"><span style={{ fontFamily: '\'Cormorant Garamond\',serif', color: 'var(--cream)' }}>Personal</span></div>
      <div className="gc-5 grid-cell"><span>Behind the scenes</span></div>
      <div className="gc-6 grid-cell"><span style={{ fontFamily: '\'Cormorant Garamond\',serif' }}>Tip #2</span></div>
      <div className="gc-7 grid-cell"></div>
      <div className="gc-8 grid-cell"><span style={{ fontFamily: '\'DM Sans\',sans-serif', color: 'rgba(250,246,241,0.6)' }}>Proyecto nuevo</span></div>
      <div className="gc-9 grid-cell"><span style={{ fontFamily: '\'Cormorant Garamond\',serif' }}>Quote</span></div>
      <div className="gc-10 grid-cell"><span>Inspiración</span></div>
      <div className="gc-11 grid-cell"><span style={{ fontFamily: '\'Cormorant Garamond\',serif' }}>Tip #3</span></div>
      <div className="gc-12 grid-cell"></div>
      <div className="gc-13 grid-cell"><span style={{ fontFamily: '\'Cormorant Garamond\',serif' }}>Proceso</span></div>
      <div className="gc-14 grid-cell"><span style={{ fontFamily: '\'DM Sans\',sans-serif', color: 'rgba(250,246,241,0.5)', fontSize: '11px' }}>Para restaurantes</span></div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '32px' }}>
      <div style={{ padding: '20px', background: 'var(--charcoal)', borderRadius: '12px' }}>
        <div style={{ width: '16px', height: '16px', background: 'var(--charcoal)', border: '2px solid var(--caramel)', borderRadius: '4px', display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}></div>
        <span style={{ fontSize: '12px', color: 'var(--cream)' }}>Charcoal / Forest — Contenido técnico</span>
      </div>
      <div style={{ padding: '20px', background: 'var(--cream)', borderRadius: '12px', border: '1px solid var(--caramel)' }}>
        <div style={{ width: '16px', height: '16px', background: 'var(--cream)', border: '2px solid var(--caramel)', borderRadius: '4px', display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}></div>
        <span style={{ fontSize: '12px', color: 'var(--charcoal-light)' }}>Cream / Sand — Contenido personal</span>
      </div>
      <div style={{ padding: '20px', background: 'var(--caramel)', borderRadius: '12px' }}>
        <div style={{ width: '16px', height: '16px', background: 'var(--caramel)', border: '2px solid var(--mocha)', borderRadius: '4px', display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}></div>
        <span style={{ fontSize: '12px', color: 'var(--charcoal-light)' }}>Caramel / Mint — Inspiración y casos</span>
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ PLANTILLAS DE POSTS ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">08 — Plantillas de Posts</span>
  <span className="page-number">09</span>
</div>

<div className="section">
  <span className="section-label">Diseño de contenido</span>
  <h2 className="section-title">Plantillas para<br />cada tipo de post</h2>

  <div className="ig-grid">
    {/* Post 1: Tip técnico */}
    <div className="ig-post">
      <div className="ig-1" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span className="ig-tag">Tips de diseño web 🛠️</span>
          <div className="ig-title" style={{ marginTop: '16px' }}>3 errores que arruinan tu web</div>
          <div className="ig-body" style={{ marginTop: '12px' }}>Que cometen los dueños de restaurantes sin saberlo...</div>
        </div>
        <div className="ig-footer">
          <span className="ig-handle">@lealpastelin</span>
          <div className="ig-dot"></div>
        </div>
        <div className="ig-number">01</div>
      </div>
    </div>

    {/* Post 2: Caso de éxito */}
    <div className="ig-post">
      <div className="ig-2" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span className="ig-tag-light">Proyecto entregado ✨</span>
          <div className="ig-title" style={{ marginTop: '16px' }}>De cero a 100 en Lighthouse</div>
          <div className="ig-body" style={{ marginTop: '12px' }}>Así optimicé el sitio de La Moresca para que cargue al instante.</div>
        </div>
        <div className="ig-footer">
          <span className="ig-handle">@lealpastelin</span>
          <div className="ig-dot-mint"></div>
        </div>
      </div>
    </div>

    {/* Post 3: Personal */}
    <div className="ig-post">
      <div className="ig-3" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span className="ig-tag-dark">Desde Mérida 🌊</span>
          <div className="ig-title-dark" style={{ marginTop: '16px' }}>El café es parte del proceso</div>
          <div className="ig-body-dark" style={{ marginTop: '12px' }}>Así se ve mi mañana típica antes de empezar a codear.</div>
        </div>
        <div className="ig-footer">
          <span className="ig-handle-dark">@lealpastelin</span>
          <div className="ig-dot-forest"></div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ CAPTIONS TEMPLATE ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">09 — Estructura de Captions</span>
  <span className="page-number">10</span>
</div>

<div className="section">
  <span className="section-label">Copywriting</span>
  <h2 className="section-title">Fórmulas para<br />escribir captions</h2>

  <div className="caption-card">
    <div className="caption-type">📌 Fórmula: Tip técnico</div>
    <div className="caption-text">
[GANCHO — pregunta o dato sorprendente]
¿Sabías que el 53% de usuarios abandona una web si tarda más de 3 segundos en cargar?

[DESARROLLO — explica el problema]
Para los restaurantes esto es crítico. Un menú que no carga = mesa vacía.

[SOLUCIÓN — tu propuesta]
La clave está en optimizar las imágenes y reducir el JavaScript innecesario. Yo lo llamo "dieta digital". 🌿

[CIERRE — CTA conversacional]
¿Tu web pasa la prueba? Comenta el nombre de tu negocio y te lo reviso gratis.

—
🍃 Eduardo Leal | Desarrollador web para restaurantes y marcas premium
📍 Mérida, Yucatán · México completo
🔗 lealpastelin.com

#desarrolladorweb #diseñoweb #webpararestaurantes #rendimientoweb
    </div>
  </div>

  <div className="caption-card">
    <div className="caption-type">✨ Fórmula: Caso de éxito</div>
    <div className="caption-text">
[CONTEXTO — quién era el cliente]
Grupo La Moresca llegó a mí con una web que tardaba 8 segundos en cargar. 😅

[PROCESO — qué hiciste]
Pasé dos semanas optimizando cada detalle: imágenes, fuentes, código, animaciones. Todo con un solo objetivo: velocidad sin sacrificar elegancia.

[RESULTADO — datos reales]
Resultado: de 8 segundos a menos de 2. De 45 en Lighthouse a 98. Y lo más importante: reservaciones en línea funcionando.

[HUMANIZAR]
Esto es lo que más me gusta de mi trabajo. No solo código bonito — resultados reales para negocios reales.

—
¿Tu restaurante merece lo mismo? Escríbeme al DM. 🌿

#casodeexito #diseñowebmexico #restaurantes #webdesign
    </div>
  </div>

  <div className="caption-card">
    <div className="caption-type">🌊 Fórmula: Contenido personal</div>
    <div className="caption-text">
[MOMENTO COTIDIANO — relatable]
Son las 8am, tengo mi café, los gatos rondando y un proyecto nuevo en la pantalla.

[REFLEXIÓN — conecta con valores de marca]
A veces la gente cree que hacer una buena web es solo técnica. Pero yo creo que es más parecido a cocinar: ingredientes de calidad, atención al detalle y amor por lo que haces. 🍃

[INVITACIÓN — abre conversación]
¿Cómo arrancas tú tu día de trabajo?

—
Eduardo Leal | Desarrollador web desde Mérida 🌊
#vidadefreelance #trabajoremoto #merida #desarrolladorweb
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ HASHTAGS ═══════════════════════════════════════ */}
<div className="page-header">
  <span className="page-header-logo">Leal Pastelin</span>
  <span className="page-header-section">10 — Banco de Hashtags</span>
  <span className="page-number">11</span>
</div>

<div className="section">
  <span className="section-label">Alcance orgánico</span>
  <h2 className="section-title">Tu banco de<br/>hashtags</h2>

  <div className="hashtag-grid">
    <div className="hashtag-group">
      <h4>🎯 Nicho principal</h4>
      <div className="hashtag-list">
        <span className="hashtag">#desarrolladorweb</span>
        <span className="hashtag">#diseñowebmexico</span>
        <span className="hashtag">#webpararestaurantes</span>
        <span className="hashtag">#desarrolladorfrontend</span>
        <span className="hashtag">#agenciaweb</span>
        <span className="hashtag">#paginasweb</span>
        <span className="hashtag">#webdesignmexico</span>
        <span className="hashtag">#nextjs</span>
        <span className="hashtag">#reactdeveloper</span>
        <span className="hashtag">#freelancedev</span>
      </div>
    </div>

    <div className="hashtag-group">
      <h4>🍽️ Industria restaurantera</h4>
      <div className="hashtag-list">
        <span className="hashtag">#restaurantesmexico</span>
        <span className="hashtag">#marketingrestaurantes</span>
        <span className="hashtag">#gastronomíamexico</span>
        <span className="hashtag">#restaurantedigital</span>
        <span className="hashtag">#negociosgastronomicos</span>
        <span className="hashtag">#marcapremium</span>
        <span className="hashtag">#brandingmexico</span>
        <span className="hashtag">#hosteleria</span>
      </div>
    </div>

    <div className="hashtag-group">
      <h4>📍 Geolocalización</h4>
      <div className="hashtag-list">
        <span className="hashtag">#merida</span>
        <span className="hashtag">#yucatan</span>
        <span className="hashtag">#cancun</span>
        <span className="hashtag">#guadalajara</span>
        <span className="hashtag">#mexicocity</span>
        <span className="hashtag">#emprendedoresmexico</span>
        <span className="hashtag">#freelancemexico</span>
        <span className="hashtag">#negociosmexico</span>
        <span className="hashtag">#mipyme</span>
      </div>
    </div>
  </div>

  <div style={{ background: 'var(--charcoal)', borderRadius: '20px', padding: '40px', marginTop: '40px' }}>
    <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--caramel)', marginBottom: '20px' }}>Estrategia de hashtags por post</p>
    <div className="hashtag-strategy-grid">
      <div style={{ borderLeft: '2px solid var(--forest)', paddingLeft: '20px' }}>
        <p style={{ fontSize: '13px', color: 'var(--cream)', fontWeight: '600', marginBottom: '8px' }}>5 hashtags grandes</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>+100K posts. Visibilidad masiva pero competida. Ej: #diseñoweb</p>
      </div>
      <div style={{ borderLeft: '2px solid var(--caramel)', paddingLeft: '20px' }}>
        <p style={{ fontSize: '13px', color: 'var(--cream)', fontWeight: '600', marginBottom: '8px' }}>10 hashtags medianos</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>10K–100K posts. Mejor balance entre alcance y competencia. Ej: #webpararestaurantes</p>
      </div>
      <div style={{ borderLeft: '2px solid var(--mint)', paddingLeft: '20px' }}>
        <p style={{ fontSize: '13px', color: 'var(--cream)', fontWeight: '600', marginBottom: '8px' }}>5 hashtags nicho</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>&lt;10K posts. Alta probabilidad de aparecer en el top. Ej: #desarrolladorwebmerida</p>
      </div>
    </div>
  </div>
</div>

{/* ═══════════════════════════════════════ CIERRE ═══════════════════════════════════════ */}
<div className="cover" style={{ minHeight: '40vh', padding: '60px' }}>
  <div className="cover-tag">Documento preparado con cuidado</div>
  <div className="cover-title" style={{ fontSize: '52px' }}>Leal Pastelin</div>
  <div className="cover-subtitle" style={{ fontSize: '18px', marginTop: '12px' }}>lealpastelin.com</div>
  <div className="cover-divider"></div>
  <div className="cover-meta">
    Este documento es confidencial y está diseñado exclusivamente para uso interno de la marca.<br />
    No distribuir sin autorización.
  </div>
</div>




        </>
    )
}