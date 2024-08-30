import useStore from "../store";
import { Button } from "./button";
import Popup from "./popup";

type ConfirmationPopupProps = {
  onDecline?: () => void;
  onAccept: () => void;
};
export function ConfirmationPopup({
  onAccept,
  onDecline,
}: ConfirmationPopupProps) {
  const { close, opened } = useStore().todoDeletion;
  return (
    <Popup opened={opened} close={close}>
      <p className="text-3xl  text-center uppercase font-medium dark:text-main-light">
        are you sure
      </p>
      <div className="flex justify-around min-h-[10rem] items-end">
        <Button
          variant="outlined"
          onClick={() => {
            onDecline?.();
            close();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onAccept();
            close();
          }}
        >
          Delete
        </Button>
      </div>
    </Popup>
  );
}
