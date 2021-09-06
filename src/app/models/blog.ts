export interface Blog {
  id?:                  number;
  title?:               string;
  author?:              string;
  category?:            number[];
  shortDescription?: string;
  description?:         string;
  image?: string;
  date?:                Date;
}
