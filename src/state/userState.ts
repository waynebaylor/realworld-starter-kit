import { createState } from '../utils';

export interface UserDetails {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: string
}

interface UserState {
  user: UserDetails | null  
}

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

