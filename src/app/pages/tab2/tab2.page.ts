import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Pelicula } from 'src/app/app.interfaces';
import { Subject, Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy{

  textoBuscar = '';
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];
  estadoCarga = new Subject<boolean>();
  cargaSub: Subscription;
  cargando = false;

  constructor(private movieSrv: MoviesService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.estadoCarga.next(false);
    this.cargaSub = this.estadoCarga.subscribe(carga => this.cargando = carga);
  }

  buscar(event){
    const valor: string = event.detail.value;
    if(valor.trim() === ''){
      this.peliculas = [];
    }
    else {
      this.estadoCarga.next(true);
      this.movieSrv.buscarPeliculas(valor).subscribe(resp => { 
        this.estadoCarga.next(false);
        this.peliculas = resp['results']
      });
    }
  }

  async detalle(id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id }
    });
    modal.present();
  }

  ngOnDestroy(){
    this.estadoCarga.unsubscribe();
  }
}
