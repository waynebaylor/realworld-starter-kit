/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import './styles.scss';
import page from 'page';
import { HomeScreen, RegisterScreen, LoginScreen, SettingsScreen } from './screens';
import { render } from './utils';
import { ViewArticleScreen } from './screens/view-article';
import { logout } from './services/userService';

page('/', (context) => {
  render(<HomeScreen />);
});

page('/register', (context) => {
  render(<RegisterScreen />);
});

page('/login', (context) => {
  render(<LoginScreen />);
});

page('/settings', (context) => {
  render(<SettingsScreen />);
});

page('/article/:slug', (context) => {
  render(<ViewArticleScreen slug={context.params.slug} />);
});

page('/logout', () => {
  logout();
  page('/');
});

try {
  page();
} catch (err) {
  console.log(err);
  page('/');
}
