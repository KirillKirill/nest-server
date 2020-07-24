import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BadRequestExceptionFilter } from './exceptionFilter/badRequestExceptionFilter';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsersModule,
    AuthenticationModule,
    BadRequestExceptionFilter,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
