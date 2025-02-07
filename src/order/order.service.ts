import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

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

  update(id: Prisma.orderWhereUniqueInput, updateOrderDto: Prisma.orderUpdateInput) {
    return this.prisma.order.update({ where: id, data: updateOrderDto });
  }

  remove(id: Prisma.orderWhereUniqueInput) {
    return this.prisma.order.delete({ where: id });
  }
}
