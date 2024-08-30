import { ReactNode } from "react";

type PopupProps = {
  children: ReactNode;
  opened: boolean;
  close: () => void;
};

export default function Popup({ children, close, opened }: PopupProps) {
  return (
    <div
      onClick={close}
      className={`fixed top-0 w-screen h-screen bg-[#e2e8f0b3] dark:bg-[#25252591] z-[1000] ${
        opened ? "block" : "hidden"
      } `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="py-5 px-7 flex flex-col justify-between gap-8 rounded-2xl bg-white dark:bg-main-dark  outline outline-transparent  dark:outline-2 dark:outline-main-light shadow-sm absolute max-w-[600px] w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </div>
    </div>
  );
}
