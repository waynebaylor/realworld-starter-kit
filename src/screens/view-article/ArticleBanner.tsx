/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import { ArticleDetails } from '../../types';
import { ArticleMeta } from './ArticleMeta';

export function* ArticleBanner(this: Context, { article }: { article: ArticleDetails }) {
  for ({ article } of this) {
    yield (
      <div class="banner">
        <div class="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} />
        </div>
      </div>
    );
  }
}
