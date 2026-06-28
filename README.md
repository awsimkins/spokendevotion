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

Navigation section links are in **alphabetical order**. The nav button reads **Contact** (the page title remains Contact Us). *Soon* badges mark sections still being built out.

| Section | Description | Link |
|---------|-------------|------|
| **Home** | Social row with handles, Matthew 10:8, Who We Are (1 John 3:18) | [Home](https://spokendevotion.com/) |
| **Bible** | Spoken Devotion Version (SDV) — book list with James via YouTube embed | [Bible](https://spokendevotion.com/bible/) |
| **Confessions** | Three spoken-word pieces — hosted MP3 previews until DistroKid upload | [Confessions](https://spokendevotion.com/confessions/) |
| **Contact** | Contact form via Formspark + Cloudflare Turnstile | [Contact](https://spokendevotion.com/contact/) |
| **Instrumental** | *Resting in the Father I* album — pre-save now, releases June 28, 2026 at midnight Central Time | [Instrumental](https://spokendevotion.com/instrumental/) |
| **Prayer** | *Prayers to the Father* album — pre-save now, releases July 3, 2026; YouTube videos + full text modals | [Prayer](https://spokendevotion.com/prayer/) |
| **Reflections** | *Alone in an Empty Grave* and *Lost* — written by Anthony, sang by Suno | [Reflections](https://spokendevotion.com/reflections/) |
| **Worship** | *Have Mercy on Me* and *Here I Am, Lord* — lyrics by Anthony, produced and sang by Suno; pre-save now | [Worship](https://spokendevotion.com/worship/) |

## Key Features

- **Homepage social row** — all platforms in one horizontal row with handles and amber-bordered cards
- **Who We Are** — clear statement that we are not an official ministry and do not accept donations
- **Footer** — reinforces free sharing, no donations, and personal creative ministry
- **Share buttons** — one-click copy of YouTube links (Prayer, Bible) or direct audio links (Confessions previews)
- **Modals** for full lyrics, poetry, and prayer text (keeps pages clean)
- **Book of James** available via YouTube video embed in the Bible section
- **Nav Soon badge** on Instrumental
- Clean, responsive design built with Tailwind CSS
- Shared navigation and footer loaded from `partials/`
- Content managed via JSON files for easy updates (`prayer.json`, `prayer/album.json`, `reflections.json`, `worship.json`, `lyrics.json`, `confessions.json`, `instrumental.json`)
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

Active on:
- [YouTube](https://www.youtube.com/@Spoken_Devotion) — `@Spoken_Devotion`
- [TikTok](https://www.tiktok.com/@spoken.devotion) — `@spoken.devotion`
- [Instagram](https://www.instagram.com/spoken_devotion/) — `@spoken_devotion`
- [Facebook](https://www.facebook.com/profile.php?id=61591326358064) — Spoken Devotion
- [X](https://x.com/Spoken_Devotion) — `@Spoken_Devotion`

Streaming — **Spoken Devotion Music** on DistroKid; pre-sales open now:

| Release | UPC | Date |
|---------|-----|------|
| [Resting in the Father I](https://distrokid.com/hyperfollow/spokendevotion/resting-in-the-father) (Instrumental, 20 tracks) | *(pending)* | June 28, 2026, midnight Central |
| [Prayers to the Father](https://distrokid.com/hyperfollow/spokendevotion/prayers-to-the-father) (album, 10 tracks) | 882614576580 | July 3, 2026 |
| [Alone in an Empty Grave](https://distrokid.com/hyperfollow/spokendevotion/alone-in-an-empty-grave) | 882614548242 | July 3, 2026 |
| [Lost](https://distrokid.com/hyperfollow/spokendevotion/lost) | 882614540697 | July 3, 2026 |
| [Have Mercy on Me](https://distrokid.com/hyperfollow/spokendevotion/have-mercy-on-me) | 882614534603 | July 3, 2026 |
| [Here I Am, Lord](https://distrokid.com/hyperfollow/spokendevotion/here-i-am-lord) | 882614532029 | July 3, 2026 |

All July 3 releases uploaded June 26, 2026. Spotify, Apple Music, and other major platforms at release.

## Contact

Use the [Contact](https://spokendevotion.com/contact/) page. Form submissions go through [Formspark](https://formspark.io/) — form ID in `partials/contact-config.js`; set `contact@spokendevotion.com` as the notification email in the Formspark dashboard.

## Still To Do

See also [`DEFERRED.md`](DEFERRED.md) for the full backlog. Priority items:

- [x] **X link** — live at [x.com/Spoken_Devotion](https://x.com/Spoken_Devotion)
- [x] **Reflections tracks** — *Alone in an Empty Grave* and *Lost* (both pre-save) on `/reflections/`
- [x] **Worship singles** — *Have Mercy on Me* and *Here I Am, Lord* (pre-save) on `/worship/`
- [x] **Resting in the Father I** — instrumental album on DistroKid; pre-sales open; releases June 28, 2026 at midnight Central Time
- [x] **Reflections banner** — `reflections.png` added
- [x] **Prayers to the Father** — album uploaded to DistroKid; pre-sales open; releases July 3, 2026
- [x] **YouTube migration (Prayer)** — Prayer for Family, Prayer of Repentance, and Prayer of Need use YouTube embeds
- [ ] **Confessions on DistroKid** — upload three tracks; replace hosted MP3s with pre-save / streaming cards
- [ ] **Streaming players** — add embed on `/instrumental/` after June 28, 2026 release; add embeds on `/reflections/` and `/worship/` after July 3, 2026 release
- [ ] **Nav Soon badge** — remove Instrumental badge after release goes live
- [ ] **Banner compression** — optionally compress large PNGs for faster page loads

## Vision

To create content that strengthens the heart, comforts the soul, and glorifies our Lord Jesus Christ through the power of spoken words — shared freely, with no ask in return.

---

© 2026 Spoken Devotion LLC • All glory to God the Father

*Spoken Devotion is part of the Simkins family ministries, alongside KanoJoes — wholesome family content for all ages.*