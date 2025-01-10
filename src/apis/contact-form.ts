import { api } from "@src/utils/api";

interface RequestBody {
  name: string;
  email: string;
  message: string;
  captcha: string;
}

interface ResponseBody {
  result: boolean;
  error?: string;
}

export const submitContactForm = async (data: RequestBody) => {
  return api.post<ResponseBody>("restcontact/v1/add", { json: data }).json();
};
