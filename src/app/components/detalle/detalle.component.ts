import { PeliculaDetalle } from './../../app.interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};

  constructor(private movie:MoviesService) { }

  ngOnInit() {
    this.movie.getPeliculaDetalle(this.id).subscribe(resp => this.pelicula = resp);
    this.movie.getActoresPelicula(this.id).subscribe(resp => console.log(resp));
  }

}
