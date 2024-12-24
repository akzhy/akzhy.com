import clsx from "clsx";
import { Warning } from "@src/icons/Warning";
import styles from "./input.module.scss";

export const ErrorContainer = (props: { message: string }) => {
  return (
    <div
      class={clsx("error-container", styles.error_container)}
      aria-live="polite"
    >
      <Warning />
      <p>{props.message}</p>
    </div>
  );
};
