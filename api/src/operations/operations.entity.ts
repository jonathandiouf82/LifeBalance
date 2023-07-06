import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.operations)
  user: User;

  @Column()
  label: string;

  @Column()
  dateOp: Date;

  @Column()
  amount: number;

  @Column()
  category: string;
  
}