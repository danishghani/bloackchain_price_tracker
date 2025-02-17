import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  chain!: string;

  @Column()
  price!: number;

  @Column()
  timestamp!: Date;
}
