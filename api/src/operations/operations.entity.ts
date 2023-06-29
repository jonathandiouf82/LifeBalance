import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  dateOp: Date;

  @Column()
  amount: number;

  @Column()
  category: string;
  
}