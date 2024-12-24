import clsx from "clsx";
import { Show, splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { ErrorContainer } from "./Error";
import styles from "./input.module.scss";

export interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
  error?: string;
  showErrorBox?: boolean;
}

export const Input = (props: InputProps) => {
  const [local, other] = splitProps(props, [
    "containerClassName",
    "label",
    "class",
    "error",
  ]);

  return (
    <label class={clsx(styles.label, local.containerClassName)}>
      <p class={styles.label_text}>{local.label}</p>
      <input type="text" class={clsx(styles.field, local.class)} {...other} />
      <Show when={local.error}>
        <ErrorContainer message={local.error!} />
      </Show>
    </label>
  );
};
