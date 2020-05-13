/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import classNames from 'classnames';
import { nextPageEvent, prevPageEvent } from '../services/eventService';
import { getQueryParams } from '../state/pageContextState';
import { ArticleDetails } from '../types';
import { ArticleList } from './ArticleList';

const getOffset = () => +(getQueryParams().offset as string) || 0;
const getLimit = () => +(getQueryParams().limit as string) || 10;
const getTag = () => (getQueryParams().tag as string) || undefined;

export function* ArticleFeed(
  this: Context,
  { articles, prevDisabled, nextDisabled }: { articles: ArticleDetails[]; prevDisabled: boolean; nextDisabled: boolean }
) {
  const handlePrev = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(prevPageEvent());
  };

  const handleNext = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(nextPageEvent());
  };

  for ({ articles, prevDisabled, nextDisabled } of this) {
    yield (
      <Fragment>
        {articles.length === 0 && (
          <div class="article-preview">
            <em>None found.</em>
          </div>
        )}

        {articles.length > 0 && <ArticleList articles={articles} />}

        <ul class="pagination">
          <li
            class={classNames('page-item', {
              disabled: prevDisabled,
            })}
          >
            <a class="page-link" href="" onclick={handlePrev}>
              Previous
            </a>
          </li>
          <li
            class={classNames('page-item', {
              disabled: nextDisabled,
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
