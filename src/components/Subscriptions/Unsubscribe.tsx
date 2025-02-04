import { createSignal, Show } from "solid-js";
import { Button } from "../Button";
import { generateCaptchaToken } from "@src/utils/generate-captcha-token";
import { unsubscribe } from "@src/apis/unsubscribe";

export const Unsubscribe = () => {
  const [status, setStatus] = createSignal<
    "confirmation" | "success" | "error"
  >("confirmation");
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    try {
      const captchaToken = await generateCaptchaToken({
        action: "unsub",
      });
      const params = new URLSearchParams(window.location.search);
      if (!params.has("unsub")) {
        throw new Error("No unsub parameter found in URL");
      }
      await unsubscribe({
        key: params.get("unsub") as string,
        captcha: captchaToken,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Show when={status() === "confirmation"}>
        <p>
          You will no longer receive email notifications for replies to your
          comment
        </p>
      </Show>
      <Show when={status() === "success"}>
        <p>You have successfully unsubscribed</p>
      </Show>
      <Show when={status() === "error"}>
        <p>There was an error unsubscribing, please try again</p>
      </Show>
      <Show when={status() === "confirmation" || status() === "error"}>
        <Button
          onClick={handleSubmit}
          disabled={loading()}
        >
          {loading() ? "Unsubscribing..." : "Unsubscribe"}
        </Button>
      </Show>
    </div>
  );
};
