import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString, Length } from 'class-validator';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(1, 255)
  title: string;

  @Column()
  @IsString()
  author: string;

  @Column()
  @IsString()
  description: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  updatedAt: Date;
}
