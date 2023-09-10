import { IsString, IsEmail, IsNotEmpty } from "class-validator"

export class UpdateUser {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: String;

  @IsString()
  @IsNotEmpty()
  name: String;

  @IsString()
  @IsNotEmpty()
  surname: String;

  @IsString()
  @IsNotEmpty()
  patronymic: String;

  @IsString()
  @IsNotEmpty()
  gosb: String;
}