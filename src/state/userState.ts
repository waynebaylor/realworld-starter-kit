import { UserDetails, UserState } from '../types';
import { createState } from '../utils';

const initialState: UserState = {
  user: null,
};

let { watch, unwatch, get, set } = createState(initialState);

export const watchUser = watch;

export const unwatchUser = unwatch;

export const getUser = () => {
  let user = get().user;

  // check localStorage
  if (user == null) {
    const value = localStorage.getItem('user');
    if (value) {
      user = JSON.parse(value);
      setUser(user);
    }
  }

  return user;
};

export const setUser = (u: UserDetails | null) => {
  set((state) => {
    state.user = u;

    // update localStorage
    if (u == null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem('user', JSON.stringify(u));
    }
  });
};
