import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PayModule } from './pay/pay.module';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entities/Customers.entity';
import { Loans } from './entities/Loans.entity';
import { Organisation_Contacts } from './entities/Organisation_contacts.entity';
import { Savings } from './entities/Savings.entity';
import { Transactions } from './entities/Transactions.entity';
import { Users } from './entities/Users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '161.35.112.164',
      port: 3306,
      username: 'tisunge',
      password: 'P@m0dzi!',
      database: 'tisunge_sacco',
      entities: [Customers, Loans, Organisation_Contacts, Savings, Transactions, Users],
      synchronize: false,
    }),
    UsersModule, 
    TransactionsModule, 
    PayModule, 
    CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
