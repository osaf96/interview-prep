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
      copyright: `<a class="github-button" href="https://github.com/sponsors/shyamzzp" data-color-scheme="no-preference: light; light: dark; dark: light;" data-size="large" aria-label="Sponsor @shyamzzp on GitHub">Sponsor</a><a class="github-button" href="https://github.com/shyamzzp" data-color-scheme="no-preference: light; light: dark; dark: light;" data-size="large" aria-label="Follow @shyamzzp on GitHub">Follow @shyamzzp</a><a class="github-button" href="https://github.com/shyamzzp/interview-prep" data-color-scheme="no-preference: light; light: dark; dark: light;" data-size="large" aria-label="Star shyamzzp/interview-prep on GitHub">Star</a><a class="github-button" href="https://github.com/shyamzzp/interview-prep/discussions" data-color-scheme="no-preference: light; light: dark; dark: light;" data-size="large" aria-label="Discuss shyamzzp/interview-prep on GitHub">Discuss</a><a class="github-button" href="https://github.com/shyamzzp/interview-prep/archive/HEAD.zip" data-color-scheme="no-preference: light; light: dark; dark: light;" data-size="large" aria-label="Download shyamzzp/interview-prep on GitHub">Download</a>`,
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
  scripts: [
    {
      src: "https://buttons.github.io/buttons.js",
      defer: true,
      "data-domain": "https://shyamzzp.github.io",
    },
  ],
};
