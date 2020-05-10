import { createState } from '../utils';
import { PageContextState } from '../types';
import * as qs from 'query-string';

const initialState: PageContextState = {
  context: null,
  queryParams: {},
};

let { watch, unwatch, get, set } = createState(initialState);

export const watchPageContext = watch;

export const unwatchPageContext = unwatch;

export const getPageContext = () => get()?.context;

export const getQueryParams = () => get().queryParams;

export const setPageContext = (context: PageJS.Context) =>
  set((state) => {
    state.context = context;
    state.queryParams = qs.parse(context.querystring);
  });
