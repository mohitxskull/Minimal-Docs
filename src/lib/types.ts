export type Page = {
  Label: string;
  Href: string;
  Description: string;
};

export type DocConfig = {
  Group: {
    Name: string;
    Pages: Page[];
  }[];

  Doc: {
    Name: string;
    TagLine: string;
    Description: string;

    Github: string;
    Url: string;
    Twitter: string;
  };
};
