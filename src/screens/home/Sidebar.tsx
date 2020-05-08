/** @jsx createElement */
import { createElement, Context } from '@bikeshaving/crank';
import { popularTags } from '../../services/tagService';
import { LoadingIndicator } from '../../components';

export async function* Sidebar(this: Context) {
  yield (
    <div class="sidebar">
      <p>Popular Tags</p>
      <div style="display:flex; justify-content:center; margin:20px;">
        <LoadingIndicator />
      </div>
    </div>
  );

  const resp = await popularTags();

  if (resp.hasErrors) {
    throw new Error('Error getting popular tags.');
  }

  return (
    <div class="sidebar">
      <p>Popular Tags</p>
      <div class="tag-list">
        {resp.response?.tags.map((t) => (
          <a href={`/?tag=${t}`} class="tag-pill tag-default">
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}
