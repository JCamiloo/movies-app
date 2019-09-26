import { PeliculaDetalle, Genre, Pelicula } from './../../app.interfaces';
import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  generoFavoritos: any[] = [];

  constructor(private dataLocal: DataLocalService, private movieService: MoviesService) {}

  async ionViewWillEnter(){
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
    this.peliculasPorGenero(this.generos, this.peliculas);
  }

  peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.generoFavoritos = [];
    generos.forEach(genero => {
      this.generoFavoritos.push({
        genero: genero.name,
        pelis: peliculas.filter(pelicula => {
          return pelicula.genres.find(genre => genre.id === genero.id);
        })
      });
    });
  }
}
