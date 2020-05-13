/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { deleteArticleEvent } from '../../services/eventService';

export function DeleteArticleButton(this: Context, { slug }: { slug: string }) {
  const handleDelete = (event: Event) => {
    event.preventDefault();
    this.dispatchEvent(deleteArticleEvent({ slug }));
  };

  return (
    <button type="button" class="btn btn-sm btn-outline-danger" onclick={handleDelete}>
      <i class="ion-trash-a"></i>
      &nbsp; Delete Article
    </button>
  );
}
