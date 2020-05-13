# Notes

- for(props of this) doesn't seem to work without 'await' (enable downleveliteration in tsconfig.json to fix)
- <Portal> doesn't clean up after itself
- How to mix state and props? Can't do while(true) and for..of(this).
- CommentSection.tsx: for await of(this) works, but while(true) doesn't.
- ArticleList.tsx: would be nice to have the event listeners inside the for loop, but they don't get removed when iterating
- GlobalFeed.tsx: for...of(this) when the component doesn't have any props
- Feeds.tsx: watch() gets called before page() so we don't need to include a refresh()--if we did then the component would get rendered twice and make double the ajax requests.
- ProfileFeedContent.tsx: using a props variable instead of destructuring leads to TypeError: \_a.next() is not a function, which is weird since it seems like it should work. also detecting if props have changed before making an ajax request is awkward.

# ![RealWorld Example App](logo.png)

> ### [YOUR_FRAMEWORK] codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://github.com/gothinkster/realworld)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **[YOUR_FRAMEWORK]** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **[YOUR_FRAMEWORK]** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

# How it works

> Describe the general architecture of your app here

# Getting started

> npm install, npm start, etc.
