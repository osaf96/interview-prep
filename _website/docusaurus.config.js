const path = require('path');

module.exports = {
  title: 'interview-prep',
  tagline: 'Notes regarding things I have learned',
  url: 'https://interview-prep.shyamzzp.com',
  baseUrl: '/',
  favicon: 'favicon.ico',
  organizationName: 'shyamzzp',
  projectName: 'interview-prep',
  themeConfig: {
    navbar: {
      title: 'Interview Preparation Notes',
      
      links: [
        // {
        //   href: 'https://github.com/shyamzzp/interview-prep',
        //   label: 'GitHub',
        //   position: 'left',
        // },
        // {
        //   href: 'https://twitter.com/shyamzzp',
        //   label: 'Twitter',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/shyamzzp/interview-prep',
          position: 'right',
          className: 'header-github-link navbar__item navbar__link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `copyright © ${new Date().getFullYear()} shyamzzp.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    disableDarkMode: false,
    // algolia: {
    //   appId: '38H0OSE8H7',
    //   apiKey: '1119242d2ba32e7ccfd08f8ae82b3efe',
    //   indexName: 'mistermicheels_interview-prep',
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './extended-favicon-plugin'),
    path.resolve(__dirname, './embedded-font-awesome-icons-plugin'),
    path.resolve(__dirname, './collapse-sidebar-again-if-js-enabled-plugin'),
    path.resolve(__dirname, './goatcounter-plugin'),
  ],
};
