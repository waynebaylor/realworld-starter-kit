import { ParsedQuery } from 'query-string';

export interface UserDetails {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface UserState {
  user: UserDetails | null;
}

export interface PageContextState {
  context: PageJS.Context | null;
  queryParams: ParsedQuery<string>;
}

export interface TagList {
  tags: string[];
}

export interface ArticleDetails {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface CommentDetails {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface ProfileDetails {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
