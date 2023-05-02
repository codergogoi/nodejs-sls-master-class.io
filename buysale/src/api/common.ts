import axios, { AxiosResponse } from "axios";
import { ResponseModel } from "../../src/types";
import { BASE_URL } from "../utils/AppConst";

export const handleResponse = async (
  response: AxiosResponse
): Promise<ResponseModel> => {
  if (response.status === 200) {
    return {
      msg: "success",
      data: response.data.data,
    };
  }
  return { msg: "error occured" };
};

export const axiosAuth = (token: string) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
