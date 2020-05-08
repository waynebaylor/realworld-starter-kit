/** @jsx createElement */
import { createElement, Context, Fragment, Raw } from '@bikeshaving/crank';
import { ArticleDetails } from '../../types';
import marked from 'marked';

export function* ArticleContent(this: Context, { article }: { article: ArticleDetails }) {
  for ({ article } of this) {
    yield (
      <div class="row article-content">
        <div class="col-md-12">
          <div>
            <Raw value={marked(article.body)} />
          </div>
          <ul class="tag-list">
            {article.tagList.map((tag) => (
              <li class="tag-default tag-pill tag-outline">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
