import { css } from "@flairjs/client";
import { WarningIcon } from "@src/icons/Warning";

export const ErrorContainer = (props: { message: string }) => {
  return (
    <div
      class="error-container container"
      aria-live="polite"
    >
      <WarningIcon />
      <p>{props.message}</p>
    </div>
  );
};

ErrorContainer.flair = css`
  .container {
    border-radius: 0.25rem;
    margin-top: 0.75rem;
    padding: 0.75rem;
    color: var(--fg__error);
    display: flex;
    align-items: center;
    background-color: var(--bg__secondary);

    svg {
      flex-shrink: 0;
    }

    p {
      margin-left: 0.5rem;
    }
  }
`;
