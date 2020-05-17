/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import './styles.scss';
import page from 'page';
import { HomeScreen, RegisterScreen, LoginScreen, SettingsScreen } from './screens';
import { render } from './utils';
import { ViewArticleScreen } from './screens/view-article';
import { logout } from './services/userService';
import { setPageContext } from './state/pageContextState';
import { ProfileScreen } from './screens/profile';

page.base('/realworld-starter-kit');

page('/', (context) => {
  setPageContext(context);
  render(<HomeScreen />);
});

page('/register', (context) => {
  setPageContext(context);
  render(<RegisterScreen />);
});

page('/login', (context) => {
  setPageContext(context);
  render(<LoginScreen />);
});

page('/settings', (context) => {
  setPageContext(context);
  render(<SettingsScreen />);
});

page('/article/:slug', (context) => {
  setPageContext(context);
  render(<ViewArticleScreen slug={context.params.slug} />);
});

page('/logout', (context) => {
  setPageContext(context);
  logout();
  page('/');
});

page('/profile/:username', (context) => {
  setPageContext(context);
  render(<ProfileScreen />);
});

try {
  page();
} catch (err) {
  console.log(err);
  page('/');
}
