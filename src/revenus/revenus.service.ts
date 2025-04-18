import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revenu } from './revenus.entity';
import { formDto } from 'src/DTO/form.dto';

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,
  ) {}

  async ajouterRevenu(body: formDto): Promise<Revenu> {
    const revenu = this.revenuRepository.create(body);
    return this.revenuRepository.save(revenu);
  }


  async findAll(): Promise<Revenu[]> {
    return this.revenuRepository.find({
      order: { created_at: 'DESC' } // pour trier par date, optionnel
    });
  }

  async supprimerRevenu(id: number): Promise<void> {
    await this.revenuRepository.delete(id);
  }
  

  async modifierRevenu(id: number, data: Partial<Revenu>) {
    await this.revenuRepository.update(id, data);
  }

  async calculerTotalRevenus(): Promise<number> {
    const result = await this.revenuRepository
      .createQueryBuilder('revenu')
      .select('SUM(revenu.montant)', 'total')
      .getRawOne();
    return Number(result.total) || 0;
  }
  
  
}

