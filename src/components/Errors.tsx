/** @jsx createElement */
import { createElement, Context } from "@bikeshaving/crank";
import { ErrorDetails } from "../types";

export async function* Errors(this: Context, {errors}: ErrorDetails) {
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