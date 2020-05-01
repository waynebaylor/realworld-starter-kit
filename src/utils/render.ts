import { renderer } from "@bikeshaving/crank/dom";
import { Child } from "@bikeshaving/crank";

export const render = (component: Child) => {
  renderer.render(component, document.getElementById('app') || undefined);
};