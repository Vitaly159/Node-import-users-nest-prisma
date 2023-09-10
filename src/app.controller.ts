import { Body, Controller, Get, Param, Post, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import { CreateUser } from './dto/createUser.dto';
import { UpdateUser } from './dto/updateUser.dto';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) { }

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async createUser(@Body() dto: CreateUser) {
    await this.appService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  async updateUser(@Param('id') id: string, @Body()  dto: UpdateUser) {
    await this.appService.updateUser({id: Number(id), dto: dto});
  }

  @Delete(":id")
  async deleteUser(@Param('id') id: string) {
    await this.appService.deleteUser(Number(id));
  }

}
