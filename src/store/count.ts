import { create } from "zustand";

interface CountState {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
}

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  actions: {
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  },
}));

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
