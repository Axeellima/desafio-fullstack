import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column("date")
  createdAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
  constructor() {
    if (!this.createdAt) {
      this.createdAt = new Date().toLocaleDateString();
    }
  }
}
