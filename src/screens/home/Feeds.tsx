/** @jsx createElement */
import { createElement, Fragment, Context } from '@bikeshaving/crank';
import classNames from 'classnames';
import { isLoggedIn } from '../../state/userState';
import { YourFeed } from './YourFeed';
import { GlobalFeed } from './GlobalFeed';
import { getPageContext, watchPageContext } from '../../state/pageContextState';
import * as qs from 'query-string';
import page from 'page';
import { TagFeed } from './TagFeed';

const getSelectedFeed = (pageContext: PageJS.Context) => {
  return qs.parse(pageContext.querystring).feed || 'global';
};

const getSelectedTag = (pageContext: PageJS.Context) {
  return qs.parse(pageContext.querystring).tag || '';
}

export function* Feeds(this: Context, {}) {
  let activeTab = getSelectedFeed(getPageContext() as PageJS.Context);
  let selectedTag = getSelectedTag(getPageContext() as PageJS.Context);

  watchPageContext(() => {
    activeTab = getSelectedFeed(getPageContext() as PageJS.Context);
    selectedTag = getSelectedTag(getPageContext() as PageJS.Context);
    this.refresh();
  });

  const changeTab = (event: Event, tab: string) => {
    event.preventDefault();
    page(`?feed=${tab}`);
  };

  for ({} of this) {
    yield (
      <Fragment>
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            {isLoggedIn() && (
              <li class="nav-item">
                <a class={classNames('nav-link', { active: activeTab === 'your' })} href="" onclick={(event: Event) => changeTab(event, 'your')}>
                  Your Feed
                </a>
              </li>
            )}
            <li class="nav-item">
              <a class={classNames('nav-link', { active: !selectedTag && activeTab === 'global' })} href="" onclick={(event: Event) => changeTab(event, 'global')}>
                Global Feed
              </a>
            </li>
            {selectedTag && (
              <li class="nav-item">
              <a class="nav-link active" href="" onclick={(event:Event) => event.preventDefault()}>
                #{selectedTag}
              </a>
            </li>
            )}
          </ul>
        </div>

        {!selectedTag && activeTab === 'your' && <YourFeed />}

        {!selectedTag && activeTab === 'global' && <GlobalFeed />}

        {selectedTag && <TagFeed tag={selectedTag as string} />}
      </Fragment>
    );
  }
}
