import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ZodSerializationException, ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [UsersModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },

    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializationException,
    },
  ],
})
export class AppModule {}
