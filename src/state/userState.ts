import { createState } from '../utils';
import { UserState, UserDetails } from '../types';

const initialState: UserState = {
  user: null
};

let {watch, unwatch, get, set} = createState(initialState);

export const watchUser = watch;

export const unwatchUser = unwatch;

export const getUser = () => get().user;

export const isLoggedIn = () => getUser() !== null;

export const setUser = (u: UserDetails | null) => {
  set(state => {
    state.user = u;
  });
};

