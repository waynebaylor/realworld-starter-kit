/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import { renderer } from '@bikeshaving/crank/dom';
import { Errors } from './Errors';
import { ErrorResp } from '../services';
import { getByText } from '@testing-library/dom';

test('no errors', async () => {
  const resp: ErrorResp = { errors: {} };

  await renderer.render(<Errors errors={resp.errors} />, document.body);

  expect(document.querySelectorAll('li')).toHaveLength(0);
});

test('with errors', async () => {
  const resp: ErrorResp = {
    errors: {
      username: ['is required'],
    },
  };

  await renderer.render(<Errors errors={resp.errors} />, document.body);

  expect(document.querySelectorAll('li')).toHaveLength(1);
  expect(getByText(document.body, 'username is required')).toBeDefined();
});
