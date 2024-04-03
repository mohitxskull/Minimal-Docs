import { createTheme } from '@mantine/core';
import { Instrument_Sans } from 'next/font/google';

export const instrumentSans = Instrument_Sans({ subsets: ['latin'] });

export const DocTheme = createTheme({
  fontFamily: instrumentSans.style.fontFamily,
  fontFamilyMonospace: 'Space Mono, monospace',
  headings: {
    fontFamily: instrumentSans.style.fontFamily,
  },

  colors: {
    brown: [
      '#fcf9f6',
      '#f6eee7',
      '#f0e4d9',
      '#ebdaca',
      '#e4cdb7',
      '#dcbc9f',
      '#cea37e',
      '#ad7f58',
      '#a07553',
      '#815e46',
    ],
  },

  defaultRadius: 'md',

  primaryColor: 'brown',
  primaryShade: 9,
});
