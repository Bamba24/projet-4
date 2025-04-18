import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length , IsNotEmpty} from 'class-validator';

@Entity()
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @Length(1, 15)
  @IsNotEmpty()
  titre: string;

  @Column('float')
  @Length(1, 10)
  @IsNotEmpty()
  montant: number;
  
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  
}