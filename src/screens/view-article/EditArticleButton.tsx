/** @jsx createElement */
import { Context, createElement, Fragment, Portal } from '@bikeshaving/crank';
import { EditArticleScreen } from '../edit-article';
import { articleEditedListener } from '../../services/eventService';

export function* EditArticleButton(this: Context, { slug }: { slug: string }) {
  let showEditArticleModal = false;
  let modalNode: HTMLElement | null = null;

  const handleEdit = (event: Event) => {
    event.preventDefault();
    showEditArticleModal = true;

    document.body.classList.add('modal-open');
    modalNode = document.createElement('div');
    document.body.appendChild(modalNode);

    this.refresh();
  };

  const hideModal = () => {
    showEditArticleModal = false;

    modalNode?.remove();
    document.body.classList.remove('modal-open');

    this.refresh();
  };

  this.addEventListener(
    ...articleEditedListener(({ slug }) => {
      hideModal();
      location.reload();
    })
  );

  while (true) {
    yield (
      <Fragment>
        <button type="button" class="btn btn-sm btn-outline-secondary" onclick={handleEdit}>
          <i class="ion-edit"></i>
          &nbsp; Edit Article
        </button>

        {showEditArticleModal && (
          <Portal root={modalNode}>
            <EditArticleScreen slug={slug} hide={hideModal} />
          </Portal>
        )}
      </Fragment>
    );
  }
}
