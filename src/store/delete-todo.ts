import { StateCreator } from "zustand";
import { Todo } from "../type";

type TodoDeletionStore = {
  todo: Todo | null;
  opened: boolean;
  open: () => void;
  close: () => void;
  select: (a: Todo) => void;
};

export type TodoDeletionStoreMethod = {
  todoDeletion: TodoDeletionStore;
};

const todoDeletionStore: StateCreator<
  TodoDeletionStoreMethod,
  [],
  [],
  TodoDeletionStoreMethod
> = (set) => ({
  todoDeletion: {
    todo: null,
    opened: false,
    open() {
      set((prev) => ({
        todoDeletion: {
          ...prev.todoDeletion,
          opened: true,
        },
      }));
    },
    close() {
      set((prev) => ({
        todoDeletion: {
          ...prev.todoDeletion,
          opened: false,
        },
      }));
    },
    select(a) {
      set((prev) => ({
        todoDeletion: {
          ...prev.todoDeletion,
          todo: a,
        },
      }));
    },
  },
});

export default todoDeletionStore;
