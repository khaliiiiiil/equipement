import { NestFactory } from '@nestjs/core';
import { EquipementModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(EquipementModule);
  await app.listen(3000);
}
bootstrap();
