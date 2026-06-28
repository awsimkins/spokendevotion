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
- **Instrumental** — *Resting in the Father I* on DistroKid pre-save; releases June 28, 2026 at midnight Central Time; tracklist in `instrumental/instrumental.json`.
- **Prayer** — *Prayers to the Father* album on DistroKid; pre-save live; releases July 3, 2026; DistroKid UPC and dates in `prayer/album.json`; YouTube embeds for three video prayers; full text in `prayer/prayer.json`.
- **Reflections** — *Alone in an Empty Grave* and *Lost* on DistroKid pre-save; streaming players after July 3, 2026; lyrics in `reflections/reflections.json`.
- **Worship** — *Have Mercy on Me* and *Here I Am, Lord* on DistroKid pre-save; streaming players after July 3, 2026; metadata in `worship/worship.json`, lyrics in `worship/lyrics.json`.
- **Confessions** — three tracks with hosted MP3 previews until DistroKid upload; text in `confessions/confessions.json`.
- Release URLs, UPCs, dates, record label, and credits: `partials/streaming-config.js` plus section JSON (`album.json`, `worship.json`, `reflections.json`, `instrumental.json`).
- Homepage includes social handles, Who We Are, and no-donation guidance; footer repeats the same message.
- Shared UI lives in `partials/` (`nav.html`, `footer.html`, `site.css`, `site.js`).
- Hero banners are in `/images/` at 1760×370; one PNG per section.

## Questions?

Feel free to email: **ruby@spokendevotion.com**

---

*All glory to God the Father through Christ our Lord.*