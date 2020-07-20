import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {Exclude} from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column()
  public role: string;
}
