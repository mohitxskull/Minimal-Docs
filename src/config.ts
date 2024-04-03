import { AppConfigZod } from './lib/zod/app-config';
import { AppConfig as Config } from './lib/types';

const AppConfigRaw: Config = {
  Group: [
    {
      Name: 'Guide',
      Pages: [
        {
          Label: 'Introduction',
          Description: 'Get started with Minimal Docs',
        },
        {
          Label: 'Installation & Setup',
          Description: 'Install & setup Minimal Docs',
        },
        {
          Label: 'Content',
          Description: 'Add content to your documentation',
        },
        {
          Label: 'Deployment',
          Description: 'Deploy Minimal Docs to Anywhere 🚀',
        },
      ],
    },
    {
      Name: 'Components',
      Pages: [
        {
          Label: 'Navbar',
          Description: 'Customize the Navbar of Minimal Docs',
        },
        {
          Label: 'Footer',
          Description: 'Customize the Footer of Minimal Docs',
        },
        {
          Label: 'Code Block',
          Description: 'Customize the Code Block of Minimal Docs',
        },
      ],
    },
    {
      Name: 'Advanced',
      Pages: [
        {
          Label: 'SEO',
          Description: 'Optimize Minimal Docs for Search Engines',
        },
        {
          Label: 'Analytics',
          Description: 'Track user behavior with Analytics',
        },
        {
          Label: 'PWA',
          Description: 'Make Minimal Docs a Progressive Web App',
        },
      ],
    },
    {
      Name: 'Resources',
      Pages: [
        {
          Label: 'Changelog',
          Description: 'Stay up-to-date with the latest changes',
        },
        {
          Label: 'Contributing',
          Description: 'Contribute to Minimal Docs',
        },
        {
          Label: 'License',
          Description: 'Legal stuff about Minimal Docs',
        },
      ],
    },
  ],

  App: {
    Name: 'Minimal Docs',
    TagLine: 'Big impact, small footprint',

    Description:
      "Minimal Docs empowers you to build beautiful and functional documentation that enhances your project's communication and user experience.",

    BasePath: '/docs/',

    Github: 'https://github.com/XScale-Agency/Minimal-Docs/',
    Url: 'https://minimal.xscale.agency/',
    Twitter: 'mohitxskull',
  },
};

export const AppConfig = AppConfigZod.parse(AppConfigRaw);
