/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { CommentDetails, UserDetails } from '../../types';
import { isLoggedIn, getUser } from '../../state/userState';
import { linkHref } from '../../utils';

export function* Comment(this: Context, { comment, handleDelete }: { comment: CommentDetails; handleDelete(event: Event): void }) {
  const user = getUser() as UserDetails;

  for ({ comment, handleDelete } of this) {
    yield (
      <div class="card">
        <div class="card-block">
          <p class="card-text">{comment.body}</p>
        </div>
        <div class="card-footer">
          <a href={linkHref(`/profile/${comment.author.username}`)} class="comment-author">
            <img src={comment.author.image} class="comment-author-img" />
          </a>
          &nbsp;
          <a href={linkHref(`/profile/${comment.author.username}`)} class="comment-author">
            {comment.author.username}
          </a>
          <span class="date-posted">{new Date(comment.createdAt).toDateString()}</span>
          {isLoggedIn() && comment.author.username === user.username && (
            <span class="mod-options">
              <button type="button" class="btn" style="background-color:transparent;" onclick={handleDelete}>
                <i class="ion-trash-a"></i>
              </button>
            </span>
          )}
        </div>
      </div>
    );
  }
}
