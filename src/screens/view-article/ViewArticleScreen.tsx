/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { Navbar, Footer } from '../../components';
import { Article } from './Article';

export function* ViewArticleScreen(this: Context, { slug }: { slug: string }) {
  for ({ slug } of this) {
    yield (
      <Fragment>
        <Navbar active="" />
        <Article slug={slug} />
        <Footer />
      </Fragment>
    );
  }
}
