import { ResponseModel } from "../types";
import { BASE_URL } from "../utils/AppConst";
import { axiosAuth, handleResponse } from "./common";

export const CollectPaymentApi = async (
  token: string
): Promise<ResponseModel> => {
  try {
    const auth = axiosAuth(token);
    const response = await auth.post(`${BASE_URL}/collect-payment`);
    return handleResponse(response);
  } catch (error) {
    console.log(error);
    return {
      msg: "error occured",
    };
  }
};

export const ConfirmOrder = async (token: string): Promise<ResponseModel> => {
  try {
    const auth = axiosAuth(token);
    const response = await auth.post(`${BASE_URL}/order`);
    return handleResponse(response);
  } catch (error) {
    console.log(error);
    return {
      msg: "error occured",
    };
  }
};
