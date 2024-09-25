import { checkPostResponse } from "../utils/function";
import api from "../utils/axiosConfig";

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  expired_at: string;
  name: string;
  email?: string;
};

// export const postLogin = (params: LoginParams) => {
//   return api
//     .post<LoginResponse>("/login", params)
//     .then((response) => checkPostResponse(response));
// };
export const postLogin = async (params: LoginParams) => {
  try {
    const response = await api.post<LoginResponse>("/login", params);
    return checkPostResponse(response);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
