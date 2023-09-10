import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUser } from './dto/createUser.dto';
import { DatabaseService } from './database/database.service';
import { UpdateUser } from './dto/updateUser.dto';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) { }
  async getUsers(): Promise<User[]> {
    return this.databaseService.user.findMany()
  }

  async createUser(dto: CreateUser) {
    return this.databaseService.user.create({
      data: dto as User
    })
  }

  async updateUser({ id, dto }: { id: number, dto: UpdateUser }) {
    return this.databaseService.user.update({
      data: dto as User,
      where: { id }
    })
  }

  async deleteUser(id: number) {
    console.log(id);
    
    return this.databaseService.user.delete({
      where: { id }
    })
  }
}
