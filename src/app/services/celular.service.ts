import { Injectable } from '@angular/core';
import { Celular } from '../models/Celular.model';
@Injectable({
  providedIn: 'root'
})
export class CelularService {
  celulares:Celular[] =[
       {
      id : 0,
      modelo:'s23 ultra',
      marca:'samsung',
      precio:1500,
      cantidad:1,
      completado:true,
     },
     {
      id : 1,
      modelo:'14 pro max',
      marca:'iphone',
      precio:2000,
      completado:true,
      cantidad:1,
     }
   
  ];
  constructor() { }
  getCelulares(){

     return this.celulares;
  }
  agregarCelular(celular:Celular){
    //agrega nuevo celular al principio
    this.celulares.unshift(celular);
  }
}
