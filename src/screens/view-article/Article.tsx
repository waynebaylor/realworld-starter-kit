/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { LoadingIndicator } from '../../components';
import { ArticleBanner } from './ArticleBanner';
import { ArticleContent } from './ArticleContent';
import { ArticleActions } from './ArticleActions';
import { isLoggedIn } from '../../state/userState';
import { CommentSection } from './CommentSection';
import {
  followUserListener,
  unfollowUserListener,
  favoritePostListener,
  unfavoritePostListener,
  editArticleListener,
  deleteArticleListener,
} from '../../services/eventService';
import { getArticle } from '../../services/articleService';
import { followUser, unfollowUser } from '../../services/followService';
import { favoritePost, unfavoritePost } from '../../services/favoriteService';

export async function* Article(this: Context, { slug }: { slug: string }) {
  yield (
    <div style="display:flex; justify-content:center; margin:50px;">
      <LoadingIndicator />
    </div>
  );

  const resp = await getArticle({ slug });

  if (resp.hasErrors) {
    throw new Error('Error getting article.');
  }

  const article = resp.response.article;

  this.addEventListener(
    ...followUserListener((detail) => {
      followUser(detail);
      article.author.following = true;
      this.refresh();
    })
  );

  this.addEventListener(
    ...unfollowUserListener((detail) => {
      unfollowUser(detail);
      article.author.following = false;
      this.refresh();
    })
  );

  this.addEventListener(
    ...favoritePostListener((detail) => {
      favoritePost(detail);
      article.favorited = true;
      article.favoritesCount++;
      this.refresh();
    })
  );

  this.addEventListener(
    ...unfavoritePostListener((detail) => {
      unfavoritePost(detail);
      article.favorited = false;
      article.favoritesCount--;
      this.refresh();
    })
  );

  this.addEventListener(
    ...editArticleListener((detail) => {
      console.log('edit');
    })
  );

  this.addEventListener(
    ...deleteArticleListener((detail) => {
      console.log('delete');
    })
  );

  for await ({ slug } of this) {
    yield (
      <div class="article-page">
        <ArticleBanner article={article} />
        <div class="container page">
          <ArticleContent article={article} />
          <hr />
          {isLoggedIn() && <ArticleActions article={article} />}
          <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2">
              <CommentSection article={article} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
