import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    password: string

    @Column()
    organisation_id: number
}