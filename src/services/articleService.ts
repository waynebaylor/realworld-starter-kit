import { ErrorResp, ServiceResp } from '.';
import { getUser } from '../state/userState';
import { ArticleDetails, UserDetails } from '../types';
import { isLoggedIn } from './userService';

/**
 * publish an article
 */

export interface SingleArticleResp {
  article: ArticleDetails;
}

export interface PublishArticleReq {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export type PublishArticleResp = ServiceResp<SingleArticleResp | ErrorResp>;

export const publish = async (req: PublishArticleReq): Promise<PublishArticleResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch('https://conduit.productionready.io/api/articles', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`,
    },
    body: JSON.stringify({ article: req }),
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};

/**
 * get an article
 */

export interface GetArticleReq {
  slug: string;
}

export type GetArticleResp = ServiceResp<SingleArticleResp>;

export const getArticle = async (req: GetArticleReq): Promise<GetArticleResp> => {
  let headers = {};
  if (isLoggedIn()) {
    const user = getUser() as UserDetails;
    headers = { Authorization: `Token ${user.token}` };
  }

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}`, {
    method: 'GET',
    mode: 'cors',
    headers,
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};

/**
 * delete an article
 */

export interface DeleteArticleReq {
  slug: string;
}

export type DeleteArticleResp = ServiceResp<void>;

export const deleteArticle = async (req: DeleteArticleReq): Promise<DeleteArticleResp> => {
  let headers = {};
  if (isLoggedIn()) {
    const user = getUser() as UserDetails;
    headers = { Authorization: `Token ${user.token}` };
  }

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}`, {
    method: 'DELETE',
    mode: 'cors',
    headers,
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};

/**
 * edit an article
 */

export interface EditArticleReq {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export type EditArticleResp = ServiceResp<SingleArticleResp>;

export const editArticle = async (req: EditArticleReq): Promise<EditArticleResp> => {
  const user = getUser() as UserDetails;
  const slug = req.slug;
  delete req.slug;

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`,
    },
    body: JSON.stringify({ article: req }),
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};
