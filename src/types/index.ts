import { Content } from 'newt-client-js';

export interface Post extends Content {
  title: string;
  content: string;
}
