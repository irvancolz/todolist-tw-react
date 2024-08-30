import { useState } from "react";
import { Button } from "./button";

export function TodoFilter({ onFilter }: { onFilter: (e: string) => void }) {
  const [expand, setExpand] = useState<boolean>(false);
  const [value, setValue] = useState<string>("all");
  const filterValues = ["all", "completed", "incompleted"];

  function toggle() {
    if (expand) {
      setExpand(() => false);
      return;
    }
    setExpand(() => true);
  }

  const modalBaseStyle =
    "border z-50 bg-main-light rounded-[5px] border-main-purple text-main-purple radius-[5px] absolute top-full w-fit origin-top flex flex-col transition-transform";

  const chevronIcon = (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      className={`transition-transform ${expand ? "rotate-180" : "rotate-0"}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L1 1"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 1L4 4"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className="relative">
      <Button
        onClick={toggle}
        className="uppercase font-medium"
        icon={chevronIcon}
      >
        <span className="text-ellipsis w-[3em] overflow-hidden">{value}</span>
      </Button>
      <div
        className={`${modalBaseStyle} ${expand ? "scale-y-100" : "scale-y-0"}`}
      >
        {filterValues.map((val, i) => {
          return (
            <Button
              key={i}
              className="capitalize px-2 py-1 text-start font-medium hover:bg-focus-purple"
              variant="subtle"
              onClick={() => {
                onFilter(val);
                setValue(val);
                toggle();
              }}
            >
              {val}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
