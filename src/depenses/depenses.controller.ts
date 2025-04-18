import { Controller, Get, Render, Post, Body , Res, Param, Delete , Put} from '@nestjs/common';
import { formDto } from 'src/DTO/form.dto';
import { Response } from 'express';
import { DepenseService } from './depenses.service';

@Controller('depenses')
export class DepensesController {

  constructor(readonly depenseService: DepenseService) {}

  @Get()
  @Render('FormulaireDEP')
  AfficherFormulaireDepenses() { 
    return { message: 'Hello world! mon gars' };
  }

  @Post()
   ajouterDepenses(@Body() body: formDto, @Res() res: Response){

    try{
      this.depenseService.ajouterDepense(body).then((depense) => {
        console.log('Depense ajoutée:', depense);
        return res.redirect('/');
      });
    } catch {
       alert('titre ou montant incorect')
    }
  }


  @Delete(':id')
    async supprimerDepense(@Param('id') id: number, @Res() res: Response) {
       await this.depenseService.supprimerDepense(id);
      return res.redirect('/');
    }

     @Put(':id')
       async modifierRevenu(@Param('id') id: number, @Body() body: formDto, @Res() res: Response) {
       await this.depenseService.modifierDepense(id, body);
       return res.status(200).json({ message: 'Revenu modifié' });
      }

}
