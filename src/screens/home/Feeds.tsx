/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import classNames from 'classnames';
import { ArticleFeed } from '../../components/ArticleFeed';
import { getGlobalFeedArticles, getYourFeedArticles, getTagFeedArticles } from '../../services/feedService';
import { getQueryParams, watchPageContext } from '../../state/pageContextState';
import { isLoggedIn } from '../../state/userState';

const getSelectedFeed = () => getQueryParams().feed || 'global';
const getSelectedTag = () => getQueryParams().tag || '';

export function* Feeds(this: Context, {}) {
  let activeTab = getSelectedFeed();
  let selectedTag = getSelectedTag();

  watchPageContext(() => {
    activeTab = getSelectedFeed();
    selectedTag = getSelectedTag();
    this.refresh();
  });

  for ({} of this) {
    yield (
      <Fragment>
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            {isLoggedIn() && (
              <li class="nav-item">
                <a class={classNames('nav-link', { active: activeTab === 'your' })} href="/?feed=your">
                  Your Feed
                </a>
              </li>
            )}
            <li class="nav-item">
              <a class={classNames('nav-link', { active: !selectedTag && activeTab === 'global' })} href="/?feed=global">
                Global Feed
              </a>
            </li>
            {selectedTag && (
              <li class="nav-item">
                <a class="nav-link active" href={`/?tag=${selectedTag}`} onclick={(event: Event) => event.preventDefault()}>
                  #{selectedTag}
                </a>
              </li>
            )}
          </ul>
        </div>

        {!selectedTag && activeTab === 'your' && <ArticleFeed getFeedArticles={getYourFeedArticles} />}

        {!selectedTag && activeTab === 'global' && <ArticleFeed getFeedArticles={getGlobalFeedArticles} />}

        {selectedTag && <ArticleFeed getFeedArticles={getTagFeedArticles} />}
      </Fragment>
    );
  }
}
