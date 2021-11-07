import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Savings{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    msisdn: number

    @Column()
    amount: Double

    @Column()
    tenor: number

    @Column()
    amount_due: Double

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    maturity_date: Date
}