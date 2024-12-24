import clsx from "clsx";
import { Show, splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { ErrorContainer } from "./Error";
import styles from "./input.module.scss";

export interface TextAreaProps
  extends JSX.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  containerClassName?: string;
  error?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const [local, other] = splitProps(props, [
    "containerClassName",
    "label",
    "class",
    "error",
  ]);

  return (
    <label class={clsx(styles.label, local.containerClassName)}>
      <p class={styles.label_text}>{local.label}</p>
      <textarea class={clsx(styles.field, local.class)} {...other}></textarea>
      <Show when={local.error}>
        <ErrorContainer message={local.error!} />
      </Show>
    </label>
  );
};
