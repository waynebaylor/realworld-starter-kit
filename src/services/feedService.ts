import { ArticlesResp, ArticlesReq, UserDetails } from "../types";
import * as qs from 'query-string';
import { getUser, isLoggedIn } from "../state/userState";

export const getGlobalFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => {
  const user = getUser() as UserDetails;

  let headers = {};
  if(isLoggedIn()) {
    headers = {Authorization: `Token ${user.token as string}`}
  }

  const params = qs.stringify(req);
  const resp = await fetch(`https://conduit.productionready.io/api/articles?${params}`, {
    method: 'GET',
    mode: 'cors',
    headers
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};

export const getYourFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => {
  const user = getUser() as UserDetails;

  const params = qs.stringify(req);
  const resp = await fetch(`https://conduit.productionready.io/api/articles/feed?${params}`, {
    method: 'GET',
    mode: 'cors',
    headers: { 
      Authorization: `Token ${user.token as string}` 
    }
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};


