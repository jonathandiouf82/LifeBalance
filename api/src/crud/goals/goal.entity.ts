import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Operation } from "../operations/operations.entity";
import { Task } from "../tasks/task.entity";

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.goals)
  user: User;

  @OneToMany(() => Task, (task) => task.goal, { eager: true })
  tasks: Task[];

  @Column()
  end_date: Date;

  @Column()
  debut_date: Date;

  @Column()
  achieved: boolean;

  @Column()
  achieved_date: Date;

}