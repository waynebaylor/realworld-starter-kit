/** @jsx createElement */
import { createElement, Child } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";
import './styles.scss';
import page from 'page';
import { HomeScreen, RegisterScreen } from "./screens";
import { render } from "./utils";

page('/', (context) => {
  render(<HomeScreen />);
});

page('/register', (context) => {
  render(<RegisterScreen/>);
});

page();

// const render = (component: Child) => {
//   renderer.render(component, document.getElementById('app') || undefined);
// };

// page('/', (context, next) => {
//   render(<SelectEnemyTypeScreen/>);
//   // next();
// });

// page("/enemy", (context, next) => {
//   render(<ViewEnemyScreen pageContext={context}/>);
//   // next();
// });

// page();