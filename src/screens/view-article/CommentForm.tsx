/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { ArticleDetails, UserDetails, CommentDetails } from '../../types';
import { getUser } from '../../state/userState';
import { postComment, SingleCommentResp } from '../../services/commentService';

export function* CommentForm(this: Context, { article, handleNewComment }: { article: ArticleDetails; handleNewComment(c: CommentDetails): void }) {
  const user = getUser() as UserDetails;

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
    const body = formData.get('body') as string;
    if (body.trim().length > 0) {
      const resp = await postComment({
        slug: article.slug,
        body: formData.get('body') as string,
      });

      hasErrors = resp.hasErrors;
      response = resp.response;

      if (!hasErrors) {
        (event.target as HTMLFormElement).reset();
        handleNewComment((response as SingleCommentResp).comment);
      }
    }

    loading = false;
    this.refresh();
  };

  for ({ article } of this) {
    yield (
      <form class="card comment-form" onsubmit={handleSubmit}>
        <div class="card-block">
          <textarea class="form-control" name="body" placeholder="Write a comment..." rows="3"></textarea>
        </div>
        <div class="card-footer">
          <img src={user.image} class="comment-author-img" />
          <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
      </form>
    );
  }
}
