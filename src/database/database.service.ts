import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@Injectable()
export class DatabaseService extends PrismaClient {
  async onOnModuleInit() {
    await this.$connect()
  }

  async onOnModuleDestroy() {
    await this.$disconnect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    })
  }
}

@ValidatorConstraint({ name: "IsUniqueUser", async: true })
@Injectable()
export class UniqueFieldValidator implements ValidatorConstraintInterface {
  constructor(private readonly databaseService: DatabaseService) { }

  async validate(value: string) {

    const data = await this.databaseService.user.findFirst({
      where: { email: value },
    })

    if (data) { 
      return false 
    } else {
      return true
    }
  }

  defaultMessage(args: ValidationArguments) {
    return `Пользователь с таким email уже существует`;
  }
}
