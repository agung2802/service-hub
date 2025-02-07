import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Prisma } from '@prisma/client';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: Prisma.orderCreateInput) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll(
    @Param() params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.orderWhereUniqueInput;
      where?: Prisma.orderWhereInput;
      orderBy?: Prisma.orderOrderByWithRelationInput;
    }
  ) {
    return this.orderService.findAll( params );
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.orderWhereUniqueInput) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.orderWhereUniqueInput, @Body() updateOrderDto: Prisma.orderUpdateInput) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.orderWhereUniqueInput) {
    return this.orderService.remove(id);
  }
}
