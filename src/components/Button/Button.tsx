import clsx from "clsx";
import styles from "./button.module.scss";
import type { JSX } from "solid-js/jsx-runtime";
import { Show, splitProps } from "solid-js";

export const Button = (
  props: JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: () => JSX.Element;
  }
) => {
  const [local, other] = splitProps(props, ["children", "class", "icon"]);

  const Icon = local.icon!;

  return (
    <button
      type="button"
      {...other}
      class={clsx(
        styles.button,
        {
          [styles["button--with-icon"]]: !!local.icon,
        },
        local.class
      )}
    >
      <span>{local.children}</span>
      <Show when={local.icon}>
        <span>
          <Icon />
        </span>
      </Show>
    </button>
  );
};
