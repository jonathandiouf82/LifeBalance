import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "../users/user.entity";
import { Goal } from "../goals/goal.entity";
import {TaskEvent} from "../events/event.entity";

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

  @OneToOne(() => TaskEvent, (event) => event.task)
  event: TaskEvent;

  @Column()
  due_date: Date;

  @Column()
  debut_date: Date;

  @Column()
  done: boolean;

  @Column()
  done_date: Date;

}