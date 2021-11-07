import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loans {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    amount: number

    @Column()
    interest: number

    @Column()
    amount_due: number

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