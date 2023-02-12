import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayautComponent } from './layaut/layaut.component';
import { CalendarioRoutingModule } from './calendario.module.routing';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    DetallesComponent,
    HeaderComponent,
    FooterComponent,
    LayautComponent,

  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    FormsModule,
  ]
})
export class CalendarioModule { }
