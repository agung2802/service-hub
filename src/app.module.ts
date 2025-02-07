import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { JobModule } from './job/job.module';
import { RatingModule } from './rating/rating.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [LoginModule, PrismaModule, JobModule, RatingModule, OrderModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, LoginService],
})
export class AppModule {}
