export const generateCaptchaToken = ({
  action,
  retries = 3
}: {
  action: string;
  retries?: number;
}) => {
  if (window.grecaptcha) {
    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(function () {
        grecaptcha
          .execute(import.meta.env.PUBLIC_RECAPTCHA_KEY, {
            action,
          })
          .then(function (token) {
            resolve(token);
          })
          .then(undefined, () => {
            reject("Failed to generate captcha, please try again");
          });
      });
    });
  } else {
    if (retries > 0) {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(generateCaptchaToken({ action, retries: retries - 1 }));
        }, 1000);
      });
    } else {
      return Promise.reject("Failed to generate captcha, please try again");
    }
  }
};
