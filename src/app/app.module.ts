import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NivelesComponent } from './niveles/niveles.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { NivelDetailComponent } from './niveldetail/niveldetail.component';
import { NivelComponent } from './nivel/nivel.component';
import { ParticipanteComponent } from './participante/participante.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NivelService } from './nivel.service';
import { ParticipanteService } from './participante.service';
import { DomaComponent } from './doma/doma.component';
import { SaltoComponent } from './salto/salto.component';
import { CrossComponent } from './cross/cross.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { DomadetailComponent } from './domadetail/domadetail.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { CrossdetailComponent } from './crossdetail/crossdetail.component';
import { SaltodetailComponent } from './saltodetail/saltodetail.component';


@NgModule({
  declarations: [
    AppComponent,
    NivelesComponent,
    ParticipantesComponent,
    NivelDetailComponent,
    NivelComponent,
    ParticipanteComponent,
    DashboardComponent,
    DomaComponent,
    SaltoComponent,
    CrossComponent,
    ClasificacionComponent,
    DomadetailComponent,
    CrossdetailComponent,
    SaltodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
    HighchartsChartComponent
  ],
  providers: [NivelService, ParticipanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
