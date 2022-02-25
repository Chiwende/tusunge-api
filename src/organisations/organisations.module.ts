import { Module } from '@nestjs/common';
import { OrganisationsService } from './organisations.service';
import { OrganisationsController } from './organisations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organisation } from 'src/entities/Organisation.entity';
import { Organisation_Contacts } from 'src/entities/Organisation_contacts.entity';
import { Users } from 'src/entities/Users.entity';
import { EncryptService } from 'src/encrypt/encrypt.service';

@Module({
  providers: [
    OrganisationsService,
    EncryptService
  ],
  controllers: [OrganisationsController],
  imports: [TypeOrmModule.forFeature([Organisation, Organisation_Contacts, Users])]
})
export class OrganisationsModule {}
