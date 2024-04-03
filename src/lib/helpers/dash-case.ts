/**
 * @example
 * Hello World => hello-world
 * Intro to JavaScript => intro-to-javascript
 */
export const dashCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');
};
