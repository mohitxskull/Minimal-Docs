import { z } from 'zod';
import { AppConfigBaseZod, AppConfigZod } from './zod/app-config';

export type AppConfig = z.infer<typeof AppConfigBaseZod>;

export type Page = z.infer<
  typeof AppConfigZod
>['Group'][number]['Pages'][number];
