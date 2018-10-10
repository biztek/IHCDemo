import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MissionStatementComponent } from './aboutus/mission-statement/mission-statement.component';
import { HistoryComponent } from './history/history.component';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',component: HomeComponent },
  {path: 'mission-statement',component: MissionStatementComponent },
  {path: 'history', component: HistoryComponent},
  {path: 'medicalAppointment', component: MedicalAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
