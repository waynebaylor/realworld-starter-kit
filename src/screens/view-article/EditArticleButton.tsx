/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { editArticleEvent } from '../../services/eventService';

export function EditArticleButton(this: Context, { slug }: { slug: string }) {
  const handleEdit = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(editArticleEvent({ slug }));
  };

  return (
    <button type="button" class="btn btn-sm btn-outline-secondary" onclick={handleEdit}>
      <i class="ion-edit"></i>
      &nbsp; Edit Article
    </button>
  );
}
