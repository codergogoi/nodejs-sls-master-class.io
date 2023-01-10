import { Length } from "class-validator";
import { LoginInput } from "./LoginInput";

export class SignupInput extends LoginInput {
  @Length(10, 13)
  phone: string;
}
