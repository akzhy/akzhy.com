import { api } from "@src/utils/api";

interface UnsubscribeRequest {
  key: string;
  captcha: string;
}

export const unsubscribe = ({ key, captcha }: UnsubscribeRequest) => {
  return api
    .post("restcomments/v1/subscriptions/unsubscribe", {
      json: { key, captchaToken: captcha },
    })
    .json();
};
