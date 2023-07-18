import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Operation } from "../operations/operations.entity";
import { Account } from "../accounts/account.entity";
import { User } from "../users/user.entity";
import { Goal } from "../goals/goal.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @ManyToOne(() => Goal, (goal) => goal.tasks)
  goal: Goal;

  @Column()
  due_date: Date;

  @Column()
  debut_date: Date;

  @Column()
  done: boolean;

  @Column()
  done_date: Date;

}