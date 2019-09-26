import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroImagenPipe } from './filtro-imagen.pipe';

@NgModule({
  declarations: [
    ImagenPipe, 
    ParesPipe, 
    FiltroImagenPipe,
  ],
  exports: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe
  ]

})
export class PipesModule { }
