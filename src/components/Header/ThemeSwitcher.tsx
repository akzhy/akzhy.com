import { css } from "@flairjs/client";
import { MoonIcon } from "@src/icons/Moon";
import { SunIcon } from "@src/icons/Sun";
import clsx from "clsx";
import { createEffect, createSignal, onMount } from "solid-js";

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
      class="theme-switcher"
      onClick={toggleTheme}
    >
      <div
        class={clsx("icon-container", {
          active: currentTheme() === "light",
        })}
      >
        <MoonIcon />
      </div>
      <div
        class={clsx("icon-container", {
          active: currentTheme() === "dark",
        })}
      >
        <SunIcon />
      </div>
    </button>
  );
};

ThemeSwitcher.flair = css`
  .theme-switcher {
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: none;
    color: var(--fg__primary);
  }

  .icon-container {
    position: absolute;
    transform: scale(0, 0);
    transition: transform 0.3s;

    &.active {
      transform: scale(1, 1);
    }
  }
`;
