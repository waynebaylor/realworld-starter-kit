/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { FollowUserButton } from '../../components/FollowUserButton';
import { isLoggedIn, getUser } from '../../state/userState';
import { ArticleDetails } from '../../types';
import { FavoritePostButton } from './FavoritePostButton';
import { EditArticleButton } from './EditArticleButton';
import { DeleteArticleButton } from './DeleteArticleButton';

export function* ArticleMeta(this: Context, { article }: { article: ArticleDetails }) {
  const user = getUser();

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
        {user?.username !== article.author.username && isLoggedIn() && (
          <Fragment>
            <FollowUserButton username={article.author.username} following={article.author.following} />
            &nbsp;
            <FavoritePostButton slug={article.slug} favorited={article.favorited} favoritesCount={article.favoritesCount} />
          </Fragment>
        )}

        {user?.username === article.author.username && (
          <Fragment>
            <EditArticleButton slug={article.slug} />
            &nbsp;
            <DeleteArticleButton slug={article.slug} />
          </Fragment>
        )}
      </div>
    );
  }
}
