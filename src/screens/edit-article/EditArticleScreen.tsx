/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import { Errors } from '../../components';
import { ErrorResp } from '../../services';
import { editArticle, getArticle, SingleArticleResp } from '../../services/articleService';
import { articleEditedEvent } from '../../services/eventService';

export async function* EditArticleScreen(this: Context, { slug, hide }: { slug: string; hide(): void }) {
  let loading = false;
  let hasErrors = false;
  let response;

  const article = (await getArticle({ slug })).response.article;

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    loading = true;
    hasErrors = false;
    response = undefined;

    this.refresh();

    const formData = new FormData(event.target as HTMLFormElement);
    const resp = await editArticle({
      slug: article.slug,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      body: formData.get('body') as string,
      tagList: (formData.get('tags') as string).split(' ').filter((t) => t.length > 0),
    });

    loading = false;
    hasErrors = resp.hasErrors;
    response = resp.response;
    if (!hasErrors) {
      const article = (response as SingleArticleResp).article;
      this.dispatchEvent(articleEditedEvent({ slug: article.slug }));
    }

    this.refresh();
  };

  for await ({ slug, hide } of this) {
    yield (
      <form onsubmit={handleSubmit}>
        <div class="modal" style="display:block; background-color:rgba(0,0,0,0.5);">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Article</h5>
              </div>
              <div class="modal-body">
                <div class="editor-page">
                  <div class="container page">
                    <div class="row">
                      <div class="col-md-10 offset-md-1 col-xs-12">
                        {hasErrors && response && <Errors errors={(response as ErrorResp).errors} />}

                        <fieldset>
                          <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" name="title" defaultValue={article.title} placeholder="Article Title" />
                          </fieldset>
                          <fieldset class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="description"
                              defaultValue={article.description}
                              placeholder="What's this article about?"
                            />
                          </fieldset>
                          <fieldset class="form-group">
                            <textarea
                              class="form-control"
                              rows="8"
                              name="body"
                              defaultValue={article.body}
                              placeholder="Write your article (in markdown)"
                            ></textarea>
                          </fieldset>
                          <fieldset class="form-group">
                            <input type="text" class="form-control" name="tags" defaultValue={article.tagList.join(' ')} placeholder="Enter tags" />
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
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
