/** @jsx createElement */
import { createElement, Context, Fragment, Portal } from '@bikeshaving/crank';
import { CreateArticleScreen } from '../screens';

export function* NewPostNavLink(this: Context) {
  let showNewPostModal = false;
  let modalNode: HTMLElement | null = null;

  const handleNewPost = (event: Event) => {
    event.preventDefault();
    showNewPostModal = true;

    document.body.classList.add('modal-open');
    modalNode = document.createElement('div');
    document.body.appendChild(modalNode);

    this.refresh();
  };

  const hideModal = () => {
    showNewPostModal = false;

    // excluding <Portal> from the output doesn't remove the content, so manually clear it here.
    modalNode?.remove();
    document.body.classList.remove('modal-open');

    this.refresh();
  };

  while (true) {
    yield (
      <Fragment>
        <a class="nav-link" href="" onclick={handleNewPost}>
          <i class="ion-compose"></i>&nbsp;New Post
        </a>

        {showNewPostModal && (
          <Portal root={modalNode}>
            <CreateArticleScreen hide={hideModal} />
          </Portal>
        )}
      </Fragment>
    );
  }
}
