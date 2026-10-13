#!/usr/bin/env python3
"""Copy partials/nav.html and partials/footer.html into every page.

The nav and footer live in ONE place (partials/). Each page contains a copy
between marker comments so it works without JavaScript and is crawlable.
After editing a partial, run from the repo root:

    python3 scripts/sync-partials.py

and commit the updated pages. partials/site.js only fetches a partial at
runtime if a page's placeholder is empty (fallback for new pages).
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
PARTIALS = {"nav": "partials/nav.html", "footer": "partials/footer.html"}


def load(name):
    text = (ROOT / PARTIALS[name]).read_text(encoding="utf-8")
    text = re.sub(r"^\s*<!--.*?-->\s*", "", text, count=1, flags=re.S)  # drop header comment
    return text.strip()


def sync(page):
    html = page.read_text(encoding="utf-8")
    original = html
    for name in PARTIALS:
        block = (
            '<div id="%s-root"><!-- partial:%s (generated from %s; run scripts/sync-partials.py) -->\n'
            "%s\n<!-- /partial:%s --></div>" % (name, name, PARTIALS[name], load(name), name)
        )
        pattern = re.compile(
            r'<div id="%s-root">(?:<!-- partial:%s.*?<!-- /partial:%s -->)?</div>' % (name, name, name),
            re.S,
        )
        html, count = pattern.subn(lambda _m: block, html)
        if count != 1:
            raise SystemExit("%s: expected one %s-root placeholder, found %d" % (page, name, count))
    if html != original:
        page.write_text(html, encoding="utf-8")
        print("updated", page.relative_to(ROOT))


def main():
    pages = [ROOT / "index.html"] + sorted(ROOT.glob("*/index.html"))
    for page in pages:
        if "partials" in page.parts:
            continue
        sync(page)


if __name__ == "__main__":
    main()
