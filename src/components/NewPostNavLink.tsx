/** @jsx createElement */
import { createElement, Context, Fragment, Portal } from '@bikeshaving/crank';
import { CreateArticleScreen } from '../screens';
import { articleCreatedListener } from '../services/eventService';
import page from 'page';

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

  const hideModal = async () => {
    showNewPostModal = false;

    // excluding <Portal> from the output doesn't remove the content, so manually clear it here.
    modalNode?.remove();
    document.body.classList.remove('modal-open');

    await this.refresh();
  };

  this.addEventListener(
    ...articleCreatedListener(({ article }) => {
      (async () => {
        // the call to refresh() is interfering with page() somehow. without the await page will
        // update the url, but the screen doesn't change. putting page() in a setTimeout and not using async also seems to work.
        await hideModal();
        page(`/article/${article.slug}`);
      })();
    })
  );

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
