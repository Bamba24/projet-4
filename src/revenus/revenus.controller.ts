import { Controller , Get, Render, Post, Body, Res, Delete, Param, Put} from '@nestjs/common';
import { formDto } from 'src/DTO/form.dto';
import { Response } from 'express';
import { RevenuService } from './revenus.service';

@Controller('revenus')
export class RevenusController {

  constructor ( private readonly  revenuService: RevenuService) {}

  @Get()
  @Render('FormulaireREV')
  async afficherListe() {
    const revenus = await this.revenuService.findAll();
    return { revenus }; // transmis à la vue
  }
  

   @Post()
   validerRevenus(@Body() body: formDto, @Res() res: Response){

    try {
      this.revenuService.ajouterRevenu(body).then((revenu) => {
         console.log('Revenu ajouté:', revenu);
         return res.redirect('/');
       } );   
    } catch (error) {
      alert("titre ou montant incorrect")
    }
    }

    @Delete(':id')
      async supprimerRevenu(@Param('id') id: number, @Res() res: Response) {
        await this.revenuService.supprimerRevenu(id);
        return res.redirect('/');
      }

      @Put(':id')
        async modifierRevenu(@Param('id') id: number, @Body() body: formDto, @Res() res: Response) {
          await this.revenuService.modifierRevenu(id, body);
          return res.status(200).json({ message: 'Revenu modifié' });
        }

}
