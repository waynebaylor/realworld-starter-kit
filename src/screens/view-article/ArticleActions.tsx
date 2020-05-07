/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import { ArticleDetails } from '../../types';
import { ArticleMeta } from './ArticleMeta';

export function* ArticleActions(this: Context, { article }: { article: ArticleDetails }) {
  for ({ article } of this) {
    yield (
      <div class="article-actions">
        <ArticleMeta article={article} />
      </div>
    );
  }
}
