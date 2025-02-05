import { listComments } from "@src/apis/comments";
import { createSignal, For, onMount, Show } from "solid-js";
import { Comment } from "./Comment";
import { commentsStore, setPostId, setStoreComments } from "./store";
import { CommentSkeletons } from "./CommentSkeleton";
import styles from "./comment.module.scss";

interface CommentsProps {
  postId: number;
}

export const CommentsListing = (props: CommentsProps) => {
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    setPostId(Number(props.postId));
    listComments(props.postId)
      .then((res) => {
        setStoreComments(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <div>
      <Show when={!loading()} fallback={<CommentSkeletons />}>
        <Show
          when={commentsStore.comments.length > 0}
          fallback={
            <div class={styles["no-comments"]}>
              No comments yet. Be the first to comment!
            </div>
          }
        >
          <For
            each={commentsStore.comments.toSorted(
              (a, b) => Number(a.id) - Number(b.id)
            )}
          >
            {(comment) => <Comment {...comment} postId={props.postId} />}
          </For>
        </Show>
      </Show>
    </div>
  );
};
