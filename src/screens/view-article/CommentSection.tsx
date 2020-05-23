/** @jsx createElement */
import { Context, createElement, Fragment } from '@bikeshaving/crank';
import { LoadingIndicator } from '../../components';
import { deleteComment, getComments } from '../../services/commentService';
import { isLoggedIn } from '../../services/userService';
import { ArticleDetails, CommentDetails } from '../../types';
import { linkHref } from '../../utils';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export async function* CommentSection(this: Context, { article }: { article: ArticleDetails }) {
  yield (
    <div style="display:flex; justify-content:center; margin:50px;">
      <LoadingIndicator />
    </div>
  );

  const resp = await getComments({ slug: article.slug });

  if (resp.hasErrors) {
    throw new Error('Error getting article comments.');
  }

  const comments = resp.response?.comments as CommentDetails[];

  const addComment = (comment: CommentDetails) => {
    comments.splice(0, 0, comment);
    this.refresh();
  };

  const deleteCommentById = (event: Event, id: number) => {
    event.preventDefault();
    deleteComment({ id, slug: article.slug });

    const index = comments.findIndex((c) => c.id === id);
    if (index >= 0) {
      comments.splice(index, 1);
      this.refresh();
    }
  };

  for await ({ article } of this) {
    yield (
      <Fragment>
        {isLoggedIn() && <CommentForm article={article} handleNewComment={addComment} />}

        {!isLoggedIn() && (
          <p>
            <a href={linkHref('/login')}>Sign in</a> or <a href={linkHref('/register')}>sign up</a> to add comments to this article.
          </p>
        )}

        {comments.map((c) => (
          <Comment
            crank-key={c.id}
            comment={c}
            handleDelete={(event: Event) => {
              deleteCommentById(event, c.id);
            }}
          />
        ))}
      </Fragment>
    );
  }
}
