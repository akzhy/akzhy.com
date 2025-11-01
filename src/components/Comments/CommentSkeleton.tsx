import { css } from "@flairjs/client";
import { Index } from "solid-js";

export const CommentSkeleton = () => {
  return (
    <div class="comment">
      <div class="header">
        <div class="avatar skeleton"></div>
        <div>
          <div class="name skeleton"></div>
          <div class="date skeleton"></div>
        </div>
      </div>
      <div class="content">
        <div class="content-line skeleton"></div>
        <div class="content-line skeleton"></div>
      </div>
    </div>
  );
};

export const CommentSkeletons = ({ count = 3 }: { count?: number }) => {
  return (
    <Index each={Array.from({ length: count })}>
      {() => <CommentSkeleton />}
    </Index>
  );
};

CommentSkeleton.flair = css`
  .comment {
    background-color: var(--bg__secondary);
    opacity: 0.75;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: 0.25rem;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 0.25rem;
  }

  .name {
    width: 6rem;
    height: 0.75rem;
  }

  .date {
    width: 8rem;
    height: 0.5rem;
    margin: 0.75rem 0;
  }

  .content {
    margin: 1rem 0;
  }

  .content-line {
    height: 0.75rem;

    &:last-child {
      width: 33.3333%;
      margin: 0.75rem 0;
    }
  }

  .skeleton {
    position: relative;
    overflow: hidden;
    background-color: var(--bg__accent);

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        hsla(0, 0%, 100%, 0.2),
        transparent
      );
      animation: skeletonMove 2s infinite;
    }
  }

  @keyframes skeletonMove {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
`;
