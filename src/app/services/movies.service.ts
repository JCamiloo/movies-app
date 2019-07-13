import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../app.interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query:string){
    query = URL + query + `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get(query);
  }

  getFeatures(){
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesS
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`) 
  }
}
