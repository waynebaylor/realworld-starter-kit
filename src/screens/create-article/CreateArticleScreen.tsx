/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { publish, SingleArticleResp } from '../../services/articleService';
import { Errors } from '../../components';
import { ErrorResp } from '../../services';
import { articleCreatedEvent } from '../../services/eventService';

export async function* CreateArticleScreen(this: Context, { hide }: { hide(): void }) {
  let loading = false;
  let hasErrors = false;
  let response;

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    loading = true;
    hasErrors = false;
    response = undefined;

    this.refresh();

    const formData = new FormData(event.target as HTMLFormElement);
    const resp = await publish({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      body: formData.get('body') as string,
      tagList: (formData.get('tags') as string).split(' '),
    });

    loading = false;
    hasErrors = resp.hasErrors;
    response = resp.response;
    if (!hasErrors) {
      const article = (response as SingleArticleResp).article;
      this.dispatchEvent(articleCreatedEvent({ article }));
    }

    this.refresh();
  };

  for await ({ hide } of this) {
    yield (
      <form onsubmit={handleSubmit}>
        <div class="modal" style="display:block; background-color:rgba(0,0,0,0.5);">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">New Post</h5>
              </div>
              <div class="modal-body">
                <div class="editor-page">
                  <div class="container page">
                    <div class="row">
                      <div class="col-md-10 offset-md-1 col-xs-12">
                        {hasErrors && response && <Errors errors={(response as ErrorResp).errors} />}

                        <fieldset>
                          <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" name="title" placeholder="Article Title" />
                          </fieldset>
                          <fieldset class="form-group">
                            <input type="text" class="form-control" name="description" placeholder="What's this article about?" />
                          </fieldset>
                          <fieldset class="form-group">
                            <textarea class="form-control" rows="8" name="body" placeholder="Write your article (in markdown)"></textarea>
                          </fieldset>
                          <fieldset class="form-group">
                            <input type="text" class="form-control" name="tags" placeholder="Enter tags" />
                            <div class="tag-list"></div>
                          </fieldset>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" style="margin-right:0.5rem;" onclick={hide}>
                  Close
                </button>
                <button class="btn btn-primary" disabled={loading}>
                  Publish Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
