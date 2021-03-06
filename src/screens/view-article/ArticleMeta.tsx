/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { FollowUserButton } from '../../components/FollowUserButton';
import { isLoggedIn } from '../../services/userService';
import { getUser } from '../../state/userState';
import { ArticleDetails } from '../../types';
import { linkHref } from '../../utils';
import { DeleteArticleButton } from './DeleteArticleButton';
import { EditArticleButton } from './EditArticleButton';
import { FavoritePostButton } from './FavoritePostButton';

export function* ArticleMeta(this: Context, { article }: { article: ArticleDetails }) {
  const user = getUser();

  for ({ article } of this) {
    yield (
      <div class="article-meta">
        <a href={linkHref(`/profile/${article.author.username}`)}>
          <img src={article.author.image} />
        </a>
        <div class="info">
          <a href={linkHref(`/profile/${article.author.username}`)} class="author">
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
