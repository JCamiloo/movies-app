import { PeliculaDetalle, Genre } from './../../app.interfaces';
import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  constructor(private dataLocal: DataLocalService, private movieService: MoviesService) {}

  async ngOnInit(){
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
  }
}
