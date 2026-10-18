/**
 * Homepage release digest — single source of truth.
 * On release day: set status to "released", update featured + items here,
 * then sync partials/streaming-config.js and section JSON files.
 */
window.SD_RELEASES = {
    featured: {
        badge: 'Official music video',
        title: 'Lost',
        meta: 'Single · July 3, 2026 · Streaming now',
        href: '/reflections/',
        linkText: 'Watch →'
    },
    items: [
        { title: 'Prayers to the Father', meta: 'Album · Out now', href: '/prayer/' },
        { title: 'Resting in the Father I', meta: 'Instrumental album · Out now', href: '/instrumental/' },
        { title: 'Alone in an Empty Grave', meta: 'Single · Out now', href: '/reflections/' },
        { title: 'Have Mercy on Me', meta: 'Single · Out now', href: '/worship/' },
        { title: 'Here I Am, Lord', meta: 'Single · Out now', href: '/worship/' }
    ],
    note: 'Our music is on all major platforms.'
};