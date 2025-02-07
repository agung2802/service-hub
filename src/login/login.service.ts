/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma, user_info } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.user_infoCreateInput ) {
    console.log("test");
    try {
      return await this.prisma.user_info.create({ data });
    } catch (e) {
      return JSON.stringify(e);
      console.log(e);
    }
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(where: Prisma.user_infoWhereUniqueInput){
    return this.prisma.user_info.findUnique({ where });
  }

  update(id: Prisma.user_infoWhereUniqueInput, updateLoginDto: Prisma.user_infoUpdateInput): Promise<user_info | null> {
    return this.prisma.user_info.update({ where: id, data: updateLoginDto });
  }

  remove(id: Prisma.user_infoWhereUniqueInput): Promise<user_info | null> {
    return this.prisma.user_info.delete({ where: id });
    // return `This action removes a #${id} login`;
  }
}
