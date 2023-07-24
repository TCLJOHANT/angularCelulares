import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Celular } from 'src/app/models/Celular.model';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent {
  @Input() celular:Celular;
  //evento de salida
  // esta línea comunica el componente celular con Celulares, permitiendo que 
  //emita un evento personalizado que puede ser capturado y manejado por su componente padre.
  @Output() eliminarCelular:EventEmitter <Celular> = new EventEmitter();
  @Output() palancaCelular:EventEmitter <Celular> = new EventEmitter();
  constructor(){
    this.celular = 
     {
      id : 0,
      modelo:'',
      marca:'',
      precio:0, 
      completado:false,
      cantidad:0,
      // especificacionesRelevantes:[
      //    {
      //       cpu:'',
      //       ram:0,
      //       almacenamiento:0,
      //       bateria:0,
      //       tegnologiaDysplay:'',
      //       resolucion:'',
      //   }
      // ]
     }
  } 
  eliminar(celular:Celular){
    //emite este objeto al elemento padre en este caso a Celulares
    this.eliminarCelular.emit(celular);
  }
  onPalanca(celular:Celular){
   celular.completado = !celular.completado
   this.palancaCelular.emit(celular)
  }
}
