/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import { FavoriteButton } from '../screens/home/FavoriteButton';
import { ArticleDetails } from '../types';

export async function* ArticleList(this: Context, { articles }: { articles: ArticleDetails[] }) {
  for await ({ articles } of this) {
    yield articles.map((article) => (
      <div class="article-preview" crank-key={article.slug}>
        <div class="article-meta">
          <a href={`/profile/${article.author.username}`}>
            <img src={article.author.image} />
          </a>
          <div class="info">
            <a href={`/profile/${article.author.username}`} class="author">
              {article.author.username}
            </a>
            <span class="date" title={article.createdAt}>
              {new Date(article.createdAt).toDateString()}
            </span>
          </div>
          <FavoriteButton slug={article.slug} favoritesCount={article.favoritesCount} favorited={article.favorited} />
        </div>
        <a href={`/article/${article.slug}`} class="preview-link">
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <span>Read more...</span>
        </a>
      </div>
    ));
  }
}
