import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";

@Entity()
export class Event {
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
}