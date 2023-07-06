import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Life Balance')
    .setDescription('Life Balance API: Gives the operations for the app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'LifeBalance',
  });

  const port = process.env.PORT;
  app.enableCors();
  await app.listen(port);
  console.info(`Server running on port ${port}`);
}
bootstrap();

