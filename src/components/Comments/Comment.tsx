import { CheckCircle } from "@src/icons/CheckCircle";
import type { CommentItem } from "@src/utils/types";
import clsx from "clsx";
import { formatDistance } from "date-fns";
import { createSignal, For, Show } from "solid-js";
import styles from "./comment.module.scss";
import { CommentForm } from "./CommentForm";
import { commentsStore } from "./store";
import { Button } from "../Button";

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
      class={clsx(styles.comment, {
        [styles.reply]: data.isReply,
      })}
      id={`c${data.id}`}
    >
      <div class={styles["comment-body"]}>
        <div class={styles["comment-header"]}>
          <div class={styles["comment-avatar-container"]}>
            <img src={data.avatar} alt="Gravatar image" />
          </div>
          <div class={styles["comment-header-meta"]}>
            <p class={styles["comment-author-name"]}>
              {data.author}
              {data.is_post_author && (
                <span
                  class={styles["comment-verified"]}
                  title="Verified author"
                  aria-label="Verified author"
                >
                  <CheckCircle size={18} stroke-width={3} />
                </span>
              )}
            </p>
            <p class={styles["comment-date"]}>{formattedDate}</p>
          </div>
        </div>
        {data.listingParent && data.parent_id !== data.listingParent.id && (
          <div class={styles["comment-replying-to"]}>
            <a href={`#c${data.parent_id}`} class="link">
              Replying to{" "}
              {commentsStore.commentsIdMapped[data.parent_id]?.author}'s comment
            </a>
          </div>
        )}
        <div class={clsx(styles["comment-content"], "comment-content")}>
          <div innerHTML={data.content} />
        </div>
        <div class={styles["reply-section"]}>
          <Show
            when={replyFormShown()}
            fallback={
              <Button
                class={styles["reply-button"]}
                onClick={() => setReplyFormShown(true)}
              >
                Reply
              </Button>
            }
          >
            <div class={styles["reply-form"]}>
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
                      class={styles["reply-cancel"]}
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
        {/* <div class="my-4">
          {replyActive ? (
            <CommentForm
              postId={data.postId}
              updateComments={data.updateComments}
              parent={data.id}
              closeReply={() => {
                setReplyActive(false);
              }}
            />
          ) : (
            <button
              class="py-2 px-6 rounded inline-block border-2 border-primary text-fg-primary hover:bg-primary focus:bg-primary focus:outline-none focus:border-secondary"
              onClick={() => {
                setReplyActive(true);
              }}
            >
              Reply
            </button>
          )}
        </div> */}
      </div>
      <For each={sortedChildren()}>
        {(child) => (
          <Comment
            {...child}
            listingParent={data}
            isReply
            postId={data.postId}
            // updateComments={data.updateComments}
          />
        )}
      </For>
    </div>
  );
};
