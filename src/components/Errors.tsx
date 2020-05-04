/** @jsx createElement */
import { createElement, Context } from "@bikeshaving/crank";
import { ErrorResp } from "../types";

export async function* Errors(this: Context, {errors}: ErrorResp) {
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