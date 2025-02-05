import clsx from "clsx";
import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import styles from "./toggle.module.scss";

export type ToggleProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  labelClass?: string;
};

export const Toggle = (props: ToggleProps) => {
  const [local, other] = splitProps(props, ["labelClass"]);

  return (
    <label class={clsx(styles.checkbox, local.labelClass)}>
      <input type="checkbox" {...other} checked={props.checked} />
      <div class={styles.checkmark}></div>
      <div class={styles["checkbox-body"]}>
        {props.children}
      </div>
    </label>
  );
};
