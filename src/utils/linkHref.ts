export const linkHref = (href: string) => {
  if (process.env.NODE_ENV === 'production') {
    // this should match what's in src/index.tsx
    return '/realworld-starter-kit' + href;
  } else {
    return href;
  }
};
