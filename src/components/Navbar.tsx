/** @jsx createElement */
import { createElement, Context, Fragment } from '@bikeshaving/crank';
import { isLoggedIn, getUser } from '../state/userState';
import classNames from 'classnames';
import { NewPostNavLink } from './NewPostNavLink';
import { UserDetails } from '../types';

interface Props {
  active: 'home' | 'login' | 'register' | 'settings' | '';
}

export async function* Navbar(this: Context, { active }: Props) {
  const user = getUser() as UserDetails;

  for await ({ active } of this) {
    yield (
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <a class={classNames('nav-link', { active: active === 'home' })} href="/">
                Home
              </a>
            </li>

            {isLoggedIn() && (
              <Fragment>
                <li class="nav-item">
                  <NewPostNavLink />
                </li>
                <li class="nav-item">
                  <a class={classNames('nav-link', { active: active === 'settings' })} href="/settings">
                    <i class="ion-gear-a"></i>&nbsp;Settings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/logout" title="Log Out">
                    <img src={user.image} class="user-pic" />
                    &nbsp;Log Out
                  </a>
                </li>
              </Fragment>
            )}

            {!isLoggedIn() && (
              <Fragment>
                <li class="nav-item">
                  <a class={classNames('nav-link', { active: active === 'login' })} href="/login">
                    Sign in
                  </a>
                </li>
                <li class="nav-item">
                  <a class={classNames('nav-link', { active: active === 'register' })} href="/register">
                    Sign up
                  </a>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
