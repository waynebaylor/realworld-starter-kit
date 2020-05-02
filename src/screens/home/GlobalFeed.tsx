/** @jsx createElement */
import { createElement, Fragment, Context, Children } from "@bikeshaving/crank";
import { LoadingIndicator } from "../../components";
import { getGlobalFeedArticles } from "../../services/feedService";
import classNames from 'classnames';
import { ArticleDetails } from "../../types";
import { ArticleList } from "../../components/ArticleList";

export async function* GlobalFeed(this: Context, {children}: {children: Children}) {
  let limit = 10;
  let offset = 0;

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

    const resp = await getGlobalFeedArticles({ limit, offset });

    if (resp.hasErrors) {
      throw new Error('Error getting global feed.')
    }

    const articles: ArticleDetails[] = resp.response?.articles as ArticleDetails[];
    const articlesCount: number = resp.response?.articlesCount as number;

    yield (
      <Fragment>
        <ArticleList articles={articles}/>

        <ul class="pagination">
          <li class={classNames('page-item', { disabled: offset === 0 })}><a class="page-link" href="" onclick={handlePrev}>Previous</a></li>
          <li class={classNames('page-item', {disabled: (offset+limit) >= articlesCount})}><a class="page-link" href="" onclick={handleNext}>Next</a></li>
        </ul>
      </Fragment>
    );
  }
  
}