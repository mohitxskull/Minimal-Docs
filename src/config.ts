import { type DocConfig as Config } from './lib/types';

export const DocConfig: Config = {
  Group: [
    {
      Name: 'Guide',
      Pages: [
        {
          Label: 'Introduction',
          Href: '/docs/guide/introduction',
          Description: 'Get started with Minimal Docs',
        },
        {
          Label: 'Installation & Setup',
          Href: '/docs/guide/installation',
          Description: 'Install & setup Minimal Docs',
        },
        {
          Label: 'Content',
          Href: '/docs/guide/content',
          Description: 'Add content to your documentation',
        },
        {
          Label: 'Deployment',
          Href: '/docs/guide/deployment',
          Description: 'Deploy Minimal Docs to Anywhere 🚀',
        },
      ],
    },
    {
      Name: 'Components',
      Pages: [
        {
          Label: 'Navbar',
          Href: '/docs/components/navbar',
          Description: 'Customize the Navbar of Minimal Docs',
        },
        {
          Label: 'Footer',
          Href: '/docs/components/footer',
          Description: 'Customize the Footer of Minimal Docs',
        },
        {
          Label: 'Code Block',
          Href: '/docs/components/code-block',
          Description: 'Customize the Code Block of Minimal Docs',
        },
      ],
    },
    {
      Name: 'Advanced',
      Pages: [
        {
          Label: 'SEO',
          Href: '/docs/advanced/seo',
          Description: 'Optimize Minimal Docs for Search Engines',
        },
        {
          Label: 'Analytics',
          Href: '/docs/advanced/analytics',
          Description: 'Track user behavior with Analytics',
        },
        {
          Label: 'PWA',
          Href: '/docs/advanced/pwa',
          Description: 'Make Minimal Docs a Progressive Web App',
        },
      ],
    },
    {
      Name: 'Resources',
      Pages: [
        {
          Label: 'Changelog',
          Href: '/docs/resources/changelog',
          Description: 'Stay up-to-date with the latest changes',
        },
        {
          Label: 'Contributing',
          Href: '/docs/resources/contributing',
          Description: 'Contribute to Minimal Docs',
        },
        {
          Label: 'License',
          Href: '/docs/resources/license',
          Description: 'Legal stuff about Minimal Docs',
        },
      ],
    },
  ],

  Doc: {
    Name: 'Minimal Docs',
    TagLine: 'Big impact, small footprint',

    Description:
      "Minimal Docs empowers you to build beautiful and functional documentation that enhances your project's communication and user experience.",

    Github: 'https://github.com/XScale-Agency/Minimal-Docs',
    Url: 'https://minimal.xscale.agency/',
    Twitter: 'mohitxskull',
  },
};
