import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}
    create(createratingDto: Prisma.ratingCreateInput) {
      return this.prisma.rating.create({ data: createratingDto });
    }
  
    findAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ratingWhereUniqueInput;
      where?: Prisma.ratingWhereInput;
      orderBy?: Prisma.ratingOrderByWithRelationInput;
    }) {
      return this.prisma.rating.findMany({ ...params });
    }
  
    findOne(id: Prisma.ratingWhereUniqueInput) {
      return this.prisma.rating.findUnique({ where: id });
    }
  
    update(id: Prisma.ratingWhereUniqueInput, updateratingDto: Prisma.ratingUpdateInput) {
      return this.prisma.rating.update({ where: id, data: updateratingDto });
    }
  
    remove(id: Prisma.ratingWhereUniqueInput) {
      return this.prisma.rating.delete({ where: id });
    }
  }
  