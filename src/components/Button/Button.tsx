import clsx from "clsx";
import type { JSX } from "solid-js/jsx-runtime";
import { Show, splitProps } from "solid-js";
import { css } from "@flairjs/client";

export const Button = (
  props: JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: () => JSX.Element;
  }
) => {
  const [local, other] = splitProps(props, [
    "children",
    "class",
    "icon",
    "onClick",
  ]);

  const Icon = local.icon!;

  return (
    <button
      type="button"
      {...other}
      onClick={local.onClick}
      class={clsx(
        "button",
        {
          "button--with-icon": !!local.icon,
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

Button.flair = css`
  @layer ui {
    .button {
      display: inline-flex;
      padding: 0.75rem 1.5rem;
      border: 2px solid var(--primary);
      border-radius: 0.25rem;
      background-color: var(--bg__primary);
      color: var(--fg__primary);
      cursor: pointer;
      font-family: inherit;
      font-size: 1rem;
      transition:
        background-color 0.2s,
        color 0.2s;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &--with-icon {
        gap: 0.75rem;
      }

      svg {
        display: block;
      }

      &:hover {
        background-color: var(--primary);
        color: #fff;
      }
    }
  }
`;
