import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../crud/users/user.entity";
import { Operation } from "../crud/operations/operations.entity";
import { DataSource } from "typeorm";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST_URL'),
        port: 3306,
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PW'),
        database: configService.get<string>('DB'),
        entities: [
          User,
          Operation
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ]

})

export class DbModule {
  constructor(private dataSource: DataSource){}
}
