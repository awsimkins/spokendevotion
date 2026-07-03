# Deferred Items

Items intentionally held for later — not forgotten.

## Release Day Checklist

When a DistroKid release goes live, update these in one pass:

1. `partials/streaming-config.js` — set `releaseStatus` / per-release status, add `listenUrl` values
2. `partials/releases.js` — homepage featured item, list meta, note
3. Section JSON — `prayer/album.json`, `worship/worship.json`, `reflections/reflections.json`, `instrumental/instrumental.json`
4. Section HTML — badge, CTA text, meta descriptions, streaming copy
5. `streaming-platforms.js` — add live artist/store URLs as profiles appear
6. Bump cache versions on `site.js`, `streaming-config.js`, `releases.js` (shared `?v=` on all pages)
7. Update this file and `README.md`

## June 28, 2026 Release (DistroKid) — Done

| Release | Type | Status |
|---------|------|--------|
| **Resting in the Father I** | Instrumental album (20 tracks) | **Released** — Apple Music embed on `/instrumental/` |

Central config: `partials/streaming-config.js`, `instrumental/instrumental.json`.

### Credits

| Section | Credit |
|---------|--------|
| Instrumental (20) | Produced by Suno |

## July 3, 2026 Release Wave (DistroKid) — Done

Record label: **Spoken Devotion Music**. Upload date: **June 26, 2026**. Released **July 3, 2026**.

| Release | Type | UPC | Status |
|---------|------|-----|--------|
| **Prayers to the Father** | Album (10 tracks) | 882614576580 | **Released** |
| **Alone in an Empty Grave** | Reflections single | 882614548242 | **Released** |
| **Lost** | Reflections single | 882614540697 | **Released** |
| **Have Mercy on Me** | Worship single | 882614534603 | **Released** |
| **Here I Am, Lord** | Worship single | 882614532029 | **Released** |

Metadata: `partials/streaming-config.js`, `partials/releases.js`, section JSON files.

### Still pending after release

- Add **Spotify** artist URL to `streaming-platforms.js` when profile is live
- Add **Apple Music embeds** on `/worship/` and `/reflections/` when single album IDs are available
- Add **album.link** smart links if DistroKid provides post-release URLs

### Credits (site-wide)

| Section | Credit |
|---------|--------|
| Prayers (10) | Written by Ruby Rose and recited and produced by Suno |
| Confessions (3) | Written by Ruby Rose and recited and produced by Suno |
| Worship (2) | Lyrics by Anthony, produced and sang by Suno |
| Reflections (2) | Written by Anthony and sang by Suno |

## Confessions — DistroKid (pending)

**Open Hands**, **Receipts, Not Stages**, and **Wineglass on Concrete** still use hosted MP3 previews on `/confessions/` until uploaded to DistroKid. Remove MP3s and add streaming cards when HyperFollow links are ready. `.gitignore` now blocks future `*.mp3` commits.

## Formspark Contact Form

Contact form uses Formspark + Cloudflare Turnstile. Form ID and Turnstile site key are in `partials/contact-config.js`. Turnstile **secret key** lives only in the Formspark dashboard. Notification email: `contact@spokendevotion.com`.

## YouTube Migration for Audio

Prayer section: Prayer for Family, Prayer of Repentance, and Prayer of Need use YouTube embeds; remaining album tracks stream via DistroKid. Worship and Reflections singles use HyperFollow listen links (no hosted MP3s). Confessions still use hosted MP3s until DistroKid upload. Instrumental album has no hosted MP3s on the site.

## Banner Image Optimization

All section banners are in place (`main`, `bible`, `confession`, `instrumental`, `prayer`, `reflections`, `worship`). Optional: compress large PNGs (e.g. `instrumental.png`, `worship.png`) for faster loads.

## Site Infrastructure (lower priority)

- Standardize cache-bust versions across all pages
- Add `robots.txt` and `sitemap.xml`
- Consider `.github/` issue/PR templates
- Review LICENSE language vs. free-sharing ethos