/** @jsx createElement */
import { createElement, Context } from '@bikeshaving/crank';
import { popularTags } from '../../services/tagService';
import { LoadingIndicator } from '../../components';
import { getQueryParams, watchPageContext } from '../../state/pageContextState';
import classNames from 'classnames';
import { linkHref } from '../../utils';

export async function* Sidebar(this: Context, {}) {
  let selectedTag = getQueryParams().tag;

  watchPageContext(() => {
    selectedTag = getQueryParams().tag;
    this.refresh();
  });

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

  for await ({} of this) {
    yield (
      <div class="sidebar">
        <p>Popular Tags</p>
        <div class="tag-list">
          {resp.response?.tags.map((t) => (
            <a href={linkHref(`/?tag=${t}`)} class={classNames('tag-pill', 'tag-default', { 'tag-primary': t === selectedTag })}>
              {t}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
