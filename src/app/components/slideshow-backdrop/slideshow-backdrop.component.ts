import { Pelicula } from './../../app.interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  slidesOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };
  
  constructor() { }

  ngOnInit() {}

}
