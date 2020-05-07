import { ServiceResp, ErrorResp } from '.';
import { getUser, isLoggedIn } from '../state/userState';
import { ArticleDetails, UserDetails } from '../types';

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
