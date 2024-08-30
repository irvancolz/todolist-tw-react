import { useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  ConfirmationPopup,
  EmptyTodo,
  Input,
  ThemeSwitcher,
  TodoCreationPopup,
  TodoItem,
  TodoModificationPopup,
} from "./components";
import { TodoFilter } from "./components/todo-filter";
import useStore from "./store";
import { Theme, THEME_STORAGE_KEY, Todo, TODO_STORAGE_KEY } from "./type";

function App() {
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { todo, delete: deleteTodo, load } = useStore().todos;
  const { todo: deletedTodo } = useStore().todoDeletion;
  const { open } = useStore().todoCreation;
  const { update: updateTheme } = useStore().theme;

  useEffect(() => {
    const savedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    if (savedTodos != null) {
      const parsedTodo = JSON.parse(savedTodos) as Todo[];
      load(parsedTodo);
    }

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme != null) {
      updateTheme(savedTheme as Theme);
      return;
    }

    // get default device prefference
    let theme: Theme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    } else {
      theme = "light";
    }
    updateTheme(theme);
    // eslint-disable-next-line
  }, []);

  const plusIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 22.5C10.5 22.8978 10.658 23.2794 10.9393 23.5607C11.2206 23.842 11.6022 24 12 24C12.3978 24 12.7794 23.842 13.0607 23.5607C13.342 23.2794 13.5 22.8978 13.5 22.5V13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12C24 11.6022 23.842 11.2206 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5H13.5V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5V10.5H1.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.5V22.5Z"
        fill="currentcolor"
      />
    </svg>
  );

  return (
    <div className="bg-main-light dark:bg-main-dark px-4">
      <div className="max-w-[750px] min-h-[100vh] mx-auto py-5 md:py-10  relative">
        <h1 className="uppercase text-2xl mb-5 text-center font-medium dark:text-main-light">
          todo list
        </h1>
        <div className="flex gap-4 flex-wrap">
          <Input
            withIcon
            value={search}
            onChange={(e) => setSearch(() => e.target.value)}
            placeholder="Search note..."
          />
          <TodoFilter onFilter={(e) => setFilter(e)} />
          <ThemeSwitcher />
        </div>
        <div className="mx-auto max-w-[520px] min-h-[100vh] my-7">
          {todo
            .filter((e) =>
              filter == "completed"
                ? e.done
                : filter == "incompleted"
                ? !e.done
                : true
            )
            .filter((e) =>
              search != ""
                ? e.title.toLowerCase().includes(search.toLowerCase()) ||
                  e.desc.toLowerCase().includes(search.toLowerCase()) ||
                  e.date.toLowerCase().includes(search.toLowerCase())
                : true
            ).length <= 0 ? (
            <EmptyTodo />
          ) : (
            todo
              .filter((e) =>
                filter == "completed"
                  ? e.done
                  : filter == "incompleted"
                  ? !e.done
                  : true
              )
              .filter((e) =>
                search != ""
                  ? e.title.toLowerCase().includes(search.toLowerCase()) ||
                    e.desc.toLowerCase().includes(search.toLowerCase()) ||
                    e.date.toLowerCase().includes(search.toLowerCase())
                  : true
              )
              .map((item) => {
                return <TodoItem key={item.id} {...item} />;
              })
          )}
        </div>
        <Button
          onClick={open}
          className="sticky left-full bottom-10"
          radius="full"
          p="lg"
        >
          {plusIcon}
        </Button>
      </div>
      <ConfirmationPopup onAccept={() => deleteTodo(deletedTodo)} />
      <TodoCreationPopup />
      <TodoModificationPopup />
    </div>
  );
}

export default App;
