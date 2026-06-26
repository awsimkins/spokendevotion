# Spoken Devotion

**Words that heal, lift, and draw us closer to God.**

A ministry of spoken poetry, worship, prayer, and Scripture — focused on emotional strength and honoring Christ and God the Father.

## Our Mission

To create content that strengthens the heart, comforts the soul, and glorifies our Lord Jesus Christ. Through spoken words, we seek to provide emotional healing, spiritual encouragement, and a deeper connection with God the Father and His Son.

## Live Site

→ [spokendevotion.com](https://spokendevotion.com/)

**DNS note:** For `www.spokendevotion.com` to work, add a CNAME record at your domain registrar pointing `www` to `awsimkins.github.io`. The apex domain (`spokendevotion.com`) is configured via the repo `CNAME` file.

## Current Site Sections

| Section       | Description                                      | Link |
|---------------|--------------------------------------------------|------|
| **Home**      | Mission, Scripture highlight, and social links   | [Home](https://spokendevotion.com/) |
| **Worship**   | Original worship songs with lyrics in modal      | [Worship](https://spokendevotion.com/worship/) |
| **Prayer**    | Written & spoken prayers via YouTube embed with full text modals | [Prayer](https://spokendevotion.com/prayer/) |
| **Confessions** | Poetic reflections and honest spoken-word pieces | [Confessions](https://spokendevotion.com/confessions/) |
| **Bible**     | Spoken Devotion Version (SDV) — full book list with James via YouTube embed | [Bible](https://spokendevotion.com/bible/) |
| **Instrumental** | Quiet instrumental tracks for prayer and reflection | [Instrumental](https://spokendevotion.com/instrumental/) |
| **Contact**     | Contact form via Formspark                       | [Contact](https://spokendevotion.com/contact/) |

## Key Features

- **Share buttons** — one-click copy of direct audio links
- **Modals** for full lyrics, poetry, and prayer text (keeps pages clean)
- **Book of James** available via YouTube video embed in the Bible section
- Clean, responsive design built with Tailwind CSS
- Shared navigation and footer loaded from `partials/`
- Content managed via JSON files for easy updates (`lyrics.json`, `confessions.json`, `prayer.json`)

## Banner images

Section hero banners live in `/images/` at **1760×370** (or same ~4.5:1 aspect). Naming matches the section folder where possible:

| File | Page |
|------|------|
| `main.png` | Home, Contact |
| `worship.png` | Worship |
| `prayer.png` | Prayer |
| `confession.png` | Confessions |
| `bible.png` | Bible |
| `instrumental.png` | Instrumental |

## Platforms

Active on:
- [YouTube](https://www.youtube.com/@Spoken_Devotion)
- [TikTok](https://www.tiktok.com/@spoken.devotion)
- [Instagram](https://www.instagram.com/spoken_devotion/)
- [Facebook](https://www.facebook.com/profile.php?id=61591326358064)

Coming soon (God willing):
- X (Twitter)
- Spotify
- Apple Music
- Other streaming platforms

## Contact

Use the [Contact Us](https://spokendevotion.com/contact/) page. Form submissions go through [Formspark](https://formspark.io/) — form ID in `partials/contact-config.js`; set `contact@spokendevotion.com` as the notification email in the Formspark dashboard.

## Still To Do

See also [`DEFERRED.md`](DEFERRED.md) for the full backlog. Priority items:

- [ ] **X link** — add profile URL when account is ready (homepage shows Coming Soon badge for now)
- [ ] **Instrumental tracks** — add audio cards on `/instrumental/` when ready
- [x] **YouTube migration (Prayer)** — Prayer for Family, Prayer of Repentance, and Prayer of Need now use YouTube embeds
- [ ] **YouTube migration (remaining)** — move any other hosted MP3s to YouTube embeds
- [ ] **Normalize banner dimensions** — resize any banners not yet at 1760×370

## Vision

To create content that strengthens the heart, comforts the soul, and glorifies our Lord Jesus Christ through the power of spoken words.

---

© 2026 Spoken Devotion LLC • All glory to God the Father

*Spoken Devotion is part of the Simkins family ministries, alongside KanoJoes — wholesome family content for all ages.*
