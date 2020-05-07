import { ServiceResp } from '.';
import { TagList } from '../types';

/**
 * get a list of popular tags
 */

export type PopularTagsResp = ServiceResp<TagList | null>;

export const popularTags = async (): Promise<PopularTagsResp> => {
  const resp = await fetch('https://conduit.productionready.io/api/tags', {
    method: 'GET',
    mode: 'cors',
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};
