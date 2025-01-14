import { createEffect, createSignal, onMount } from "solid-js";
import styles from "./theme-switcher.module.scss";
import clsx from "clsx";
import { MoonIcon } from "@src/icons/Moon";
import { SunIcon } from "@src/icons/Sun";

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = createSignal<"light" | "dark">(
    "light"
  );

  onMount(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme) {
      if (localStorageTheme === "0" || localStorageTheme === "dark") {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  });

  createEffect(() => {
    const theme = currentTheme();
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  });

  const toggleTheme = () => {
    if (currentTheme() === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <button
      title="Switch theme"
      class={styles["theme-switcher"]}
      onClick={toggleTheme}
    >
      <div
        class={clsx(styles["icon-container"], {
          [styles.active]: currentTheme() === "light",
        })}
      >
        <MoonIcon />
      </div>
      <div
        class={clsx(styles["icon-container"], {
          [styles.active]: currentTheme() === "dark",
        })}
      >
        <SunIcon />
      </div>
    </button>
  );
};
