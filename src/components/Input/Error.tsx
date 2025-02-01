import clsx from "clsx";
import { WarningIcon } from "@src/icons/Warning";
import styles from "./input.module.scss";

export const ErrorContainer = (props: { message: string }) => {
  return (
    <div
      class={clsx("error-container", styles.error_container)}
      aria-live="polite"
    >
      <WarningIcon />
      <p>{props.message}</p>
    </div>
  );
};
