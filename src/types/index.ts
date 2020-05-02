export interface UserDetails {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: string
}

export interface ErrorDetails {
  errors: {
    [key: string]: string[]
  }
}

export interface UserState {
  user: UserDetails | null
}

export interface RegisterProps {
  username: string,
  email: string,
  password: string
}

export interface RegisterResp {
  hasErrors: boolean,
  response: UserDetails | ErrorDetails
}

export interface LoginProps {
  email: string,
  password: string
}

export interface LoginResp {
  hasErrors: boolean,
  response: UserDetails | ErrorDetails
}

export interface TagList {
  tags: string[]
}

export interface PopularTagsResp {
  hasErrors: boolean,
  response: TagList | null
}

export interface ArticlesProps {
  limit: number,
  offset: number
}

export interface ArticleDetails {
  slug: string,
  title: string,
  description: string,
  body: string,
  tagList: string[],
  createdAt: string,
  updatedAt: string,
  favorited: boolean,
  favoritesCount: number,
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  }
}

export interface ArticlesResp {
  hasErrors: boolean,
  response: {
    articles: ArticleDetails[],
    articlesCount: number
  } | null
}