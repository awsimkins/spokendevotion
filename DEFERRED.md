# Deferred Items

Items intentionally held for later — not forgotten.

## July 3, 2026 Release Wave (DistroKid)

Pre-sales are **open now**; full release **July 3, 2026** on Spotify, Apple Music, and other platforms.

| Release | Type | Pre-save |
|---------|------|----------|
| **Prayers to the Father** | Album (10 tracks) | [prayers-to-the-father](https://distrokid.com/hyperfollow/spokendevotion/prayers-to-the-father) |
| **Alone in an Empty Grave** | Reflections single | [alone-in-an-empty-grave](https://distrokid.com/hyperfollow/spokendevotion/alone-in-an-empty-grave) |
| **Lost** | Reflections single | [lost](https://distrokid.com/hyperfollow/spokendevotion/lost) |
| **Have Mercy on Me** | Worship single | [have-mercy-on-me](https://distrokid.com/hyperfollow/spokendevotion/have-mercy-on-me) |
| **Here I Am, Lord** | Worship single | [here-i-am-lord](https://distrokid.com/hyperfollow/spokendevotion/here-i-am-lord) |

Central config: `partials/streaming-config.js`. After release, replace homepage Spotify / Apple Music / YouTube Music “Coming soon” cards with live profile links and add streaming players to `/reflections/` and `/worship/`.

### Credits (site-wide)

| Section | Credit |
|---------|--------|
| Prayers (10) | Written by Ruby Rose and recited and produced by Suno |
| Confessions (3) | Written by Ruby Rose and recited and produced by Suno |
| Worship (2) | Lyrics by Anthony, produced and sang by Suno |
| Reflections (2) | Written by Anthony and sang by Suno |

## Confessions — DistroKid (pending)

**Open Hands**, **Receipts, Not Stages**, and **Wineglass on Concrete** still use hosted MP3 previews on `/confessions/` until uploaded to DistroKid. Remove MP3s and add pre-save / streaming cards when HyperFollow links are ready.

## Formspark Contact Form

Contact form uses Formspark + Cloudflare Turnstile. Form ID and Turnstile site key are in `partials/contact-config.js`. Turnstile **secret key** lives only in the Formspark dashboard. Notification email: `contact@spokendevotion.com`.

## Instrumental Tracks

Instrumental page is live in navigation (Soon badge) with a coming-soon message. Add real tracks when audio files are ready.

## YouTube Migration for Audio

Prayer section: Prayer for Family, Prayer of Repentance, and Prayer of Need use YouTube embeds; remaining album tracks stream via DistroKid July 3, 2026. Worship and Reflections singles have no hosted MP3s on the site (pre-save only). Confessions still use hosted MP3s until DistroKid upload.

## Banner Image Optimization

All section banners are in place (`main`, `bible`, `confession`, `instrumental`, `prayer`, `reflections`, `worship`). Optional: compress large PNGs (e.g. `instrumental.png`, `worship.png`) for faster loads.