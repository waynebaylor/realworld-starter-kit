import { createState } from '../utils';
import { PageContextState } from '../types';

const initialState: PageContextState = {
  context: null,
};

let { watch, unwatch, get, set } = createState(initialState);

export const watchPageContext = watch;

export const unwatchPageContext = unwatch;

export const getPageContext = () => get()?.context;

export const setPageContext = (context: PageJS.Context) =>
  set((state) => {
    state.context = context;
  });
