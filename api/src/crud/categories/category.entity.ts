import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Operation } from "../operations/operations.entity";
import { User } from "../users/user.entity";
import { Goal } from "../goals/goal.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Operation, (operation) => operation.category, { eager: true })
  operations: Operation[];
}