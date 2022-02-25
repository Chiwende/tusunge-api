import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganisationDto } from 'src/dtos/CreateOrganisationEntity';
import { EncryptService } from 'src/encrypt/encrypt.service';
import { Organisation } from 'src/entities/Organisation.entity';
import { Organisation_Contacts } from 'src/entities/Organisation_contacts.entity';
import { Users } from 'src/entities/Users.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class OrganisationsService {
    constructor (
        @InjectRepository(Organisation)
        private organisationRepository: Repository<Organisation>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        @InjectRepository(Organisation_Contacts)
        private organisationContacts: Repository<Organisation_Contacts>,

        private encrypt: EncryptService,
        private connection: Connection
        
    ){

    }
    // Create Organisation should be steps to also add system primary admin
    async createOrganisation(payload: CreateOrganisationDto){
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {            
            const organsation = await this.organisationRepository.save(payload.organisation)
            payload.organisation_contact.organisation_id = organsation.id
            payload.primary_user.organisation_id = organsation.id
            await this.organisationContacts.save(payload.organisation_contact)
            await this.userRepository.save(payload.primary_user)
            await queryRunner.commitTransaction();

        } catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
            const response = {
                message : err.sqlMessage
            }
            return response
        } finally {
            await queryRunner.release
        }

        // organisation contacts
        // organisation primary user

    }

    getAllOrganisations(){
        return this.organisationRepository.find()
    }
}
