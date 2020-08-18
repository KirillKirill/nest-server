import {IsEmail, IsString, MinLength} from 'class-validator';

export class UpdateUserDto {
  id: number;

  @IsString()
  @MinLength(1)
  username: string;

  @IsEmail()
  email: string;

  password: string;
  role: string;
}
