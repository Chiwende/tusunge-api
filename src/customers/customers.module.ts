import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/entities/Customers.entity';

@Module({
  providers: [CustomersService],
  controllers: [CustomersController],
  imports: [
    TypeOrmModule.forFeature([Customers])
  ]
})
export class CustomersModule {}
