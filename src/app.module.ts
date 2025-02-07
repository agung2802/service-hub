import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LoginModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, LoginService],
})
export class AppModule {}
