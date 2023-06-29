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

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        }
      }
    }
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        // title: 'CHROMATIC',
        logo: {
          alt: 'Chromatic Protocol',
          src: 'img/chromatic-logo-full-row.svg',
          srcDark: 'img/chromatic-logo-full-row-white.svg',
          width: 200,
          height: 'auto'
        },
        items: [
          {
            type: 'dropdown',
            label: 'Development',
            description: 'for developers', // customized prop
            position: 'right',
            items: [
              {
                label: 'Github',
                description: 'external link to github',
                href: 'https://github.com',
                icon: 'github'
              },
              {
                type: 'docSidebar',
                description: 'contract reference',
                sidebarId: 'contractsSidebar',
                label: 'Contract',
                icon: 'contract'
              },
              {
                type: 'docSidebar',
                description: 'SDK reference',
                sidebarId: 'sdkSidebar',
                label: 'SDK',
                icon: 'sdk'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Articles',
            description: 'for detail explanation', // customized prop
            position: 'right',
            items: [
              {
                label: 'Twitter',
                description: 'external link to twitter',
                href: 'https://twitter.com',
                icon: 'twitter'
              },
              {
                label: 'Gitbook',
                description: 'external link to gitbook',
                href: 'https://gitbook.com',
                icon: 'gitbook'
              },
              {
                label: 'Medium',
                description: 'external link to medium',
                href: 'https://Medium.com',
                icon: 'medium'
              }
            ]
          },
          // launch app
          {
            href: 'https://github.com/facebook/chromatic-protocol',
            label: 'Launch App',
            isButton: true,
            style: { marginLeft: '40px', width: '168px' },
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        logo: {
          // href: '#',
          alt: 'Chromatic Protocol',
          src: 'img/chromatic-logo-row-white.svg',
          srcDark: 'img/chromatic-logo-row.svg',
          width: 200,
          height: 'auto',
          style: { margin: '0' }
        },
        links: [
          {
            // title: 'Apps',
            items: [
              {
                label: 'Trade',
                href: '#'
              },
              {
                label: 'Pools',
                href: '#'
              }
            ]
          },
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
                to: '/'
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
        additionalLanguages: ['solidity']
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' }
      }
    }),
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid']
}

module.exports = config
