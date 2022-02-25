import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organisation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    address: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    contact: string
}