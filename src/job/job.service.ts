import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}
  create(createJobDto: Prisma.jobCreateInput) {
    return this.prisma.job.create({
      data: createJobDto,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.jobWhereUniqueInput;
    where?: Prisma.jobWhereInput;
    orderBy?: Prisma.jobOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.job.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(idJob: Prisma.jobWhereUniqueInput) {
    return this.prisma.job.findUnique({ where: { id: Number(idJob) } });
  }

  update(id: Prisma.jobWhereUniqueInput, updateJobDto: Prisma.jobUpdateInput) {
    return this.prisma.job.update({ where: id, data: updateJobDto });
  }

  remove(id: Prisma.jobWhereUniqueInput) {
    return this.prisma.job.delete({ where: id });
  }
}
