import { submitContactForm } from "@src/apis/contact-form";
import { Paperplane } from "@src/icons/Paperplane";
import styles from "@src/styles/form.module.scss";
import { generateCaptchaToken } from "@src/utils/generate-captcha-token";
import clsx from "clsx";
import { createSignal, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { CaptchaMessage } from "../Atoms/CaptchaMessage";
import { Loader } from "../Atoms/Loader";
import { Button } from "../Button";
import { Input, TextArea } from "../Input";
import { ErrorContainer } from "../Input/Error";

interface Fields {
  name?: string;
  email?: string;
  message?: string;
  captcha?: string;
}

export const ContactForm = () => {
  const [errors, setErrors] = createSignal<
    Fields & {
      other?: string;
    }
  >({
    name: "",
    email: "",
    message: "",
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

          setErrors({ name: "", email: "", message: "", captcha: "" });

          const newErrors: Fields = {};

          if (!values.name || values.name?.trim().length === 0) {
            newErrors.name = "Please enter a name";
          }

          if (!values.email?.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            newErrors.email = "Please enter a valid email";
          }

          if (!values.message || values.message.trim().length < 10) {
            newErrors.message =
              "Please enter a message with few more characters";
          }

          setErrors(newErrors);

          if (Object.keys(newErrors).length > 0) return;

          setLoading(true);

          const token = await generateCaptchaToken({ action: "contact_form" });

          await submitContactForm({
            ...values,
            captcha: token,
          } as Required<Fields>);

          setShowSuccess(true);
          form.reset();

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
      <div class={styles.spaced}>
        <Input
          name="name"
          label="Name"
          error={errors().name}
          onInput={(e) => {
            setErrors({ ...errors(), name: "" });
          }}
        />
      </div>
      <div class={styles.spaced}>
        <Input
          name="email"
          label="Email"
          error={errors().email}
          onInput={(e) => {
            setErrors({ ...errors(), email: "" });
          }}
        />
      </div>
      <div class={styles.spaced}>
        <TextArea
          name="message"
          label="Message"
          error={errors().message}
          onInput={(e) => {
            setErrors({ ...errors(), message: "" });
          }}
        />
        <CaptchaMessage class={styles["captcha-message"]} />
      </div>
      <Show when={errors().captcha || errors().other}>
        <div class={clsx("spaced", styles["general-error"])}>
          <ErrorContainer message={errors().captcha! || errors().other!} />
        </div>
      </Show>
      <Show when={showSuccess()}>
        <div class={styles["success-message"]}>
          <p>Message sent successfully!</p>
        </div>
      </Show>
      <Button
        type="submit"
        icon={() => <Dynamic component={loading() ? Loader : Paperplane} />}
        disabled={buttonDisabled()}
      >
        Send
      </Button>
    </form>
  );
};
