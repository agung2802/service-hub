/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
      create(createuserDto: Prisma.user_infoCreateInput) {
        return this.prisma.user_info.create({ data: createuserDto });
      }
    
      findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.user_infoWhereUniqueInput;
        where?: Prisma.user_infoWhereInput;
        orderBy?: Prisma.user_infoOrderByWithRelationInput;
      }) {
        return this.prisma.user_info.findMany({ ...params });
      }
    
      findOne(idUser: any) {
        console.log(idUser);
        return this.prisma.user_info.findUnique({ where: 
          {
            id: Number(idUser),
          }
         });
      }
    
      update(id: Prisma.user_infoWhereUniqueInput, updateuserDto: Prisma.user_infoUpdateInput) {
        return this.prisma.user_info.update({ where: id, data: updateuserDto });
      }
    
      remove(id: Prisma.user_infoWhereUniqueInput) {
        return this.prisma.user_info.delete({ where: id });
      }

      async login(loginDto: Prisma.user_infoWhereInput) {
        console.log(loginDto)
        const user = await this.prisma.user_info.findFirst({ 
          where: {
            email: loginDto.email,
          }
        });
        if (!user) {
          return {
            status: 404,
            error: 'User not found',
          };
        } else if (user.password !== loginDto.password) {
          return {
            status: 401,
            error: 'Invalid password',
          };
        }
        return {
          status: 200,
          message: 'Login successful',
          data: user,
        };
      }
    }
    
