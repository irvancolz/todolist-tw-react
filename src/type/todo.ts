export type Todo = {
  id: number;
  title: string;
  desc: string;
  date: string;
  done: boolean;
};

export const TODO_STORAGE_KEY = "todos" as const;
