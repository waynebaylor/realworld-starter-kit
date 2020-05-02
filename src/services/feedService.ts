import { ArticlesResp, ArticlesProps, UserDetails } from "../types";
import * as qs from 'query-string';
import { getUser, isLoggedIn } from "../state/userState";

export const getGlobalFeedArticles = async (props: ArticlesProps): Promise<ArticlesResp> => {
  let headers = {};
  if(isLoggedIn()) {
    headers = {Authorization: `Token ${getUser()?.token as string}`}
  }

  const params = qs.stringify(props);
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

export const getYourFeedArticles = async (props: ArticlesProps): Promise<ArticlesResp> => {
  const params = qs.stringify(props);
  const resp = await fetch(`https://conduit.productionready.io/api/articles/feed?${params}`, {
    method: 'GET',
    mode: 'cors',
    headers: { 
      Authorization: `Token ${getUser()?.token as string}` 
    }
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};


