/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { LoadingIndicator } from '../../components';
import { ArticleFeed } from '../../components/ArticleFeed';
import { getFeedArticles } from '../../services/feedService';
import { getPageContext } from '../../state/pageContextState';
import { ArticleDetails } from '../../types';

export async function* ProfileFeedContent(this: Context, { username, feed, limit, offset }: { username: string; feed: string; limit: number; offset: number }) {
  let prevProps = { username, feed, limit, offset };

  let articles: ArticleDetails[] | null = null;
  let articlesCount = 0;
  let prevDisabled = false;
  let nextDisabled = false;

  for await ({ username, feed, limit, offset } of this) {
    let propsChanged = username !== prevProps.username || feed !== prevProps.feed || limit !== prevProps.limit || offset !== prevProps.offset;

    if (articles == null || propsChanged) {
      prevProps = { username, feed, limit, offset };

      yield (
        <div style="display:flex; justify-content:center; margin:50px;">
          <LoadingIndicator />
        </div>
      );

      const resp = feed === 'my' ? await getFeedArticles({ author: username, limit, offset }) : await getFeedArticles({ favorited: username, limit, offset });

      if (resp.hasErrors) {
        throw new Error('Error getting feed.');
      }

      articles = resp.response?.articles as ArticleDetails[];
      articlesCount = resp.response?.articlesCount as number;
      prevDisabled = offset === 0;
      nextDisabled = offset + limit >= articlesCount;
    }

    yield (
      <Fragment>
        {feed === 'my' && <ArticleFeed {...{ articles, prevDisabled, nextDisabled }} />}

        {feed === 'favorited' && <ArticleFeed {...{ articles, prevDisabled, nextDisabled }} />}
      </Fragment>
    );
  }
}
