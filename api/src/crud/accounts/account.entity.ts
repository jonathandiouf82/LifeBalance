import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Operation } from "../operations/operations.entity";
import { User } from "../users/user.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bank_name: string;

  @OneToMany(() => Operation, (operation) => operation.account, { eager: true })
  operations: Operation[];

  @Column()
  balance: number;

  @Column()
  iban: string;

  @Column()
  bic: string;

  @Column()
  account_number: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

}