// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CHROMATIC PROTOCOL',
  tagline: 'Documentation and Guides',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chromatic-protocol.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-preview/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '@chromatic-protocol', // Usually your GitHub org/user name.
  projectName: 'chromatic-protocol', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
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
          editUrl: 'https://github.com/chromatic-protocol/docs/tree/main/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/chromatic-protocol/docs/tree/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tiwtter-card.png',
      navbar: {
        title: 'CHROMATIC',
        logo: {
          alt: 'Site Logo',
          src: 'img/chromatic-logo.svg',
          srcDark: 'img/chromatic-logo-white.svg',
          width: 32,
          height: 32
        },
        items: [
          {
            to: '/governance',
            label: 'Governance',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Developers',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'contractsSidebar',
                label: 'Contract'
              },
              {
                type: 'docSidebar',
                sidebarId: 'sdkSidebar',
                label: 'SDK'
              }
            ]
          },
          // right side
          {
            href: 'https://github.com/facebook/chromatic-protocol',
            label: 'Launch App',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/chromatic-protocol'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chromatic-protocol'
              }
            ]
          },
          {
            title: 'Articles',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'Medium',
                href: 'https://medium.com/chromatic-protocol'
              }
            ]
          },
          {
            title: 'Github',
            items: [
              {
                label: 'frontend',
                href: 'https://github.com/'
              },
              {
                label: 'contracts',
                href: 'https://github.com/'
              }
            ]
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      }
    })
}

module.exports = config
