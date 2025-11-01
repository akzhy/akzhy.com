import { css } from "@flairjs/client";
import clsx from "clsx";
import { Show, splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { ErrorContainer } from "./Error";

export interface TextAreaProps
  extends JSX.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  containerClassName?: string;
  error?: string;
  autoExpand?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
  const [local, other] = splitProps(props, [
    "containerClassName",
    "label",
    "class",
    "error",
    "autoExpand",
  ]);

  return (
    <label class={clsx("label", local.containerClassName)}>
      <p class="label-text">{local.label}</p>
      <textarea
        class={clsx("field", "textarea", local.class)}
        {...other}
        onKeyDown={(e) => {
          if (local.autoExpand) {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }
          if (typeof other.onKeyDown === "function") {
            other.onKeyDown(e);
          }
        }}
      ></textarea>
      <Show when={local.error}>
        <ErrorContainer message={local.error!} />
      </Show>
    </label>
  );
};

TextArea.flair = css`
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

    &.textarea {
      resize: vertical;
      min-height: 80px;
      max-height: 400px;
    }

    &:focus {
      border-color: var(--primary);
    }
  }
`;
