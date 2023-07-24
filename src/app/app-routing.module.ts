import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesComponent } from './components/celulares/celulares.component';
import { AgregarcelularComponent } from './components/agregarcelular/agregarcelular.component';

const routes: Routes = [
  {
    path:'',
    component:CelularesComponent
  },
  {
    path:'agregar',
    component:AgregarcelularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
