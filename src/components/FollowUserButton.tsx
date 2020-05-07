/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { followUserEvent, unfollowUserEvent } from '../services/eventService';

export function* FollowUserButton(this: Context, { username, following }: { username: string; following: boolean }) {
  const handleFollow = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(followUserEvent({ username }));
  };

  const handleUnfollow = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(unfollowUserEvent({ username }));
  };

  for ({ username, following } of this) {
    yield (
      <Fragment>
        {following && (
          <button type="button" class="btn btn-sm btn-secondary" onclick={handleUnfollow}>
            <i class="ion-plus-round"></i>
            &nbsp; Unfollow {username}
          </button>
        )}

        {!following && (
          <button type="button" class="btn btn-sm btn-outline-secondary" onclick={handleFollow}>
            <i class="ion-plus-round"></i>
            &nbsp; Follow {username}
          </button>
        )}
      </Fragment>
    );
  }
}
