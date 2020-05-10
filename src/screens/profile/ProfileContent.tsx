/** @jsx createElement */
import { createElement, Fragment, Context } from '@bikeshaving/crank';
import { getPageContext, watchPageContext, getQueryParams } from '../../state/pageContextState';
import { getProfile, GetProfileResp } from '../../services/profileService';
import { FollowUserButton } from '../../components';
import classNames from 'classnames';
import { ArticleFeed } from '../../components/ArticleFeed';
import { getProfileFeedArticles, getFavoriteProfileFeedArticels } from '../../services/feedService';

const getUsername = () => (getPageContext() as PageJS.Context).params.username as string;
const getSelectedFeed = () => getQueryParams().feed || 'my';

export async function* ProfileContent(this: Context, {}) {
  let username = getUsername();
  let activeTab = getSelectedFeed();
  let profile = null;

  watchPageContext(() => {
    username = getUsername();
    activeTab = getSelectedFeed();
    this.refresh();
  });

  for await ({} of this) {
    if (profile == null || profile.username !== username) {
      const resp: GetProfileResp = await getProfile({ username });

      if (resp.hasErrors) {
        throw new Error('Error getting profile.');
      }

      profile = resp.response.profile;
    }

    yield (
      <div class="profile-page">
        <div class="user-info">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1">
                <img src={profile.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} class="user-img" />
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>
                <FollowUserButton username={profile.username} following={profile.following} />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <div class="articles-toggle">
                <ul class="nav nav-pills outline-active">
                  <li class="nav-item">
                    <a class={classNames('nav-link', { active: activeTab === 'my' })} href={`/profile/${profile.username}?feed=my`}>
                      My Articles
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class={classNames('nav-link', { active: activeTab === 'favorited' })} href={`/profile/${profile.username}?feed=favorited`}>
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              {activeTab === 'my' && <ArticleFeed getFeedArticles={(req) => getProfileFeedArticles({ ...req, author: username })} />}

              {activeTab === 'favorited' && <ArticleFeed getFeedArticles={(req) => getFavoriteProfileFeedArticels({ ...req, favorited: username })} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
