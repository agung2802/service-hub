/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cart } from './entities/cart.entity';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  create(createOrderDto: Prisma.orderCreateInput) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.orderWhereUniqueInput;
    where?: Prisma.orderWhereInput;
    orderBy?: Prisma.orderOrderByWithRelationInput;
  }) {
    return this.prisma.order.findMany({ ...params });
  }

  findOne(id: Prisma.orderWhereUniqueInput) {
    return this.prisma.order.findUnique({ where: id });
  }

  update(
    idOrder: Prisma.orderWhereUniqueInput,
    updateOrderDto: Prisma.orderUpdateInput,
  ) {
    return this.prisma.order.update({ where: {id: Number(idOrder)}, data: updateOrderDto });
  }

  remove(idOrder: Prisma.orderWhereUniqueInput) {
    return this.prisma.order.delete({ where: {id: Number(idOrder)} });
  }

  async cart(cartDto: Cart) {
    console.log(cartDto)
    const cartData = await this.prisma.order.findMany({ 
      where: {
        user_id: {
          equals: cartDto.userId
        },
        AND: {
          status: {
            equals: cartDto.status
          }
        }
        
      },
    });
    if (!cartData) {
      return {
        status: 404,
        error: 'cart empty found',
      };
    }
    return {
      status: 200,
      data: cartData,
    };
  }
}
