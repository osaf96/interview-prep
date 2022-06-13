const path = require('path');

module.exports = {
  title: "interview-prep",
  tagline: "Notes regarding things I have learned",
  url: "https://shyamzzp.github.io",
  baseUrl: "/interview-prep/",
  favicon: "favicon.ico",
  organizationName: "shyamzzp",
  projectName: "interview-prep",
  onBrokenLinks: "ignore",
  themeConfig: {
    navbar: {
      title: "Interview Preparation Notes",

      items: [
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
          href: "https://github.com/shyamzzp/interview-prep",
          position: "right",
          className: "header-github-link navbar__item navbar__link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Shyam Suthar.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/oceanicNext"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
      additionalLanguages: ["java"],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "./extended-favicon-plugin"),
    path.resolve(__dirname, "./embedded-font-awesome-icons-plugin"),
    path.resolve(__dirname, "./collapse-sidebar-again-if-js-enabled-plugin"),
    path.resolve(__dirname, "./goatcounter-plugin"),
  ],
};
