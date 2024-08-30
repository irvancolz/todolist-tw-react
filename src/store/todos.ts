import { StateCreator } from "zustand";
import { Todo, TODO_STORAGE_KEY } from "../type";

function saveTodos(a: Todo[]) {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(a));
}

type TodoStore = {
  todo: Todo[];
  add: (a: Todo) => void;
  update: (a: Todo) => void;
  delete: (a: Todo | null) => void;
  load: (a: Todo[]) => void;
};

export type TodoMethodStore = {
  todos: TodoStore;
};

const todoStore: StateCreator<TodoMethodStore, [], [], TodoMethodStore> = (
  set,
  get
) => ({
  todos: {
    todo: [],
    add(a: Todo) {
      const current = get().todos.todo;
      current.push(a);
      set((prev) => ({
        todos: {
          ...prev.todos,
          todo: current,
        },
      }));
      saveTodos(current);
    },
    update(a) {
      const current = get().todos.todo;
      const edited = current.find((e) => e.id == a.id);
      if (!edited) return;
      const idx = current.indexOf(edited);
      current[idx] = a;
      set((prev) => ({
        todos: {
          ...prev.todos,
          todo: current,
        },
      }));
      saveTodos(current);
    },
    delete(a) {
      if (!a) return;
      const current = get().todos.todo;
      const cleaned = current.filter((e) => e.id != a.id);
      set((prev) => ({
        todos: {
          ...prev.todos,
          todo: cleaned,
        },
      }));
      saveTodos(cleaned);
    },
    load(a) {
      set((prev) => ({
        todos: {
          ...prev.todos,
          todo: a,
        },
      }));
    },
  },
});

export default todoStore;
