import { ErrorResp, ServiceResp } from '.';
import { getUser } from '../state/userState';
import { CommentDetails, UserDetails } from '../types';
import { isLoggedIn } from './userService';

/**
 * get comments for an article
 */

export interface CommentListResp {
  comments: CommentDetails[];
}

export interface GetCommentsReq {
  slug: string;
}

export type GetCommentsResp = ServiceResp<CommentListResp>;

export const getComments = async (req: GetCommentsReq): Promise<GetCommentsResp> => {
  const user = getUser() as UserDetails;

  let headers = {};
  if (isLoggedIn()) {
    const user = getUser() as UserDetails;
    headers = { Authorization: `Token ${user.token}` };
  }

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}/comments`, {
    method: 'GET',
    mode: 'cors',
    headers,
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};

/**
 * post a comment
 */

export interface SingleCommentResp {
  comment: CommentDetails;
}

export interface PostCommentReq {
  slug: string;
  body: string;
}

export type PostCommentResp = ServiceResp<SingleCommentResp | ErrorResp>;

export const postComment = async (req: PostCommentReq): Promise<PostCommentResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}/comments`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`,
    },
    body: JSON.stringify({ comment: { body: req.body } }),
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};

/**
 * delete a comment
 */

export interface DeleteCommentReq {
  id: number;
  slug: string;
}

export type DeleteCommentResp = ServiceResp<{}>;

export const deleteComment = async (req: DeleteCommentReq): Promise<DeleteCommentResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}/comments/${req.id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`,
    },
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};
