import { Index } from "solid-js";
import styles from './comment-skeleton.module.scss';
import clsx from "clsx";

export const CommentSkeleton = () => {
  return <div class={styles.comment}>
    <div class={styles.header}>
      <div class={clsx(styles.avatar, styles.skeleton)}></div>
      <div>
        <div class={clsx(styles.name, styles.skeleton)}></div>
        <div class={clsx(styles.date, styles.skeleton)}></div>
      </div>
    </div>
    <div class={styles.content}>
      <div class={clsx(styles['content-line'], styles.skeleton)}></div>
      <div class={clsx(styles['content-line'], styles.skeleton)}></div>
    </div>
  </div>;
};

export const CommentSkeletons = ({ count = 3 }: { count?: number }) => {
  return (
    <Index each={Array.from({ length: count })}>
      {() => <CommentSkeleton />}
    </Index>
  );
};
