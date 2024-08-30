import useStore from "../store";
import { Todo } from "../type";
import { Button } from "./button";

export function TodoItem(todo: Todo) {
  const { select, open } = useStore().todoDeletion;
  const { update } = useStore().todos;
  const { select: selectEditedTodo, open: openTodoModification } =
    useStore().todoModification;

  const editIcon = (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const deleteIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
        stroke="currentcolor"
      />
      <path
        d="M14.625 3.75H3.375"
        stroke="currentcolor"
        stroke-linecap="round"
      />
      <path
        d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
        stroke="currentcolor"
      />
      <path d="M10.5 9V12.75" stroke="currentcolor" stroke-linecap="round" />
      <path d="M7.5 9V12.75" stroke="currentcolor" stroke-linecap="round" />
    </svg>
  );

  const checkbox = (
    <div className="relative w-6 h-6">
      <input
        type="checkbox"
        className="relative peer shrink-0
  appearance-none w-6 h-6 border-2 border-main-purple rounded-sm bg-transparent
  checked:bg-main-purple checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100"
        checked={todo.done}
        onChange={(e) => {
          update({ ...todo, done: e.target.checked });
        }}
      />
      <svg
        className="
absolute 
text-white
w-4 h-4 top-1 left-1
hidden peer-checked:block
pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );

  return (
    <div className="flex flex-wrap items-center gap-4 py-3 border-b border-b-main-purple ">
      {checkbox}
      <div className="flex flex-col flex-grow">
        <p className="text-xs text-gray-500">{todo.date}</p>
        <p
          className={`capitalize font-medium text-xl dark:text-main-light text-ellipsis overflow-hidden max-w-[15em] whitespace-nowrap ${
            todo.done
              ? "line-through text-gray-400 dark:text-gray-400"
              : "text-black"
          }`}
        >
          {todo.title}
        </p>
        <p
          className={`text-ellipsis overflow-hidden max-w-[20em] whitespace-nowrap dark:text-main-light ${
            todo.done ? "text-gray-400 dark:text-gray-400" : "text-black"
          }`}
        >
          {todo.desc}
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          className="text-[#CDCDCD] hover:text-main-purple focus:text-main-purple"
          variant="subtle"
          onClick={() => {
            selectEditedTodo(todo);
            openTodoModification();
          }}
        >
          {editIcon}
        </Button>
        <Button
          onClick={() => {
            select(todo);
            open();
          }}
          className="text-[#CDCDCD] hover:text-red-700 focus:text-red-700"
          variant="subtle"
        >
          {deleteIcon}
        </Button>
      </div>
    </div>
  );
}
