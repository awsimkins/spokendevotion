# Spoken Devotion

**Words that heal, lift, and draw us closer to God.**

A family creative project sharing spoken poetry, worship, prayer, and Scripture — focused on emotional strength and honoring Christ and God the Father.

## Who We Are

Spoken Devotion is **not** a church, charity, or official ministry. We are ordinary working people who love God, creating and sharing personal devotion in our spare time. We do **not** ask for donations and are not seeking support, recognition, or reward — we simply want to share God's love freely.

If something here moves you and you feel stirred to give, we gently invite you to turn that generosity toward someone near you: a neighbor in need, a friend carrying a burden, or a stranger who could use practical kindness. Let your gift become God's love made visible right where you live.

*Spoken Devotion LLC* holds copyright on our original content. The LLC is our legal entity for publishing; it does not change that this is a personal, freely shared creative work.

## Live Site

→ [spokendevotion.com](https://spokendevotion.com/)

**DNS note:** For `www.spokendevotion.com` to work, add a CNAME record at your domain registrar pointing `www` to `awsimkins.github.io`. The apex domain (`spokendevotion.com`) is configured via the repo `CNAME` file.

## Current Site Sections

Navigation section links are in **alphabetical order**. The nav button reads **Contact** (the page title remains Contact Us).

| Section | Description | Link |
|---------|-------------|------|
| **Home** | Release digest, social row, streaming platforms, Who We Are | [Home](https://spokendevotion.com/) |
| **Bible** | Spoken Devotion Version (SDV) — book list with James via YouTube embed | [Bible](https://spokendevotion.com/bible/) |
| **Confessions** | Three spoken-word pieces — coming soon to streaming; poetry readable on site | [Confessions](https://spokendevotion.com/confessions/) |
| **Contact** | Contact form via Formspark + Cloudflare Turnstile | [Contact](https://spokendevotion.com/contact/) |
| **Instrumental** | *Resting in the Father I* album — out now; per-track Apple Music Listen buttons | [Instrumental](https://spokendevotion.com/instrumental/) |
| **Prayer** | *Prayers to the Father* album — out now; 7 YouTube videos, Apple Music Listen, full text modals | [Prayer](https://spokendevotion.com/prayer/) |
| **Reflections** | *Alone in an Empty Grave* and *Lost* — out now; Apple Music embeds + HyperFollow links | [Reflections](https://spokendevotion.com/reflections/) |
| **Worship** | *Have Mercy on Me* and *Here I Am, Lord* — out now; Apple Music embeds + HyperFollow links | [Worship](https://spokendevotion.com/worship/) |

## Key Features

- **Homepage release digest** — data-driven via `partials/releases.js`
- **Homepage social row** — all platforms in one horizontal row with handles and amber-bordered cards
- **Streaming platform grid** — live artist links from `partials/streaming-platforms.js` (8 stores live; others show Coming Soon)
- **Apple Music embeds** — per-track Listen buttons via `partials/apple-music-embeds.js` on Prayer, Worship, Reflections, and Instrumental
- **Who We Are** — clear statement that we are not an official ministry and do not accept donations
- **Footer** — reinforces free sharing, no donations, and personal creative ministry
- **Share buttons** — one-click copy of YouTube links (Prayer, Bible)
- **Modals** for full lyrics, poetry, and prayer text (keeps pages clean)
- **Book of James** available via YouTube video embed in the Bible section
- Clean, responsive design built with Tailwind CSS
- Shared navigation and footer loaded from `partials/`
- Content managed via JSON files for easy updates (`prayer.json`, `prayer/album.json`, `prayer/videos.json`, `reflections.json`, `worship.json`, `lyrics.json`, `confessions.json`, `instrumental.json`)
- Release metadata centralized in `partials/streaming-config.js`

## Banner Images

Section hero banners live in `/images/` at **1760×370** (or same ~4.5:1 aspect). All section banners are in place:

| File | Page |
|------|------|
| `main.png` | Home, Contact |
| `bible.png` | Bible |
| `confession.png` | Confessions |
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
- [x] **YouTube migration (Prayer)** — seven album prayers on YouTube (`prayer/videos.json`); three videos still pending (tracks 6, 9, 10)
- [x] **Homepage release digest** — data-driven via `partials/releases.js`
- [x] **Apple Music embeds** — live on `/prayer/`, `/worship/`, `/reflections/`, `/instrumental/`
- [x] **Spotify, Amazon Music, iHeartRadio, Anghami** — artist links in `streaming-platforms.js`
- [x] **Nav Soon badge** — Instrumental badge removed
- [ ] **Confessions on DistroKid** — upload three tracks; add Apple Music embeds on `/confessions/`
- [ ] **Prayer YouTube videos** — tracks 6, 9, 10 still need channel videos
- [ ] **Banner compression** — optionally compress large PNGs for faster page loads
- [x] **Cache version sync** — standardized `?v=` across all HTML pages
- [ ] **Site infrastructure** — `robots.txt`, `sitemap.xml` (see DEFERRED.md)

## Vision

To create content that strengthens the heart, comforts the soul, and glorifies our Lord Jesus Christ through the power of spoken words — shared freely, with no ask in return.

---

© 2026 Spoken Devotion LLC • All glory to God the Father

*Spoken Devotion is part of the Simkins family ministries, alongside KanoJoes — wholesome family content for all ages.*