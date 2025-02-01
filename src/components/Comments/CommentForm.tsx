import { addComment } from "@src/apis/comments";
import { Paperplane } from "@src/icons/Paperplane";
import { generateCaptchaToken } from "@src/utils/generate-captcha-token";
import clsx from "clsx";
import { createSignal, Show, type JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { CaptchaMessage } from "../Atoms/CaptchaMessage";
import { Loader } from "../Atoms/Loader";
import { Button } from "../Button";
import { Input, TextArea } from "../Input";
import { ErrorContainer } from "../Input/Error";
import formStyles from "@src/styles/form.module.scss";
import { Toggle } from "../Toggle";
import { addCommentToStore } from "./store";
import type { CommentItem } from "@src/utils/types";

interface ContactFormProps {
  postId: number;
  parent?: string;
  title: JSX.Element;
  successCallback?: (response: CommentItem) => void;
}

interface Fields {
  name?: string;
  email?: string;
  comment?: string;
  captcha?: string;
  subscribe?: string;
}

export const CommentForm = (props: ContactFormProps) => {
  const [errors, setErrors] = createSignal<
    Fields & {
      other?: string;
    }
  >({
    name: "",
    email: "",
    comment: "",
    captcha: "",
    other: "",
  });

  const [loading, setLoading] = createSignal(false);

  const [showSuccess, setShowSuccess] = createSignal(false);

  const buttonDisabled = () => {
    const { captcha, other, ...relevantErrors } = errors();
    if (Object.values(relevantErrors).some((v) => v.length > 0)) return true;
    return false;
  };

  return (
    <form
      onSubmit={async (e) => {
        const form = e.currentTarget;
        try {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const values = Object.fromEntries(formData) as Fields;

          setErrors({ name: "", email: "", comment: "", captcha: "" });

          const newErrors: Fields = {};

          if (!values.name || values.name?.trim().length === 0) {
            newErrors.name = "Please enter a name";
          }

          if (!values.email?.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            newErrors.email = "Please enter a valid email";
          }

          if (!values.comment || values.comment.trim().length < 10) {
            newErrors.comment =
              "Please enter a comment with few more characters";
          }

          setErrors(newErrors);

          if (Object.keys(newErrors).length > 0) return;

          setLoading(true);

          const token = await generateCaptchaToken({ action: "comment_form" });

          const newComment = await addComment({
            ...(values as Required<Fields>),
            subscribe: values.subscribe === "on",
            post: props.postId,
            parent: props.parent || "0",
            captchaToken: token,
          });

          addCommentToStore(newComment.data);

          setShowSuccess(true);
          form.reset();

          if (props.successCallback) {
            props.successCallback(newComment.data);
          }

          setTimeout(() => {
            setShowSuccess(false);
            setErrors({ name: "", email: "", message: "", captcha: "" });
          }, 3000);
        } catch (e) {
          console.log(e);
          setErrors({
            ...errors(),
            other: "An error occurred. Please try again.",
          });
        } finally {
          setLoading(false);
        }
      }}
    >
      <div class={formStyles.spaced}>
        <h2 class="comment-title">{props.title}</h2>
      </div>
      <div class={formStyles.spaced}>
        <Input
          name="name"
          label="Name"
          error={errors().name}
          onInput={(e) => {
            setErrors({ ...errors(), name: "" });
          }}
        />
      </div>
      <div class={formStyles.spaced}>
        <Input
          name="email"
          label="Email"
          error={errors().email}
          onInput={(e) => {
            setErrors({ ...errors(), email: "" });
          }}
        />
      </div>
      <div class={formStyles.spaced}>
        <TextArea
          name="comment"
          label="Comment"
          error={errors().comment}
          autoExpand
          onInput={(e) => {
            setErrors({ ...errors(), comment: "" });
          }}
        />
      </div>
      <div class={formStyles.spaced}>
        <Toggle name="subscribe" checked>
          Get email notifications for replies
        </Toggle>
      </div>
      <div class={formStyles.spaced}>
        <CaptchaMessage class={formStyles["captcha-message"]} />
      </div>
      <Show when={errors().captcha || errors().other}>
        <div class={clsx("spaced", formStyles["general-error"])}>
          <ErrorContainer message={errors().captcha! || errors().other!} />
        </div>
      </Show>
      <Show when={showSuccess()}>
        <div class={formStyles["success-message"]}>
          <p>Message sent successfully!</p>
        </div>
      </Show>
      <Button
        type="submit"
        icon={() => <Dynamic component={loading() ? Loader : Paperplane} />}
        disabled={buttonDisabled()}
      >
        Comment
      </Button>
    </form>
  );
};
