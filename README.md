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
| **Home**      | Featured content, mission, and quick access to audio | [Home](https://spokendevotion.com/) |
| **Worship**   | Original worship songs with lyrics in modal      | [Worship](https://spokendevotion.com/worship/) |
| **Prayer**    | Written & spoken prayers with full text modals   | [Prayer](https://spokendevotion.com/prayer/) |
| **Confessions** | Poetic reflections and honest spoken-word pieces | [Confessions](https://spokendevotion.com/confessions/) |
| **Bible**     | Spoken Devotion Version (SDV) — full book list with James via YouTube embed | [Bible](https://spokendevotion.com/bible/) |
| **Instrumental** | Quiet instrumental tracks for prayer and reflection | [Instrumental](https://spokendevotion.com/instrumental/) |
| **Contact**     | Contact form via Formspree (add form ID in config)  | [Contact](https://spokendevotion.com/contact/) |

## Key Features

- **Playable audio** directly on the homepage featured sections
- **Share buttons** — one-click copy of direct audio links
- **Modals** for full lyrics, poetry, and prayer text (keeps pages clean)
- **Book of James** available via YouTube video embed in the Bible section
- Clean, responsive design built with Tailwind CSS
- Shared navigation and footer loaded from `partials/`
- Content managed via JSON files for easy updates (`lyrics.json`, `confessions.json`, `prayer.json`)

## Platforms

Active on:
- TikTok
- Facebook
- Instagram
- X (Twitter)
- YouTube

Coming soon (God willing):
- Spotify
- Apple Music
- Other streaming platforms

## Contact

Use the [Contact Us](https://spokendevotion.com/contact/) page. Form submissions go through [Formspree](https://formspree.io/) — set your form ID in `partials/contact-config.js` (`formspreeId: 'your-id-here'`).

## Still To Do

See also [`DEFERRED.md`](DEFERRED.md) for the full backlog. Priority items for the next session:

- [ ] **Formspree form ID** — replace `YOUR_FORMSPREE_ID` in `partials/contact-config.js` with your Formspree form ID (create form at formspree.io, set notification email to `ruby@spokendevotion.com`)
- [ ] **Social media links** — homepage Connect section icons still point to `#`; add real TikTok, Facebook, Instagram, X, and YouTube profile URLs in `index.html`
- [ ] **Instrumental tracks** — add audio files and cards on `/instrumental/` when ready
- [ ] **YouTube migration** — move hosted MP3s to YouTube embeds instead of serving files from the repo
- [ ] **www DNS** — add CNAME for `www.spokendevotion.com` → `awsimkins.github.io`
- [ ] **Page banners** — add remaining banner images (`worship.png`, `prayer.png`, `confessions.png`, `bible.png`, `instrumental.png`) under `/images/`

## Vision

To create content that strengthens the heart, comforts the soul, and glorifies our Lord Jesus Christ through the power of spoken words.

---

© 2026 Spoken Devotion • All glory to God the Father

*Spoken Devotion is part of the Simkins family ministries, alongside KanoJoes — wholesome family content for all ages.*