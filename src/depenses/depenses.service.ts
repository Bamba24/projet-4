import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Depense } from './depense.entity';
import { formDto } from 'src/DTO/form.dto';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,
  ) {}

  async ajouterDepense(body: formDto): Promise<Depense> {
    const depense = this.depenseRepository.create(body);
    return this.depenseRepository.save(depense);
  }

   async findAll(): Promise<Depense[]> {
      return this.depenseRepository.find({
        order: { created_at: 'DESC' } // pour trier par date, optionnel
      });
    }

    async supprimerDepense(id: number): Promise<void> {
      await this.depenseRepository.delete(id);
    }

     async modifierDepense(id: number, data: Partial<Depense>) { // Updated type from Partial<Revenu> to Partial<Depense>
        await this.depenseRepository.update(id, data);
      }


      async calculerTotalDepenses(): Promise<number> {
        const result = await this.depenseRepository
          .createQueryBuilder('depense')
          .select('SUM(depense.montant)', 'total')
          .getRawOne();
        return Number(result.total) || 0;
      }
      
    
}

