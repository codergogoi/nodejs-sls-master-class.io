export interface UserModel {
  user_id?: string;
  email: string;
  password: string;
  salt: string;
  phone: string;
  userType: "BUYER" | "SELLER";
}
