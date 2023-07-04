import { createDocument } from './docs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createDocument(app);
  await app.listen(3001 || process.env.PORT);
}
bootstrap();
