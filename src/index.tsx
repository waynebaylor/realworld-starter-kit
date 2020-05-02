/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";
import './styles.scss';
import page from 'page';
import { HomeScreen, RegisterScreen, LoginScreen, SettingsScreen } from "./screens";
import { render } from "./utils";

page('/', (context) => {
  render(<HomeScreen/>);
});

page('/register', (context) => {
  render(<RegisterScreen/>);
});

page('/login', (context) => {
  render(<LoginScreen/>);
});

page('/settings', (context) => {
  render(<SettingsScreen/>);
});

page();
