import produce from "immer";

interface ProducerFunc<S> {
  (state: S): void
}

export interface WatchFunc {
  (): void
}

export interface WatchToken extends WatchFunc {}

export function createState<S>(initialState: S) {
  let currentState: S = initialState;
  const watchers: WatchFunc[] = [];

  const watch = (w: WatchFunc): WatchToken => {
    watchers.push(w);
    return w;
  }

  const unwatch = (t: WatchToken) => {
    const index = watchers.indexOf(t);
    if(index >= 0) {
      watchers.splice(index, 1);
    }
  }

  const get = () => currentState;

  const set = (p: ProducerFunc<S>) => {
    currentState = produce(currentState, p);
    watchers.forEach(w => w());
  };

  return {
    watch,
    unwatch,
    get,
    set
  };
}
