import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrganisationDto } from 'src/dtos/CreateOrganisationEntity';
import { Organisation } from 'src/entities/Organisation.entity';
import { OrganisationsService } from './organisations.service';

@Controller('organisations')
export class OrganisationsController {
    constructor (
        private readonly organisationService: OrganisationsService
    ) {}

    @Post()
    createOrganisation(@Body() payload: CreateOrganisationDto){
        return this.organisationService.createOrganisation(payload)
    }

    @Get()
    getAllOrganisations(){
        return this.organisationService.getAllOrganisations()
    }
}
