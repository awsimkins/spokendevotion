# Spoken Devotion

**Words that heal, lift, and draw us closer to God.**

A family creative project sharing spoken poetry, worship, prayer, and Scripture — focused on emotional strength and honoring Christ and God the Father.

## Who We Are

Spoken Devotion is a **personal creative ministry** — not a church or charity. We are ordinary working people who love God, creating and sharing personal devotion in our spare time. Our mission: to save one soul at a time.

If you'd like to support the ministry, you can on [Ko-fi](https://ko-fi.com/spokendevotion).

If something here moves you and you feel stirred to give, we gently invite you to turn that generosity toward someone near you: a neighbor in need, a friend carrying a burden, or a stranger who could use practical kindness. Let your gift become God's love made visible right where you live.

*Spoken Devotion LLC* holds copyright on our original content. The LLC is our legal entity for publishing; it does not change that this is a personal, freely shared creative work.

## Live Site

→ [spokendevotion.com](https://spokendevotion.com/)

**DNS note:** For `www.spokendevotion.com` to work, add a CNAME record at the domain registrar pointing `www` to this repository's GitHub Pages host. The apex domain (`spokendevotion.com`) is configured via the repo `CNAME` file.

## Current Site Sections

Navigation section links are in **alphabetical order**, followed by a YouTube link to the channel’s videos. The nav button reads **Contact** (the page title remains Contact Us).

| Section | Description | Link |
|---------|-------------|------|
| **Home** | Latest YouTube upload, daily prayers, Lost music video, release digest, social row, streaming platforms, Who We Are | [Home](https://spokendevotion.com/) |
| **Bible** | Spoken Devotion Version (SDV) — book list with James via YouTube embed | [Bible](https://spokendevotion.com/bible/) |
| **Contact** | Contact form via Formspark + Cloudflare Turnstile | [Contact](https://spokendevotion.com/contact/) |
| **Instrumental** | *Resting in the Father I* album — out now; per-track Apple Music Listen buttons | [Instrumental](https://spokendevotion.com/instrumental/) |
| **Prayer** | Daily prayer videos, plus *Prayers to the Father* — 9 YouTube videos, Apple Music Listen, full text modals | [Prayer](https://spokendevotion.com/prayer/) |
| **Reflections** | *Lost* (new music video) and *Alone in an Empty Grave* — Apple Music embeds + streaming links | [Reflections](https://spokendevotion.com/reflections/) |
| **Worship** | *Have Mercy on Me* and *Here I Am, Lord* — out now; Apple Music embeds + HyperFollow links | [Worship](https://spokendevotion.com/worship/) |

## Key Features

- **Homepage release digest** — data-driven via `partials/releases.js`
- **Homepage social row** — all platforms in one horizontal row with handles and amber-bordered cards
- **Streaming platform grid** — live artist links from `partials/streaming-platforms.js` (8 stores live; others show Coming Soon)
- **Apple Music embeds** — per-track Listen buttons on Prayer (IDs from `partials/apple-music-embeds.js`) and Instrumental (`instrumental.json`); Worship and Reflections set song IDs directly in `data-apple-embed`
- **Who We Are** — personal creative ministry (not a church or charity), with the mission line “to save one soul at a time”
- **Footer** — free to enjoy, with a gentle Ko-fi link if someone wants to support the ministry
- **Share buttons** — one-click copy of YouTube links (Prayer, Bible)
- **Modals** for full lyrics, poetry, and prayer text (keeps pages clean)
- **Book of James** available via YouTube video embed in the Bible section
- Clean, responsive design built with Tailwind CSS v3, precompiled to `css/tailwind.min.css` (see **Maintenance** below)
- Shared navigation and footer edited once in `partials/` and copied into every page by `scripts/sync-partials.py` (works without JavaScript)
- Content managed via JSON files for easy updates (`prayer.json`, `prayer/videos.json`, `prayer/daily.json`, `reflections.json`, `lyrics.json`, `instrumental.json`). `prayer/album.json` and `worship/worship.json` are release-metadata records only — no page loads them.
- Release metadata centralized in `partials/streaming-config.js`

## Banner Images

Section hero banners live in `/images/` at **1760×370** (or same ~4.5:1 aspect). All section banners are in place:

| File | Page |
|------|------|
| `main.png` | Home, Contact |
| `bible.png` | Bible |
| `instrumental.png` | Instrumental |
| `prayer.png` | Prayer |
| `reflections.png` | Reflections |
| `worship.png` | Worship |

## Platforms

### Social

- [YouTube](https://www.youtube.com/@Spoken_Devotion) — `@Spoken_Devotion`
- [TikTok](https://www.tiktok.com/@spoken.devotion) — `@spoken.devotion`
- [Instagram](https://www.instagram.com/spoken_devotion/) — `@spoken_devotion`
- [Facebook](https://www.facebook.com/profile.php?id=61591326358064) — Spoken Devotion
- [X](https://x.com/Spoken_Devotion) — `@Spoken_Devotion`

### Streaming — Spoken Devotion Music (DistroKid)

All releases are **out now**. Artist profiles live on **8 stores** (configured in `partials/streaming-platforms.js`):

| Store | Status |
|-------|--------|
| Apple Music | Live |
| Deezer | Live |
| Tidal | Live |
| YouTube Music | Live |
| Spotify | Live |
| Amazon Music | Live |
| iHeartRadio | Live |
| Anghami | Live |
| Pandora, SoundCloud, Audiomack, Shazam, Boomplay | Coming soon |

| Release | UPC | Date |
|---------|-----|------|
| [Resting in the Father I](https://distrokid.com/hyperfollow/spokendevotion/resting-in-the-father) (Instrumental, 20 tracks) | — | June 28, 2026 |
| [Prayers to the Father](https://distrokid.com/hyperfollow/spokendevotion/prayers-to-the-father) (album, 10 tracks) | 882614576580 | July 3, 2026 |
| [Alone in an Empty Grave](https://distrokid.com/hyperfollow/spokendevotion/alone-in-an-empty-grave) | 882614548242 | July 3, 2026 |
| [Lost](https://distrokid.com/hyperfollow/spokendevotion/lost) | 882614540697 | July 3, 2026 |
| [Have Mercy on Me](https://distrokid.com/hyperfollow/spokendevotion/have-mercy-on-me) | 882614534603 | July 3, 2026 |
| [Here I Am, Lord](https://distrokid.com/hyperfollow/spokendevotion/here-i-am-lord) | 882614532029 | July 3, 2026 |

## Contact

Use the [Contact](https://spokendevotion.com/contact/) page. Form submissions go through [Formspark](https://formspark.io/) — form ID in `partials/contact-config.js`; set `contact@spokendevotion.com` as the notification email in the Formspark dashboard.

## Still To Do

See also [`DEFERRED.md`](DEFERRED.md) for the full backlog. Priority items:

- [x] **X link** — live at [x.com/Spoken_Devotion](https://x.com/Spoken_Devotion)
- [x] **Reflections tracks** — *Alone in an Empty Grave* and *Lost* released on `/reflections/`
- [x] **Worship singles** — *Have Mercy on Me* and *Here I Am, Lord* released on `/worship/`
- [x] **Resting in the Father I** — instrumental album released June 28, 2026; Apple Music embeds on `/instrumental/`
- [x] **Reflections banner** — `reflections.png` added
- [x] **Prayers to the Father** — album released July 3, 2026
- [x] **July 3 singles** — Reflections and Worship singles released; listen links and Apple embeds on section pages
- [x] **YouTube migration (Prayer)** — nine album prayers on YouTube (`prayer/videos.json`); track 9 (Dedication) still pending
- [x] **Homepage release digest** — data-driven via `partials/releases.js`
- [x] **Apple Music embeds** — live on `/prayer/`, `/worship/`, `/reflections/`, `/instrumental/`
- [x] **Spotify, Amazon Music, iHeartRadio, Anghami** — artist links in `streaming-platforms.js`
- [x] **Nav Soon badge** — Instrumental badge removed
- [ ] **Prayer YouTube videos** — track 9 (Prayer of Dedication) still needs a channel video
- [ ] **Banner compression** — optionally compress large PNGs for faster page loads
- [x] **Cache version sync** — standardized `?v=` across all HTML pages
- [ ] **Site infrastructure** — `robots.txt`, `sitemap.xml` (see DEFERRED.md)

## Vision

To create content that strengthens the heart, comforts the soul, and glorifies our Lord Jesus Christ through the power of spoken words — on a mission to save one soul at a time.

---

© 2026 Spoken Devotion LLC • All glory to God the Father

## Maintenance

### Navigation and footer
Edit `partials/nav.html` or `partials/footer.html`, then run:

```bash
python3 scripts/sync-partials.py
```

This copies them into every page between `<!-- partial:nav -->` / `<!-- partial:footer -->` markers. Commit the updated pages. Don't hand-edit inside the markers. `partials/site.js` only fetches a partial at runtime if a page's placeholder is empty.

### Styles (Tailwind)
Pages use a precompiled stylesheet, `css/tailwind.min.css`, loaded last in `<head>`. After adding or changing Tailwind classes in any page or `partials/` file, rebuild it and bump its `?v=` on every page:

```bash
npx tailwindcss@3 -c tailwind.config.js -i src/tailwind.css -o css/tailwind.min.css --minify
```

### Sitemap
Update `lastmod` in `sitemap.xml` when pages change significantly; add new section pages to it.
