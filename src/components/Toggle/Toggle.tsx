import { css } from "@flairjs/client";
import clsx from "clsx";
import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

export type ToggleProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  labelClass?: string;
};

export const Toggle = (props: ToggleProps) => {
  const [local, other] = splitProps(props, ["labelClass"]);

  return (
    <label class={clsx("checkbox", local.labelClass)}>
      <input type="checkbox" {...other} checked={props.checked} />
      <div class="checkmark"></div>
      <div class="checkbox-body">{props.children}</div>
    </label>
  );
};

Toggle.flair = css`
  .checkbox {
    display: inline-block;
    position: relative;
    padding-left: 50px;
    cursor: pointer;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: var(--primary);

        &::after {
          left: 21px;
        }
      }

      &:focus ~ .checkmark {
        box-shadow: 0 0 0 2px var(--fg__link);
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 1px;
    left: 0;
    height: 22px;
    width: 40px;
    background-color: var(--bg__accent);
    transition: background-color 0.25s ease;
    border-radius: 11px;

    &::after {
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      width: 1rem;
      height: 1rem;
      display: block;
      background-color: var(--bg__primary);
      border-radius: 50%;
      transition: left 0.25s ease;
    }
  }

  .checkbox-body {
    color: var(--fg__primary);
    line-height: 1.4;
    font-size: 1rem;
    transition: color 0.25s ease;
  }
`;
