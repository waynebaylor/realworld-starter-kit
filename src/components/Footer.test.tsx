/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import { renderer } from '@bikeshaving/crank/dom';
import { getByText } from '@testing-library/dom';
import { Footer } from './Footer';

test('render Footer', async () => {
  await renderer.render(<Footer />, document.body);

  expect(getByText(document.body, 'conduit')).toBeDefined();
});
