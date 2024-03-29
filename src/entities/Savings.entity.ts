import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Savings{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    msisdn: number

    @Column()
    amount: number

    @Column()
    tenor: number

    @Column()
    amount_due: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    maturity_date: Date
}