import { z } from 'zod';
import { dashCase } from '../helpers/dash-case';

export const AppConfigBaseZod = z.object({
  Group: z.array(
    z.object({
      Name: z.string().min(3).max(50),
      Key: z
        .string()
        .regex(/^[a-z0-9-]+$/)
        .min(3)
        .max(50)
        .optional(),
      Pages: z.array(
        z.object({
          Label: z.string().min(3).max(50),
          Key: z
            .string()
            .regex(/^[a-z0-9-]+$/)
            .min(3)
            .max(50)
            .optional(),
          Description: z.string().min(3).max(200),
        })
      ),
    })
  ),
  App: z.object({
    Name: z.string().min(3).max(50),
    TagLine: z.string().min(3).max(100),
    Description: z.string().min(3).max(200),
    BasePath: z
      .string()
      .min(3)
      .max(50)
      .regex(/^\/[a-z0-9-]+\/$/),
    Github: z.string().url().startsWith('https://github.com/').endsWith('/'),
    Url: z.string().url().startsWith('https://').endsWith('/'),
    Twitter: z.string().min(3).max(50),
  }),
});

export const AppConfigZod = AppConfigBaseZod.transform((data) => {
  return {
    ...data,
    Group: data.Group.map((group) => {
      return {
        ...group,
        Pages: group.Pages.map((page) => {
          return {
            ...page,
            Href: `${data.App.BasePath}${group.Key ?? dashCase(group.Name)}/${
              page.Key ?? dashCase(page.Label)
            }`,
          };
        }),
      };
    }),
  };
});
