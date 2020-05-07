/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { FollowUserButton } from '../../components/FollowUserButton';
import { isLoggedIn } from '../../state/userState';
import { ArticleDetails } from '../../types';
import { FavoritePostButton } from './FavoritePostButton';

export function* ArticleMeta(this: Context, { article }: { article: ArticleDetails }) {
  for ({ article } of this) {
    yield (
      <div class="article-meta">
        <a href={`/profile/${article.author.username}`}>
          <img src={article.author.image} />
        </a>
        <div class="info">
          <a href={`/profile/${article.author.username}`} class="author">
            {article.author.username}
          </a>
          <span class="date">{new Date(article.createdAt).toDateString()}</span>
        </div>
        {isLoggedIn() && (
          <Fragment>
            <FollowUserButton username={article.author.username} following={article.author.following} />
            &nbsp;
            <FavoritePostButton slug={article.slug} favorited={article.favorited} favoritesCount={article.favoritesCount} />
          </Fragment>
        )}
      </div>
    );
  }
}
