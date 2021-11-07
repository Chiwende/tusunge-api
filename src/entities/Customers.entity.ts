import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    gender: string

    @Column()
    DOB: Date

    @Column()
    email: string

    @Column()
    msisdn: number

}