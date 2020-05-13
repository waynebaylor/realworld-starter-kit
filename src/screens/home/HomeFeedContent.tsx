/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import page from 'page';
import * as qs from 'query-string';
import { LoadingIndicator } from '../../components';
import { ArticleFeed } from '../../components/ArticleFeed';
import { nextPageListener, prevPageListener } from '../../services/eventService';
import { getFeedArticles } from '../../services/feedService';
import { getPageContext, getQueryParams, watchPageContext } from '../../state/pageContextState';
import { ArticleDetails } from '../../types';

export async function* HomeFeedContent(this: Context, {}) {
  let { feed = 'global', tag = '', limit = '10', offset = '0' } = getQueryParams();
  let limitParam = +(limit as string);
  let offsetParam = +(offset as string);

  watchPageContext(() => {
    ({ feed = 'global', tag = '', limit = '10', offset = '0' } = getQueryParams());
    limitParam = +(limit as string);
    offsetParam = +(offset as string);
    // don't need to call this.refresh()
  });

  this.addEventListener(
    ...prevPageListener(() => {
      offsetParam = Math.max(0, (offsetParam -= limitParam));

      const pathname = (getPageContext() as PageJS.Context).pathname;
      const qp = { ...getQueryParams(), offset: offsetParam };

      page(`${pathname}?${qs.stringify(qp)}`);
    })
  );

  this.addEventListener(
    ...nextPageListener(() => {
      offsetParam += limitParam;

      const pathname = (getPageContext() as PageJS.Context).pathname;
      const qp = { ...getQueryParams(), offset: offsetParam };

      page(`${pathname}?${qs.stringify(qp)}`);
    })
  );

  for await ({} of this) {
    yield (
      <div style="display:flex; justify-content:center; margin:50px;">
        <LoadingIndicator />
      </div>
    );

    const resp = await getFeedArticles({ tag: tag as string, limit: limitParam, offset: offsetParam }, feed === 'your');

    if (resp.hasErrors) {
      throw new Error('Error getting feed.');
    }

    const articles = resp.response?.articles as ArticleDetails[];
    const articlesCount = resp.response?.articlesCount as number;
    const prevDisabled = offsetParam === 0;
    const nextDisabled = offsetParam + limitParam >= articlesCount;

    yield (
      <Fragment>
        {!tag && feed === 'your' && <ArticleFeed {...{ articles, prevDisabled, nextDisabled }} />}

        {!tag && feed === 'global' && <ArticleFeed {...{ articles, prevDisabled, nextDisabled }} />}

        {tag && <ArticleFeed {...{ articles, prevDisabled, nextDisabled }} />}
      </Fragment>
    );
  }
}
