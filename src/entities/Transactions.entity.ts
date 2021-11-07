import { ConflictException } from "@nestjs/common";
import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    msisdn: number

    @Column()
    amount: number

    @Column()
    type: string

    @Column()
    sub_category: string

    @Column()
    date_created: Date

    @Column()
    date_updated: Date
}