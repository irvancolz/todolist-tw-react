import { useEffect, useState } from "react";
import useStore from "../store";
import { Todo } from "../type";
import { Button } from "./button";
import { Input } from "./input";
import Popup from "./popup";

export function TodoModificationPopup() {
  const [data, setData] = useState<Todo | null>(null);
  const { close, opened, todo } = useStore().todoModification;
  const { update } = useStore().todos;

  useEffect(() => {
    setData(() => todo);
  }, [todo]);

  return (
    <Popup close={close} opened={opened}>
      <p className="text-3xl  text-center uppercase font-medium dark:text-main-light">
        edit note
      </p>

      <div className="flex flex-col gap-4">
        <Input
          value={data?.title}
          onChange={(e) =>
            setData((prev) => ({ ...prev!, title: e.target.value }))
          }
          placeholder="Title"
          withIcon={false}
        />
        <Input
          value={data?.desc}
          onChange={(e) =>
            setData((prev) => ({ ...prev!, desc: e.target.value }))
          }
          placeholder="Description"
          withIcon={false}
        />
        <input
          type="date"
          value={data?.date}
          className="bg-transparent outline-main-purple rounded-[5px] py-2 px-3 border border-main-purple dark:text-main-light dark:border-main-light dark:border dark:has-[:focus]:outline-main-light dark:font-normal"
          onChange={(e) =>
            setData((prev) => ({
              ...prev!,
              date: e.target.value,
            }))
          }
        />
      </div>

      <div className="flex justify-around">
        <Button
          variant="outlined"
          onClick={() => {
            close();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (!data) return;
            update(data);
            close();
          }}
        >
          Apply
        </Button>
      </div>
    </Popup>
  );
}
