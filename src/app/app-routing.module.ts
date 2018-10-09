import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HistoryComponent } from './history/history.component';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',component: HomeComponent },
  {path: 'aboutus',component: AboutusComponent },
  {path: 'history', component: HistoryComponent},
  {path: 'medicalAppointment', component: MedicalAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
