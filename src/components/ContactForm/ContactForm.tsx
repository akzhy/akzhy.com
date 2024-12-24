import { Paperplane } from "@src/icons/Paperplane";
import { generateCaptchaToken } from "@src/utils/generate-captcha-token";
import { createSignal } from "solid-js";
import { CaptchaMessage } from "../Atoms/CaptchaMessage";
import { Button } from "../Button";
import { Input, TextArea } from "../Input";
import styles from "./contact-form.module.scss";
import { ErrorContainer } from "../Input/Error";
import clsx from "clsx";

interface Fields {
  name?: string;
  email?: string;
  message?: string;
  captcha?: string;
}

export const ContactForm = () => {
  const [errors, setErrors] = createSignal<Fields>({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });

  const [loading, setLoading] = createSignal(false);

  const buttonDisabled = () => {
    const { captcha, ...relevantErrors } = errors();
    if (Object.values(relevantErrors).some((v) => v.length > 0)) return true;
    return false;
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

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
          newErrors.message = "Please enter a message with few more characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const token = await generateCaptchaToken({ action: "contact_form" })
      
        setLoading(false);
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
      {errors().captcha && (
        <div class={clsx("spaced", styles["general-error"])}>
          <ErrorContainer message={errors().captcha!} />
        </div>
      )}
      <Button
        type="submit"
        icon={() => <Paperplane />}
        disabled={buttonDisabled()}
      >
        Send
      </Button>
    </form>
  );
};
