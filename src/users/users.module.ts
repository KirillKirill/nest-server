import { Module, OnModuleInit } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements OnModuleInit {
  constructor(private userService: UsersService) {}

  isEncrypted(pswd: string) {
    return pswd.includes('$10$') && pswd.includes('$2');
  }

  async onModuleInit(): Promise<any> {
    const admin = await this.userService.getUserById(1);

    if (!this.isEncrypted(admin.password)) {
      const hashedPassword = await bcrypt.hash(admin.password, 10);
      await this.userService.updateUser(1, {
        ...admin,
        password: hashedPassword,
      });
    } else return null;
  }
}
