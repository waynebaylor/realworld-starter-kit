/** @jsx createElement */
import { Context, createElement } from '@bikeshaving/crank';
import { ErrorResp } from '../services';

export async function* Errors(this: Context, { errors }: ErrorResp) {
  for await ({ errors } of this) {
    yield (
      <ul class="error-messages">
        {Object.entries(errors)
          .flatMap(([key, values]) => values.map((v) => `${key} ${v}`))
          .map((message) => (
            <li>{message}</li>
          ))}
      </ul>
    );
  }
}
