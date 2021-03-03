import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'nest-playground',
  password: 'nest-playground',
  database: 'nest-playground',
  logging: false,
  entities: [__dirname + '/apps/app/src/entity/**/*.ts'],
  migrations: [__dirname + '/apps/app/src/migration/**/*{.ts,.js}'],
  cli: {
    entitiesDir: './apps/app/src/entity',
    migrationsDir: './apps/app/src/migration',
  },
};

export default ormConfig;
