import { IsString, IsEmail, Validate, IsNotEmpty } from "class-validator"
import { UniqueFieldValidator } from "src/database/database.service";

export class CreateUser {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Validate(UniqueFieldValidator, ["", "email"])
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