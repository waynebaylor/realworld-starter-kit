/** @jsx createElement */
import { createElement, Fragment, Context } from '@bikeshaving/crank';
import { Navbar, Footer } from '../../components';
import { ProfileFeeds } from './ProfileFeeds';

export function ProfileScreen(this: Context) {
  return (
    <Fragment>
      <Navbar active="" />
      <ProfileFeeds />
      <Footer />
    </Fragment>
  );
}
