import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organisation_Contacts {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: number

    @Column()
    email: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    role: string

    @Column()
    organisation_id: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
}