import { ArticlesResp, ArticlesProps } from "../types";
import * as qs from 'query-string';


export const getArticles = async (props: ArticlesProps): Promise<ArticlesResp> => {
  const params = qs.stringify(props);
  const resp = await fetch(`https://conduit.productionready.io/api/articles?${params}`, {
    method: 'GET',
    mode: 'cors'
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};


