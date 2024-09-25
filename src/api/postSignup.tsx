import { HttpResponse } from "../utils/types";
import { checkPostResponse } from "../utils/function";
import api from "../utils/axiosConfig";

export type SignUpParams = {
  email: string;
  mobile_no: string;
  mobile_prefix_no: string;
  password: string;
  password_confirmation: string;
};

export type SignUpResponse = {};

export const postSignUp = (params: SignUpParams) => {
  return api
    .post<HttpResponse<SignUpResponse>>("/register", {
      ...params,
    })
    .then(checkPostResponse);
};
