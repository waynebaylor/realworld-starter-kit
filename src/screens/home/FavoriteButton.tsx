/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { favoritePostEvent, unfavoritePostEvent } from '../../services/eventService';

export function* FavoriteButton(this: Context, { slug, favoritesCount, favorited }: { slug: string; favoritesCount: number; favorited: boolean }) {
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
          <button type="button" class="btn btn-sm pull-xs-right btn-primary" onclick={handleUnfavorite}>
            <i class="ion-heart"></i> {favoritesCount}
          </button>
        )}

        {!favorited && (
          <button type="button" class="btn btn-sm pull-xs-right btn-outline-primary" onclick={handleFavorite}>
            <i class="ion-heart"></i> {favoritesCount}
          </button>
        )}
      </Fragment>
    );
  }
}
