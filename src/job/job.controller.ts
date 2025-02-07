import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Prisma } from '@prisma/client';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() createJobDto: Prisma.jobCreateInput) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll(@Param() params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.jobWhereUniqueInput;
    where?: Prisma.jobWhereInput;
    orderBy?: Prisma.jobOrderByWithRelationInput;
  }) {
    return this.jobService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.jobWhereUniqueInput) {
    return this.jobService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.jobWhereUniqueInput, @Body() updateJobDto: Prisma.jobUpdateInput) {
    return this.jobService.update(id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.jobWhereUniqueInput) {
    return this.jobService.remove(id);
  }
}
