/** @jsx createElement */
import { createElement, Fragment, Context } from '@bikeshaving/crank';
import { Navbar, Footer } from '../../components';
import { Banner } from './Banner';
import { HomeFeeds } from './HomeFeeds';
import { Sidebar } from './Sidebar';

export function HomeScreen(this: Context) {
  return (
    <Fragment>
      <Navbar active="home" />
      <div class="home-page">
        <Banner />
        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <HomeFeeds />
            </div>
            <div class="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
