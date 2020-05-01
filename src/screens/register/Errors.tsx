/** @jsx createElement */
import { createElement, Context } from "@bikeshaving/crank";

interface Props {
  errors: {
    [key: string]: string[]
  }
}

export async function* Errors(this: Context, {errors}: Props) {
  for await ({errors} of this) {
    yield (
      <ul class="error-messages">
        {Object.entries(errors)
          .flatMap(([key, values]) => values.map(v => `${key} ${v}`))
          .map(message => (
            <li>{message}</li>
          ))}
      </ul>
    );
  }
}