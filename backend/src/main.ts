import { NestFactory } from '@nestjs/core'; import helmet from 'helmet'; import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module'; import { ValidationPipe } from '@nestjs/common';
async function bootstrap(){
  const app=await NestFactory.create(AppModule);
  app.use(helmet({contentSecurityPolicy:false,crossOriginEmbedderPolicy:true}));
  app.enableCors({origin:['http://localhost:3000','https://rustytraders.com'],credentials:true});
  app.use(rateLimit({windowMs:60*1000,max:100}));
  app.useGlobalPipes(new ValidationPipe({whitelist:true,transform:true}));
  await app.listen(4000);
  console.log('RustyTraders API on http://localhost:4000');
} bootstrap();

