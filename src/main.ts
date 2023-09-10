import { NestFactory } from '@nestjs/core';
import { configDotenv } from 'dotenv';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

configDotenv()

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), {fallbackOnErrors: true}); ;
  
  await app.listen(PORT);
}

start();
