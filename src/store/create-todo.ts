import { StateCreator } from "zustand";

type TodoCreationStore = {
  opened: boolean;
  open: () => void;
  close: () => void;
};

export type TodoCreationStoreMethod = {
  todoCreation: TodoCreationStore;
};

const todoCreationStore: StateCreator<
  TodoCreationStoreMethod,
  [],
  [],
  TodoCreationStoreMethod
> = (set) => ({
  todoCreation: {
    opened: false,
    open() {
      set((prev) => ({
        todoCreation: {
          ...prev.todoCreation,
          opened: true,
        },
      }));
    },
    close() {
      set((prev) => ({
        todoCreation: {
          ...prev.todoCreation,
          opened: false,
        },
      }));
    },
  },
});

export default todoCreationStore;
