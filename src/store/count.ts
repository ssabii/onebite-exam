import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
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
