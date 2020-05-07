/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { favoritePostEvent, unfavoritePostEvent } from '../../services/eventService';

export function* FavoritePostButton(this: Context, { slug, favorited, favoritesCount }: { slug: string; favorited: boolean; favoritesCount: number }) {
  const handleFavorite = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(favoritePostEvent({ slug }));
  };

  const handleUnfavorite = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(unfavoritePostEvent({ slug }));
  };

  for ({ favorited, favoritesCount } of this) {
    yield (
      <Fragment>
        {favorited && (
          <button type="button" class="btn btn-sm btn-primary" onclick={handleUnfavorite}>
            <i class="ion-heart"></i>
            &nbsp; Unfavorite Post <span class="counter">({favoritesCount})</span>
          </button>
        )}

        {!favorited && (
          <button type="button" class="btn btn-sm btn-outline-primary" onclick={handleFavorite}>
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">({favoritesCount})</span>
          </button>
        )}
      </Fragment>
    );
  }
}
