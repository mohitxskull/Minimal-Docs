import { type DocConfig as Config } from './lib/types';

export const DocConfig: Config = {
  Group: [
    {
      Name: 'Guide',
      Pages: [
        {
          Label: 'Introduction',
          Href: '/docs/introduction',
          Description: 'Get started with Minimal Docs',
        },
        {
          Label: 'Installation & Setup',
          Href: '/docs/installation',
          Description: 'Install & setup Minimal Docs',
        },
        {
          Label: 'Deployment',
          Href: '/docs/deployment',
          Description: 'Deploy Minimal Docs to Anywhere 🚀',
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
    Url: 'https://minimal-docs.xscale.agency',
    Twitter: 'mohitxskull',
  },
};
