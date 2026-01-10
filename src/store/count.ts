import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  subscribeWithSelector(
    immer(
      combine({ count: 0 }, (set) => ({
        actions: {
          increase: () =>
            set((state) => {
              state.count += 1;
            }),
          decrease: () =>
            set((state) => {
              state.count -= 1;
            }),
        },
      })),
    ),
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count, prevCount);
  },
);

export const useCount = () => {
  const count = useCountStore((state) => state.count);

  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((state) => state.actions.increase);

  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((state) => state.actions.decrease);

  return decrease;
};
