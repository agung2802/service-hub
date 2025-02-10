import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Cart } from './entities/cart.entity';
import { OrderService } from './order.service';

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

  @Post('cart')
  getCart(@Body() cartDto: Cart) {
    return this.orderService.cart(cartDto);
  }
  
}
