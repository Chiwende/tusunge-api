import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loans {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    amount: Double

    @Column()
    interest: Double

    @Column()
    amount_due: Double

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    due_date: Date

    @Column()
    msisdn: number

    @Column()
    organisation_id:number
}