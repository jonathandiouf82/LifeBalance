import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "../users/user.entity";
import { Category } from "../categories/category.entity";
import { Account } from "../accounts/account.entity";

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.operations)
  account: Account;

  @Column()
  application_date: Date;

  @Column()
  date: Date;

  @Column()
  amount: number;

  @ManyToOne(() => Category, (category) => category.operations)
  category: string;
  
}