/** @jsx createElement */
import { createElement, Fragment, Context } from '@bikeshaving/crank';
import { Navbar, Footer } from '../../components';
import { ProfileContent } from './ProfileContent';

export function ProfileScreen(this: Context) {
  return (
    <Fragment>
      <Navbar active="" />
      <ProfileContent />
      <Footer />
    </Fragment>
  );
}
