// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BTBF SPO Lab.',
  tagline: '次のステージを目指すSPOオンラインサロン',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://btbf.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/spo-lab/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'btbf', // Usually your GitHub org/user name.
  projectName: 'spo-lab', // Usually your repo name.
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/twitter-card.png',
      navbar: {
        title: 'BTBF SPO Lab.',
        logo: {
          alt: 'BTBF SPO Lab logo.',
          src: 'img/color-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'サロン詳細',
          },
          {
            href: 'https://github.com/btbf',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'サロン',
            items: [
              {
                label: 'サロン詳細',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'SPO JAPAN GUILD',
                href: 'https://spojapanguild.net/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/btbfpark',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/btbf',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BTBF SPO Lab..`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
