import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Operation } from "../operations/operations.entity";
import { Account } from "../accounts/account.entity";
import { Goal } from "../goals/goal.entity";
import { Task } from "../tasks/task.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  access_token: number;

  @OneToMany(() => Account, (account) => account.user, { eager: true })
  accounts: Account[];

  @OneToMany(() => Goal, (goal) => goal.user, { eager: true })
  goals: Goal[];

  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  address: string;

}