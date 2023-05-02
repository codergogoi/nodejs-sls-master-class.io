import axios from "axios";
import { BASE_URL } from "../utils/AppConst";
import { ResponseModel, RegisterModel } from "../types";
import { handleResponse } from "./common";

export const LoginAPI = async (
  email: string,
  password: string
): Promise<ResponseModel> => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return handleResponse(response);
  } catch (error) {
    console.log(error);
    return {
      msg: "error occured",
    };
  }
};

export const RegisterApi = async ({
  email,
  phone,
  password,
}: RegisterModel): Promise<ResponseModel> => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, {
      email: email,
      password: password,
      phone: phone,
    });
    return handleResponse(response);
  } catch (error) {
    console.log(error);
    return {
      msg: "error occured",
    };
  }
};
