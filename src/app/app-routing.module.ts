import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { CrossComponent } from './cross/cross.component';
import { CrossdetailComponent } from './crossdetail/crossdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomaComponent } from './doma/doma.component';
import { DomadetailComponent } from './domadetail/domadetail.component';
import { NivelComponent } from './nivel/nivel.component';
import { NivelDetailComponent } from './niveldetail/niveldetail.component';
import { NivelesComponent } from './niveles/niveles.component';
import { ParticipanteComponent } from './participante/participante.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { SaltoComponent } from './salto/salto.component';
import { SaltodetailComponent } from './saltodetail/saltodetail.component';

const routes: Routes = [
  { path: 'niveles', component: NivelesComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: 'niveles/:_tipoNivel', component: NivelDetailComponent },
  { path: 'newNivel', component: NivelComponent },
  { path: 'newParticipante', component: ParticipanteComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'doma', component: DomaComponent},
  { path: 'cross', component: CrossComponent},
  { path: 'salto', component: SaltoComponent},
  { path: 'domadetail', component: DomadetailComponent},
  { path: 'saltodetail', component: SaltodetailComponent},
  { path: 'crossdetail', component: CrossdetailComponent},
  { path: 'clasificacion', component: ClasificacionComponent},

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
