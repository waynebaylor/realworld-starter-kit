export interface UserDetails {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: string
}

export interface UserResp {
  user: UserDetails
}

export interface ErrorResp {
  errors: {
    [key: string]: string[]
  }
}

export interface UserState {
  user: UserDetails | null
}

export interface RegisterReq {
  username: string,
  email: string,
  password: string
}

export interface RegisterResp {
  hasErrors: boolean,
  response: UserResp | ErrorResp
}

export interface LoginReq {
  email: string,
  password: string
}

export interface LoginResp {
  hasErrors: boolean,
  response: UserResp | ErrorResp
}

export interface TagList {
  tags: string[]
}

export interface PopularTagsResp {
  hasErrors: boolean,
  response: TagList | null
}

export interface ArticlesReq {
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

export interface UpdateSettingsReq {
  email: string,
  username: string,
  bio: string,
  image: string,
  password: string
}

export interface UpdateSettingsResp {
  hasErrors: boolean,
  response: UserResp | ErrorResp
}