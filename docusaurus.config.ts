import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Open TutorAI',
  tagline: 'An open-source project designed to provide an educational and collaborative AI-powered platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://opentutorai.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pr-elhajji', // Usually your GitHub org/user name.
  projectName: 'open-tutor-ai-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        editCurrentVersion: true,
        sidebarPath: './sidebarsCommunity.js',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pr-elhajji/open-tutor-ai-CE/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pr-elhajji/open-tutor-ai-CE',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/opentutor-social-card.jpg',
    navbar: {
      title: 'Open TutorAI',
      logo: {
        alt: 'My Logo',
        width: 32,
        height: 32,
        src: '/img/logo.svg',
      },
      hideOnScroll:true,
      
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/community/support', 
          label: 'Community',
          sidebarId: 'tutorialSidebar', 
          position: 'left',
          },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/pr-elhajji/open-tutor-ai-CE',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub repository",          
        },
        {
          href: 'https://discord.gg/z5fMfrBzEF',
          position: 'right',
          className: "header-discord-link",
          "aria-label": "Discord community",  
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'My Logo',
        width: 100,
        height: 100,
        src: '/img/logo.svg',
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started/',
            },
            {
              label: 'Teachers',
              to: '/docs/features/teacher-features/',
            },
            {
              label: 'Students',
              to: '/docs/features/student-features/',
            },
            {
              label: 'Parents',
              to: '/docs/features/parent-features/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/z5fMfrBzEF',
            },
            {
              label: 'X',
              href: 'https://x.com/#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Community',
              to: '/community/support',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pr-elhajji/open-tutor-ai-CE',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open TutorAI, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
