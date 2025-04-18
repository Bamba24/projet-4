import {IsString, IsNumber, IsNotEmpty, Min} from 'class-validator';
import { Type } from 'class-transformer';

export class formDto {

  @IsString()
  @IsNotEmpty()
  readonly titre: string;
  
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(3, { message: 'Le montant doit être supérieur à 0' })
  readonly montant: number;
};