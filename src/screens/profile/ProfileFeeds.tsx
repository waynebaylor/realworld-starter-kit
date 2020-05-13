/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import classNames from 'classnames';
import { FollowUserButton, LoadingIndicator } from '../../components';
import { getProfile, GetProfileResp } from '../../services/profileService';
import { getPageContext, getQueryParams, watchPageContext } from '../../state/pageContextState';
import { ProfileFeedContent } from './ProfileFeedContent';
import { followUserListener, unfollowUserListener, prevPageListener, nextPageListener } from '../../services/eventService';
import { followUser, unfollowUser } from '../../services/followService';
import { ProfileDetails } from '../../types';
import * as qs from 'query-string';
import { getUser } from '../../state/userState';

const getUsername = () => (getPageContext() as PageJS.Context).params.username as string;

export async function* ProfileFeeds(this: Context, {}) {
  const loggedInUser = getUser();

  let username = getUsername();
  let { feed = 'my', limit = '10', offset = '0' } = getQueryParams();
  let limitParam = +(limit as string);
  let offsetParam = +(offset as string);

  let profile: ProfileDetails | null = null;

  watchPageContext(() => {
    username = getUsername();
    ({ feed = 'my', limit = '10', offset = '0' } = getQueryParams());
    limitParam = +(limit as string);
    offsetParam = +(offset as string);
    // don't need to call this.refresh()
  });

  this.addEventListener(
    ...followUserListener((detail) => {
      followUser(detail);
      (profile as ProfileDetails).following = true;
      this.refresh();
    })
  );

  this.addEventListener(
    ...unfollowUserListener((detail) => {
      unfollowUser(detail);
      (profile as ProfileDetails).following = false;
      this.refresh();
    })
  );

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
    // don't re-render the profile info if it hasn't changed.
    if (username !== profile?.username) {
      yield (
        <div style="display:flex; justify-content:center; margin:50px;">
          <LoadingIndicator />
        </div>
      );

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

                {loggedInUser?.username !== username && <FollowUserButton username={profile.username} following={profile.following} />}
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
                    <a class={classNames('nav-link', { active: feed === 'my' })} href={`/profile/${profile.username}?feed=my`}>
                      My Articles
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class={classNames('nav-link', { active: feed === 'favorited' })} href={`/profile/${profile.username}?feed=favorited`}>
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              <ProfileFeedContent username={username} feed={feed as string} limit={limitParam} offset={offsetParam} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
