/** @jsx createElement */
import { createElement, Fragment, Context } from "@bikeshaving/crank";
import classNames from "classnames";
import { isLoggedIn } from "../../state/userState";
import { unfavorite, favorite } from "../../services/favoriteService";

export function* FavoriteButton(this: Context, {slug, count, favorited}: {slug: string, count: number, favorited: boolean}) {
  const handleFavorite = (event: Event) => {
    if (isLoggedIn()) {
      if(favorited) {
        unfavorite(slug);
        count--;
        favorited = false;
      }
      else {
        favorite(slug)
        count++;
        favorited = true;
      }

      this.refresh();
    }
  };

  while(true) {
    yield (
      <button type="button" class={classNames('btn', 'btn-sm', 'pull-xs-right', { 'btn-outline-primary': !favorited, 'btn-primary': favorited })} onclick={handleFavorite}>
        <i class="ion-heart"></i> {count}
      </button>
    );
  }
}