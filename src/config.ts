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
