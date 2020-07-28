import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RegisterDto } from '../authentication/dto/register.dto';
import { validate } from 'class-validator';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const user = new RegisterDto();
    user.username = request.body.username;
    user.email = request.body.email;
    user.password = request.body.password;

    validate(user).then(errors => {
      response.status(status).json({
        statusCode: status,
        validationErrors: errors,
      });
    });
  }
}
