import { Component } from '@angular/core';
import { Celular } from 'src/app/models/Celular.model';
import { CelularService } from 'src/app/services/celular.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregarcelular',
  templateUrl: './agregarcelular.component.html',
  styleUrls: ['./agregarcelular.component.css']
})
export class AgregarcelularComponent {
  id:number = 0;
  marca:String = '';
  modelo:string = '';
  precio:number = 0;
  cantidad:number = 0;

  constructor(private celularService:CelularService, private router:Router){
  } 
  onSubmit(){
    let celular:Celular;
    celular = 
     {
      id : this.id,
      modelo:this.modelo,
      marca:this.marca,
      precio:this.precio, 
      completado:false,
      cantidad:this.cantidad
    }
    this.celularService.agregarCelular(celular);
    this.router.navigate(['/']);
  }
}
