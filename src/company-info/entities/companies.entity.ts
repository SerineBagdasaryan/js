import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Companies {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  inn: string;

}
