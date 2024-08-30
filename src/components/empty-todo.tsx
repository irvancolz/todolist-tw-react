import emptyTodoImg from "/detective-dark.png";

export function EmptyTodo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={emptyTodoImg} alt="no task available" />
      <p className="font-medium text-center dark:text-main-light">Empty...</p>
    </div>
  );
}
