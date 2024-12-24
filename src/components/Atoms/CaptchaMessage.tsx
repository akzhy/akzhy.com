import type { JSX } from "solid-js/jsx-runtime";

export const CaptchaMessage = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...props}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a href="https://policies.google.com/privacy" class="link">
        Privacy Policy
      </a>{" "}
      and{" "}
      <a href="https://policies.google.com/terms" class="link">
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
};
