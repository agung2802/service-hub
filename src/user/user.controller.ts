/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
    create(@Body() createuserDto: Prisma.user_infoCreateInput) {
      return this.userService.create(createuserDto);
    }
  
    @Get()
    findAll(@Param() params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.user_infoWhereUniqueInput;
      where?: Prisma.user_infoWhereInput;
      orderBy?: Prisma.user_infoOrderByWithRelationInput;
    }) {
      return this.userService.findAll(params);
    }
  
    @Get(':id')
    findOne(@Param('id') id: Prisma.user_infoWhereUniqueInput) {
      return this.userService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: Prisma.user_infoWhereUniqueInput, @Body() updateuserDto: Prisma.user_infoUpdateInput) {
      return this.userService.update(id, updateuserDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: Prisma.user_infoWhereUniqueInput) {
      return this.userService.remove(id);
    }

    @Post('/login')
    login(@Body() loginDto: User) {
      return this.userService.login(loginDto);
    }
  }
  