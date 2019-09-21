import { PeliculaDetalle, Cast } from './../../app.interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private movie: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.movie.getPeliculaDetalle(this.id).subscribe(resp => this.pelicula = resp);
    this.movie.getActoresPelicula(this.id).subscribe(resp => this.actores = resp.cast);
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){

  }

}
