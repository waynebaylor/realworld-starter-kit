/** @jsx createElement */
import { createElement, Fragment, Context, Children } from "@bikeshaving/crank";
import { LoadingIndicator } from "../../components";
import { getArticles } from "../../services/articleService";
import classNames from 'classnames';
import { isLoggedIn } from "../../state/userState";
import { ArticleDetails, ArticlesResp } from "../../types";

export async function* GlobalFeed(this: Context, {children}: {children: Children}) {
  let limit = 10;
  let offset = 0;

  const handleFavorite = (event: Event) => {
    if (isLoggedIn()) {
      // favorite
    }
  };

  const handlePrev = (event: Event) => {
    event.preventDefault();
    offset = Math.max(0, offset -= limit);
    this.refresh();
  };

  const handleNext = (event: Event) => {
    event.preventDefault();
    offset += limit;
    this.refresh();
  }

  for await (let _ of this) {
    yield (
      <div style="display:flex; justify-content:center; margin:50px;">
        <LoadingIndicator />
      </div>
    );

    const resp = await getArticles({ limit, offset });

    if (resp.hasErrors) {
      throw new Error('Error getting global feed.')
    }

    const articles: ArticleDetails[] = resp.response?.articles as ArticleDetails[];
    const articlesCount: number = resp.response?.articlesCount as number;

    yield (
      <Fragment>
        {articles.map(article => (
          <div class="article-preview" crank-key={article.slug}>
            <div class="article-meta">
              <a href={`/profile/${article.author.username}`}><img src={article.author.image} /></a>
              <div class="info">
                <a href={`/profile/${article.author.username}`} class="author">{article.author.username}</a>
                <span class="date" title={article.createdAt}>{new Date(article.createdAt).toDateString()}</span>
              </div>
              <button type="button" class={classNames('btn', 'btn-sm', 'pull-xs-right', { 'btn-outline-primary': !article.favorited, 'btn-primary': article.favorited })} onclick={handleFavorite}>
                <i class="ion-heart"></i> {article.favoritesCount}
              </button>
            </div>
            <a href={`/article/${article.slug}`} class="preview-link">
              <h1>{article.title}</h1>
              <p>{article.body}</p>
              <span>Read more...</span>
            </a>
          </div>
        ))}

        <ul class="pagination">
          <li class={classNames('page-item', { disabled: offset === 0 })}><a class="page-link" href="" onclick={handlePrev}>Previous</a></li>
          <li class={classNames('page-item', {disabled: (offset+limit) >= articlesCount})}><a class="page-link" href="" onclick={handleNext}>Next</a></li>
        </ul>
      </Fragment>
    );
  }
  
}