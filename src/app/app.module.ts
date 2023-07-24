import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CelularesComponent } from './components/celulares/celulares.component';
import { CelularComponent } from './components/celular/celular.component';
import { TotalComponent } from './components/total/total.component';
import { AgregarcelularComponent } from './components/agregarcelular/agregarcelular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CelularesComponent,
    CelularComponent,
    TotalComponent,
    AgregarcelularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
