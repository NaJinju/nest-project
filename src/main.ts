import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // test code
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
