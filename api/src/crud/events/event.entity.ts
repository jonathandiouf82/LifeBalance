import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "../users/user.entity";
import {Task} from "../tasks/task.entity";

@Entity()
export class TaskEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  passed: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @OneToOne(() => Task, (task) => task.event)
  task: Task;
}