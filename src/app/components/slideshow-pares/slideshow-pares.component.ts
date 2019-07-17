import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/app.interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row'
  };
  
  constructor() { }

  ngOnInit() {}

}