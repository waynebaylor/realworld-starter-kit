import { createState } from './createState';

test('get value after being set', () => {
  const { get, set } = createState({ count: 1 });

  expect(get().count).toBe(1);

  set(() => {
    get().count += 1;
  });

  expect(get().count).toBe(2);
});

test('watch value after being set', () => {
  const { get, set, watch, unwatch } = createState({ count: 1 });

  const token = watch(() => {
    expect(get().count).toBe(2);
  });

  set(() => {
    get().count += 1;
  });

  unwatch(token);
});
