# Contributing to Spoken Devotion

Thank you for your interest in Spoken Devotion!

## What This Project Is

Spoken Devotion is a **personal creative project** — not a church, charity, or official ministry. We are a family of ordinary working people sharing worship, prayer, poetry, Scripture, and music freely. We do **not** accept donations or solicit support through this site.

If you have feedback, bug reports, or content suggestions, we welcome them.

## How You Can Help

- Suggesting new content (prayers, worship songs, reflections, confessions, or Bible narrations)
- Reporting bugs or issues with the website
- Suggesting improvements to design, copy, or user experience
- Technical feedback (performance, mobile experience, accessibility, etc.)

## How to Contribute (Website Editing)

Since most changes are made directly on GitHub:

1. Go to the file you want to edit.
2. Click the **pencil icon** (✏️) in the top right to edit the file.
3. Make your changes.
4. At the bottom of the page, under **Commit changes**, write a short message describing what you changed.
5. Select **Create a new branch for this commit and start a pull request**.
6. Click **Propose changes**.
7. On the next screen, click **Create pull request**.

## Site Structure Notes

- Navigation section links are in **alphabetical order**: Bible, Confessions, Instrumental, Prayer, Reflections, Worship.
- Nav contact button label is **Contact** (links to `/contact/`).
- Shared UI lives in `partials/`. The nav and footer are copied into each page by `python3 scripts/sync-partials.py` (run it after editing them). Tailwind is precompiled (see README → Maintenance). Files: (`nav.html`, `footer.html`, `site.css`, `site.js`, `streaming-config.js`, `streaming-platforms.js`, `releases.js`, `apple-music-embeds.js`).
- Hero banners are in `/images/` at 1760×370; one PNG per section.
- Homepage includes a data-driven release digest (`partials/releases.js`), social handles, streaming platform grid, Who We Are, and no-donation guidance; footer repeats the same message.

### Section pages (all releases out now as of July 3, 2026)

| Section | Content files | Playback |
|---------|---------------|----------|
| **Instrumental** | `instrumental/instrumental.json` | Apple Music Listen buttons per track; HyperFollow album link |
| **Prayer** | `prayer/prayer.json`, `prayer/videos.json` (`prayer/album.json` = metadata only, not loaded) | 7 YouTube embeds (tracks 1–5, 7–8); Apple Music Listen per track; full text modals |
| **Reflections** | `reflections/reflections.json` | Apple Music embeds + HyperFollow listen links; lyrics modals |
| **Worship** | `worship/lyrics.json` (`worship/worship.json` = metadata only, not loaded) | Apple Music embeds + HyperFollow listen links; lyrics modals |
| **Confessions** | `confessions/confessions.json` | Coming Soon cards; poetry readable in modals (no hosted MP3s) |
| **Bible** | inline in `bible/index.html` | Book of James via YouTube embed |
| **Contact** | `partials/contact-config.js`, `partials/contact-form.js` | Formspark + Cloudflare Turnstile |

### Release metadata

Central config: `partials/streaming-config.js` (UPCs, dates, listen URLs, release status). Section JSON files mirror status for each page. When a new DistroKid release goes live, follow the checklist in [`DEFERRED.md`](DEFERRED.md).

### Cache versions

HTML pages load shared partials with `?v=` query strings for cache busting. When you change any file in `partials/`, bump the matching `?v=` on **every** HTML page that loads it.

## Questions?

Feel free to email: **ruby@spokendevotion.com**

---

*All glory to God the Father through Christ our Lord.*