import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { ProfileEntity } from './user/entity/profile.entity';
import { ConfigModule } from '../../config/config.module';
import { DBModule } from '../../storage/database/db.module';
import { AppLoggerModule } from '../../logger/logger.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    // DBModule.forRoot({
    //   entities: [UserEntity, ProfileEntity],
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'auth-service',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
    TerminusModule,
    AppLoggerModule,
    ConfigModule,
  ],

  controllers: [],
  providers: [],
})
export class DomainModule {}
