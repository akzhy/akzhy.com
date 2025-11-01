import { css } from "@flairjs/client";
import { CheckCircleIcon } from "@src/icons/CheckCircle";
import type { CommentItem } from "@src/utils/types";
import clsx from "clsx";
import { formatDistance } from "date-fns";
import { createSignal, For, Show } from "solid-js";
import { Button } from "../Button";
import { CommentForm } from "./CommentForm";
import { commentsStore } from "./store";

export interface CommentProps extends CommentItem {
  isReply?: boolean;
  /**
   * Listing parent doesn't have to be the direct parent of the comment.
   * It is the top-level comment that the comment is replying to.
   * Max nesting is 4 levels deep. If the comment is replying to a comment that is more than 4 levels deep, it will be considered as replying to the top-level comment.
   * To get the actual parent of the comment, use the parent_id field along with the `commentsIdMapped` property from the store.
   */
  listingParent?: CommentItem;
  postId: number;
}

export const Comment = (data: CommentProps) => {
  const date = new Date(data.date);
  const formattedDate = formatDistance(date, new Date(), {
    addSuffix: true,
  });

  const [replyFormShown, setReplyFormShown] = createSignal(false);

  const sortedChildren = () =>
    data.children?.toSorted((a, b) => Number(a.id) - Number(b.id));

  return (
    <div
      class={clsx("comment", {
        reply: data.isReply,
      })}
      id={`c${data.id}`}
    >
      <div class="comment-body">
        <div class="comment-header">
          <div class="comment-avatar-container">
            <img src={data.avatar} alt="Gravatar image" />
          </div>
          <div class="comment-header-meta">
            <p class="comment-author-name">
              {data.author}
              {data.is_post_author && (
                <span
                  class="comment-verified"
                  title="Verified author"
                  aria-label="Verified author"
                >
                  <CheckCircleIcon size={18} stroke-width={3} />
                </span>
              )}
            </p>
            <p class="comment-date">{formattedDate}</p>
          </div>
        </div>
        {data.listingParent && data.parent_id !== data.listingParent.id && (
          <div class="comment-replying-to">
            <a href={`#c${data.parent_id}`} class="link">
              Replying to{" "}
              {commentsStore.commentsIdMapped[data.parent_id]?.author}'s comment
            </a>
          </div>
        )}
        <div class="comment__content comment-content">
          <div innerHTML={data.content} />
        </div>
        <div class="reply-section">
          <Show
            when={replyFormShown()}
            fallback={
              <Button
                class="reply-button"
                onClick={() => setReplyFormShown(true)}
              >
                Reply
              </Button>
            }
          >
            <div class="reply-form">
              <CommentForm
                postId={commentsStore.postId}
                successCallback={(newComment) => {
                  setTimeout(() => {
                    setReplyFormShown(false);
                    document
                      .getElementById(`c${newComment.id}`)
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 2000);
                }}
                title={
                  <span>
                    Reply{" "}
                    <button
                      type="button"
                      class="reply-cancel"
                      onClick={() => setReplyFormShown(false)}
                    >
                      Cancel
                    </button>
                  </span>
                }
                parent={data.id}
              />
            </div>
          </Show>
        </div>
      </div>
      <For each={sortedChildren()}>
        {(child) => (
          <Comment
            {...child}
            listingParent={data}
            isReply
            postId={data.postId}
          />
        )}
      </For>
    </div>
  );
};

Comment.flair = css`
  .comment {
    width: 100%;
    background-color: var(--bg__secondary);
    border-radius: 0.25rem;
    margin: 1.5rem 0;
    padding: 0.75rem;

    &.reply {
      border: 2px solid var(--bg__accent);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .comment-body {
    padding: 0.75rem;
  }

  .comment-header {
    display: flex;
    align-items: center;
  }

  .comment-avatar-container {
    border-radius: 0.25rem;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    background-color: var(--bg__accent);

    img {
      width: 100%;
    }
  }

  .comment-header-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 0;
    margin-left: 1rem;
  }

  .comment-author-name {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
  }

  .comment-verified {
    color: var(--fg__success);
    margin-left: 0.5rem;

    svg {
      display: block;
    }
  }

  .comment-date {
    font-size: 0.875rem;
    color: var(--fg__light);
  }

  .comment-replying-to {
    margin-bottom: 1rem;

    a {
      font-size: 0.875rem;
    }
  }

  .comment__content {
    margin: 1rem 0;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    pre,
    code,
    img,
    blockquote {
      max-width: 100%;
      overflow: auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    pre {
      margin: 0.5rem 0;
    }

    pre {
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .reply-section {
    margin: 1rem 0;
  }

  .reply-form {
    padding: 1rem;
  }

  .reply-cancel {
    background: transparent;
    border: none;
    color: var(--fg__link);
    cursor: pointer;
    text-decoration: underline;
    margin-left: 0.5rem;
  }

  .reply-button {
    padding: 0.5rem 1rem;
  }
`;
