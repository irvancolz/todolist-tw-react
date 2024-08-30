import { create } from "zustand";
import themeStore, { ThemeMethodStore } from "./theme";
import todoStore, { TodoMethodStore } from "./todos";
import todoDeletionStore, { TodoDeletionStoreMethod } from "./delete-todo";
import todoCreationStore, { TodoCreationStoreMethod } from "./create-todo";
import todoModificationStore, {
  TodoModificationStoreMethod,
} from "./edit-todo";

type Store = ThemeMethodStore &
  TodoMethodStore &
  TodoDeletionStoreMethod &
  TodoCreationStoreMethod &
  TodoModificationStoreMethod;

const useStore = create<Store>()((...state) => ({
  ...themeStore(...state),
  ...todoStore(...state),
  ...todoDeletionStore(...state),
  ...todoCreationStore(...state),
  ...todoModificationStore(...state),
}));

export default useStore;
