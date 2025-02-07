/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LoginService } from './login.service';
// import { CreateLoginDto } from './dto/create-login.dto';
// import { UpdateLoginDto } from './dto/update-login.dto';
import { Prisma } from '@prisma/client';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: Prisma.user_infoCreateInput) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne({id: Number(id)});
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.user_infoWhereUniqueInput, @Body() updateLoginDto: Prisma.user_infoUpdateInput) {
    return this.loginService.update(id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.user_infoWhereUniqueInput) {
    return this.loginService.remove(id);
  }
}
