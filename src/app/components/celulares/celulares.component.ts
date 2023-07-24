import { Component } from '@angular/core';
import { Celular } from 'src/app/models/Celular.model';
import { CelularService } from 'src/app/services/celular.service';
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent {
  constructor(private celularService:CelularService){
  } 
   celulares:Celular[] =this.celularService.getCelulares();
      
   total:number = 0;
   eliminarCelular(celular:Celular){
    //está filtrando los elementos de la lista "celulares" 
    //y eliminando aquellos cuyo "id" no coincide con el "id" del celular proporcionado. 
    //Básicamente,remueve el celular de la lista.
    this.celulares = this.celulares.filter(x => x.id != celular.id)
    this.getTotal();
   }
   palancaCelular(celular:Celular){
    this.getTotal();
   }
   
   getTotal(){
    this.total = this.celulares
        .filter(celular => !celular.completado) //filtrar elementos ya completados
        .map(celular =>celular.cantidad * celular.precio)
        .reduce((acumulador,celular)=> acumulador += celular,0)
        console.log(this.total)
   }
    
}
