import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Operation } from "../operations/operations.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNum: number;

  @OneToMany(() => Operation, (operation) => operation.user, { eager: true })
  operations: Operation[];

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

}