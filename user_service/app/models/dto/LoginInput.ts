import { IsEmail, Length } from "class-validator";

export class LoginInput {
  @IsEmail()
  email: string;
  @Length(6, 32)
  password: string;
}
