import { Controller, Get, Render } from '@nestjs/common';
import { RevenuService } from './revenus/revenus.service';
import { DepenseService } from './depenses/depenses.service';


@Controller()
export class AppController {
  constructor(
    private readonly revenuService: RevenuService,
    private readonly depenseService: DepenseService,
  ) {}

  @Get()
  @Render('Acceuil')
  async afficherAccueil() {
    const revenus = await this.revenuService.findAll();
    const depenses = await this.depenseService.findAll();
    
    const totalRevenus = await this.revenuService.calculerTotalRevenus();
    const totalDepenses = await this.depenseService.calculerTotalDepenses();
    const solde = totalRevenus - totalDepenses;

    return { revenus, depenses, totalRevenus, totalDepenses, solde };
  }

  
}
