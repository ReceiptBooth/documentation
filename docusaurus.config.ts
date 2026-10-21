import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Receipt Booth Help Centre',
  tagline: 'Set up, run and look after your Receipt Booth.',
  favicon: 'img/favicon.png',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.receiptbooth.com',
  baseUrl: '/',

  organizationName: 'ReceiptBooth',
  projectName: 'documentation',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {
        name: 'description',
        content:
          'Setup guides, app help, printer and paper tips and troubleshooting for your Receipt Booth.',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Help Centre',
      logo: {
        alt: 'Receipt Booth',
        src: 'img/logo.png',
        srcDark: 'img/logo-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          to: '/docs/troubleshooting',
          label: 'Troubleshooting',
          position: 'left',
        },
        {
          to: '/docs/contact-support',
          label: 'Contact',
          position: 'left',
        },
        {
          href: 'https://receiptbooth.com/collections/paper',
          label: 'Buy paper',
          position: 'right',
        },
        {
          href: 'https://receiptbooth.com',
          label: 'receiptbooth.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Help',
          items: [
            {label: 'Getting started', to: '/docs/welcome'},
            {label: 'Troubleshooting', to: '/docs/troubleshooting'},
            {label: 'Contact support', to: '/docs/contact-support'},
          ],
        },
        {
          title: 'Receipt Booth',
          items: [
            {label: 'Website', href: 'https://receiptbooth.com'},
            {label: 'Rent a booth', href: 'https://receiptbooth.com/pages/rental'},
            {label: 'Buy paper', href: 'https://receiptbooth.com/collections/paper'},
            {label: 'FAQ', href: 'https://receiptbooth.com/pages/faq'},
          ],
        },
        {
          title: 'Follow',
          items: [
            {label: 'Instagram', href: 'https://instagram.com/receiptbooth'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Receipt Booth. Designed and manufactured in Singapore.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
