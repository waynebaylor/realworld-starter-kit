/** @jsx createElement */
import { createElement, Fragment, Context } from "@bikeshaving/crank";
import classNames from 'classnames';
import { isLoggedIn } from '../../state/userState';
import { YourFeed } from "./YourFeed";
import { GlobalFeed } from "./GlobalFeed";

type ActiveTab = 'your' | 'global' | 'tag';

export function* Feeds(this: Context) {
  let activeTab: ActiveTab = 'global';

  const changeTab = (event: Event, tab: ActiveTab) => {
    event.preventDefault();
    activeTab = tab
    this.refresh();
  };

  while(true) {
    yield (
      <Fragment>
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            {isLoggedIn() && (
              <li class="nav-item">
                <a class={classNames('nav-link', { active: activeTab === 'your' })} href="" onclick={(event: Event) => changeTab(event, 'your')}>Your Feed</a>
              </li>
            )}
            <li class="nav-item">
              <a class={classNames('nav-link', { active: activeTab === 'global' })} href="" onclick={(event: Event) => changeTab(event, 'global')}>Global Feed</a>
            </li>
          </ul>
        </div>

        {activeTab === 'your' && <YourFeed/>}

        {activeTab === 'global' && <GlobalFeed/>}
      </Fragment>
    );
  }
}