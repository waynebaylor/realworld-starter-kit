/** @jsx createElement */
import { createElement, Context, Fragment, Raw } from '@bikeshaving/crank';
import { ArticleDetails } from '../../types';
import marked from 'marked';

export function* ArticleContent(this: Context, { article }: { article: ArticleDetails }) {
  for ({ article } of this) {
    yield (
      <div class="row article-content">
        <div class="col-md-12">
          <Raw value={marked(article.body)} />
        </div>
      </div>
    );
  }
}
