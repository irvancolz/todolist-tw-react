import { StateCreator } from "zustand";
import { Todo } from "../type";

type TodoModificationStore = {
  opened: boolean;
  open: () => void;
  close: () => void;
  select: (a: Todo) => void;
  todo: Todo | null;
};

export type TodoModificationStoreMethod = {
  todoModification: TodoModificationStore;
};

const todoModificationStore: StateCreator<
  TodoModificationStoreMethod,
  [],
  [],
  TodoModificationStoreMethod
> = (set) => ({
  todoModification: {
    opened: false,
    todo: null,
    open() {
      set((prev) => ({
        todoModification: {
          ...prev.todoModification,
          opened: true,
        },
      }));
    },
    close() {
      set((prev) => ({
        todoModification: {
          ...prev.todoModification,
          opened: false,
        },
      }));
    },
    select(a) {
      set((prev) => ({
        todoModification: {
          ...prev.todoModification,
          todo: a,
        },
      }));
    },
  },
});

export default todoModificationStore;
