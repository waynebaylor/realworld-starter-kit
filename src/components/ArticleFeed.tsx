/** @jsx createElement */
import { createElement, Fragment, Context, Children } from '@bikeshaving/crank';
import classNames from 'classnames';
import { LoadingIndicator } from '.';
import { ArticlesReq, ArticlesResp } from '../services/feedService';
import { ArticleDetails } from '../types';
import { ArticleList } from '../screens/home/ArticleList';
import { getQueryParams, watchPageContext, getPageContext } from '../state/pageContextState';
import * as qs from 'query-string';
import page from 'page';

const getOffset = () => +(getQueryParams().offset as string) || 0;
const getLimit = () => +(getQueryParams().limit as string) || 10;
const getTag = () => (getQueryParams().tag as string) || undefined;

export async function* ArticleFeed(this: Context, { getFeedArticles }: { getFeedArticles: (req: ArticlesReq) => Promise<ArticlesResp> }) {
  let limit = getLimit();
  let offset = getOffset();
  let tag = getTag();

  watchPageContext(() => {
    limit = getLimit();
    offset = getOffset();
    this.refresh();
  });

  const handlePrev = (event: Event) => {
    event.preventDefault();
    offset = Math.max(0, (offset -= limit));

    const pathname = (getPageContext() as PageJS.Context).pathname;
    const qp = { ...getQueryParams(), offset };

    page(`${pathname}?${qs.stringify(qp)}`);
  };

  const handleNext = (event: Event) => {
    event.preventDefault();
    offset += limit;

    const pathname = (getPageContext() as PageJS.Context).pathname;
    const qp = { ...getQueryParams(), offset };

    page(`${pathname}?${qs.stringify(qp)}`);
  };

  for await ({ getFeedArticles } of this) {
    yield (
      <div style="display:flex; justify-content:center; margin:50px;">
        <LoadingIndicator />
      </div>
    );

    const resp = await getFeedArticles({ limit, offset, tag });

    if (resp.hasErrors) {
      throw new Error('Error getting feed.');
    }

    const articles: ArticleDetails[] = resp.response?.articles as ArticleDetails[];
    const articlesCount: number = resp.response?.articlesCount as number;

    yield (
      <Fragment>
        {articlesCount === 0 && (
          <div class="article-preview">
            <em>None found.</em>
          </div>
        )}

        {articlesCount > 0 && <ArticleList articles={articles} />}

        <ul class="pagination">
          <li
            class={classNames('page-item', {
              disabled: offset === 0,
            })}
          >
            <a class="page-link" href="" onclick={handlePrev}>
              Previous
            </a>
          </li>
          <li
            class={classNames('page-item', {
              disabled: offset + limit >= articlesCount,
            })}
          >
            <a class="page-link" href="" onclick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
