import { DefaultTheme } from 'vitepress'

export default [
    { text: 'Overview', link: '/lara-mag/' },
    { text: 'Screenshots', link: '/lara-mag/screenshots' },
    {
        text: 'Prologue',
        items: [
            { text: 'Release Notes', link: '/lara-mag/releases' },
            { text: 'Upgrade Guide', link: '/lara-mag/upgrade' },
        ],
    },
    {
        text: 'Getting Started',
        items: [
            { text: 'Installation', link: '/lara-mag/installation' },
            { text: 'SSL', link: '/lara-mag/ssl' },
            { text: 'License', link: '/lara-mag/license' },
        ],
    },
    {
        text: 'Available plugins',
        items: [
            { text: 'Contact form', link: '/lara-mag/plugin-contact-form' },
            { text: 'Gallery', link: '/lara-mag/plugin-gallery' },
            { text: 'Backup', link: '/lara-mag/plugin-backup' },
            { text: 'Language', link: '/lara-mag/plugin-language' },
            { text: 'Simple sliders', link: '/lara-mag/plugin-simple-slider' },
        ],
    },
    {
        text: 'Usage',
        items: [
            { text: 'Setup email', link: '/lara-mag/usage-email' },
            { text: 'Media - Setup Amazon S3', link: '/lara-mag/usage-media-s3' },
            { text: 'Media - Setup BunnyCDN', link: '/lara-mag/usage-media-bunnycdn' },
            { text: 'Media - Setup Wasabi', link: '/lara-mag/usage-media-wasabi' },
            { text: 'Analytics', link: '/lara-mag/usage-analytics' },
            { text: 'Rename theme', link: '/lara-mag/theme-rename' },
        ],
    },
] satisfies DefaultTheme.SidebarItem[];
