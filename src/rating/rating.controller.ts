import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Prisma } from '@prisma/client';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  create(@Body() createRatingDto: Prisma.ratingCreateInput) {
    return this.ratingService.create(createRatingDto);
  }

  @Get()
  findAll(@Param() params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ratingWhereUniqueInput;
    where?: Prisma.ratingWhereInput;
    orderBy?: Prisma.ratingOrderByWithRelationInput;
  }) {
    return this.ratingService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.ratingWhereUniqueInput) {
    return this.ratingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.ratingWhereUniqueInput, @Body() updateRatingDto: Prisma.ratingUpdateInput) {
    return this.ratingService.update(id, updateRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.ratingWhereUniqueInput) {
    return this.ratingService.remove(id);
  }
}
