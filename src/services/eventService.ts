const createEvent = <T>(eventName: string, detail: T) => new CustomEvent(eventName, { bubbles: true, detail });

const createListener = <T>(eventName: string, handler: (detail: T) => void): [string, any] => {
  return [eventName, (event: CustomEvent<T>) => handler(event.detail)];
};

const createEventAndListener = <T>(eventName: string) => ({
  event: (detail: T) => createEvent(eventName, detail),
  listener: (handler: (detail: T) => void) => createListener(eventName, handler),
});

export const { event: followUserEvent, listener: followUserListener } = createEventAndListener<{ username: string }>('realworld.follow-user');
export const { event: unfollowUserEvent, listener: unfollowUserListener } = createEventAndListener<{ username: string }>('realworld.unfollow-user');

export const { event: favoritePostEvent, listener: favoritePostListener } = createEventAndListener<{ slug: string }>('realworld.favorite-post');
export const { event: unfavoritePostEvent, listener: unfavoritePostListener } = createEventAndListener<{ slug: string }>('realworld.unfavorite-post');

export const { event: prevPageEvent, listener: prevPageListener } = createEventAndListener<void>('realworld.prev-page');
export const { event: nextPageEvent, listener: nextPageListener } = createEventAndListener<void>('realworld.next-page');

export const { event: editArticleEvent, listener: editArticleListener } = createEventAndListener<{ slug: string }>('realworld.edit-article');
export const { event: deleteArticleEvent, listener: deleteArticleListener } = createEventAndListener<{ slug: string }>('realworld.delete-article');
