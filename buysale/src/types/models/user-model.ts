export interface UserModel {
  token: string;
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: string;
}

export interface RegisterModel {
  email: string;
  phone: string;
  password: string;
}
