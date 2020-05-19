/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import classNames from 'classnames';
import { getQueryParams, watchPageContext } from '../../state/pageContextState';
import { isLoggedIn } from '../../state/userState';
import { HomeFeedContent } from './HomeFeedContent';
import { linkHref } from '../../utils';

export function* HomeFeeds(this: Context, {}) {
  let { feed = 'global', tag = '' } = getQueryParams();

  watchPageContext(() => {
    ({ feed = 'global', tag = '' } = getQueryParams());
    // don't need to call this.refresh() here
  });

  for ({} of this) {
    yield (
      <Fragment>
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            {isLoggedIn() && (
              <li class="nav-item">
                <a class={classNames('nav-link', { active: feed === 'your' })} href={linkHref('/?feed=your')}>
                  Your Feed
                </a>
              </li>
            )}
            <li class="nav-item">
              <a class={classNames('nav-link', { active: !tag && feed === 'global' })} href={linkHref('/?feed=global')}>
                Global Feed
              </a>
            </li>
            {tag && (
              <li class="nav-item">
                <a class="nav-link active" href={linkHref(`/?tag=${tag}`)} onclick={(event: Event) => event.preventDefault()}>
                  #{tag}
                </a>
              </li>
            )}
          </ul>
        </div>
        <HomeFeedContent />
      </Fragment>
    );
  }
}
