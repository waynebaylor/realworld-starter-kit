/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import { FavoriteButton } from '../screens/home/FavoriteButton';
import { ArticleDetails } from '../types';
import { favoritePostListener, unfavoritePostListener } from '../services/eventService';
import { favoritePost, unfavoritePost } from '../services/favoriteService';
import { linkHref } from '../utils';

export async function* ArticleList(this: Context, { articles: articlesProp }: { articles: ArticleDetails[] }) {
  let articles = articlesProp;

  this.addEventListener(
    ...favoritePostListener((detail) => {
      favoritePost(detail);
      const article = articles.find((a) => a.slug === detail.slug) as ArticleDetails;
      article.favorited = true;
      article.favoritesCount++;
      this.refresh();
    })
  );

  this.addEventListener(
    ...unfavoritePostListener((detail) => {
      unfavoritePost(detail);
      const article = articles.find((a) => a.slug === detail.slug) as ArticleDetails;
      article.favorited = false;
      article.favoritesCount--;
      this.refresh();
    })
  );

  for await ({ articles: articlesProp } of this) {
    if (articles !== articlesProp) {
      articles = articlesProp;
    }

    yield articles.map((article) => (
      <div class="article-preview" crank-key={article.slug}>
        <div class="article-meta">
          <a href={linkHref(`/profile/${article.author.username}`)}>
            <img src={article.author.image} />
          </a>
          <div class="info">
            <a href={linkHref(`/profile/${article.author.username}`)} class="author">
              {article.author.username}
            </a>
            <span class="date" title={article.createdAt}>
              {new Date(article.createdAt).toDateString()}
            </span>
          </div>
          <FavoriteButton slug={article.slug} favoritesCount={article.favoritesCount} favorited={article.favorited} />
        </div>
        <a href={linkHref(`/article/${article.slug}`)} class="preview-link">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
          <ul class="tag-list">
            {article.tagList.map((tag) => (
              <li class="tag-default tag-pill tag-outline" crank-key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </a>
      </div>
    ));
  }
}
