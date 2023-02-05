import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity()
export class User {
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

  @OneToMany(() => Contact, (contact) => contact.user, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  contacts: Contact[];

  constructor() {
    if (!this.createdAt) {
      this.createdAt = new Date().toLocaleDateString();
    }
  }
}
