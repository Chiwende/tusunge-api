import { Organisation } from "src/entities/Organisation.entity";
import { Organisation_Contacts } from "src/entities/Organisation_contacts.entity";
import { Users } from "src/entities/Users.entity";

export class CreateOrganisationDto {
    organisation : Organisation
    organisation_contact: Organisation_Contacts
    primary_user: Users
}