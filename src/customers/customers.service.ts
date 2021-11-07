import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from 'src/entities/Customers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {

    constructor (
        @InjectRepository(Customers)
        private customerRepository:  Repository<Customers>
    ) {}

    registerCustomer(payload : Customers){
        return this.customerRepository.save(payload)
    }
}
