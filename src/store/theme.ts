import { StateCreator } from "zustand";
import { Theme, THEME_STORAGE_KEY } from "../type";

type ThemeStore = {
  name: Theme;
  toggleTheme: () => void;
  update: (a: Theme) => void;
};

export type ThemeMethodStore = {
  theme: ThemeStore;
};

function updateAppTheme(a: Theme) {
  if (a == "dark") {
    document.body?.classList.remove("light");
    document.body?.classList.add("dark");
  } else {
    document.body?.classList.add("light");
    document.body?.classList.remove("dark");
  }
}

function savePreferredTheme(a: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, a);
}

const themeStore: StateCreator<ThemeMethodStore, [], [], ThemeMethodStore> = (
  set,
  get
) => ({
  theme: {
    name: "light",
    toggleTheme() {
      const theme = get().theme.name;
      let newTheme: Theme = "light";
      if (theme == "light") newTheme = "dark";
      set((curr) => ({
        theme: {
          ...curr.theme,
          name: newTheme,
        },
      }));
      updateAppTheme(newTheme);
      savePreferredTheme(newTheme);
    },
    update(a) {
      set((curr) => ({
        theme: {
          ...curr.theme,
          name: a,
        },
      }));
      updateAppTheme(a);
      savePreferredTheme(a);
    },
  },
});

export default themeStore;
