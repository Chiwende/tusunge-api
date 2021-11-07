import { Body, Controller, Post } from '@nestjs/common';
import { Customers } from 'src/entities/Customers.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor (
        private readonly customerService: CustomersService
    ) {}
    @Post('Register')
    registerCustomer(@Body() payload: Customers){
        return this.customerService.registerCustomer(payload)
    }

}
