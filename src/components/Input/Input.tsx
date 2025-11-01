import { css } from "@flairjs/client";
import clsx from "clsx";
import { Show, splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { ErrorContainer } from "./Error";

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
    <label class={clsx("label", local.containerClassName)}>
      <p class="label-text">{local.label}</p>
      <input type="text" class={clsx("field", local.class)} {...other} />
      <Show when={local.error}>
        <ErrorContainer message={local.error!} />
      </Show>
    </label>
  );
};

Input.flair = css`
  .label {
    display: block;

    &:hover {
      .field {
        border-color: var(--secondary);
      }
    }
  }

  .label-text {
    margin-bottom: 0.25rem;
    margin-left: 0.25rem;
  }

  .field {
    border: 2px solid var(--input_border);
    padding: 0.75rem 1rem;
    color: var(--fg__primary);
    background-color: var(--bg__primary);
    width: 100%;
    outline: none;
    border-radius: 0.25rem;
    transition: border-color 0.25s ease;

    &:focus {
      border-color: var(--primary);
    }
  }
`;
