import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HistoryComponent } from './history/history.component';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
import { BoardDirectorsComponent } from './aboutus/board-directors/board-directors.component';
import { StaffDirectoryComponent } from './aboutus/staff-directory/staff-directory.component';
import { MissionStatementComponent } from './aboutus/mission-statement/mission-statement.component';
import { CollaborativePartnersComponent } from './aboutus/collaborative-partners/collaborative-partners.component';
import { LocationsComponent } from './contact/locations/locations.component';
import { CommunityWellnessComponent } from './services-programs/community-wellness/community-wellness.component';
import { FundersComponent } from './aboutus/funders/funders.component';
import { DonorsComponent } from './aboutus/donors/donors.component';
import { AccreditationComponent } from './aboutus/accreditation/accreditation.component';
import { FinancialsComponent } from './aboutus/financials/financials.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',component: HomeComponent },
  {path: 'aboutus',component: AboutusComponent },
  {path: 'history', component: HistoryComponent},
  {path: 'medicalAppointment', component: MedicalAppointmentComponent},
  {path: 'board-directors', component: BoardDirectorsComponent},
  {path: 'staff-directory', component: StaffDirectoryComponent},
  {path: 'mission-statement', component: MissionStatementComponent},
  {path: 'collaborative-partners', component: CollaborativePartnersComponent},
  {path: 'locations', component: LocationsComponent}
  {path: 'community-wellness', component: CommunityWellnessComponent},
  {path: 'funders', component: FundersComponent},
  {path: 'donors', component: DonorsComponent},
  {path: 'accreditation', component: AccreditationComponent},
  {path: 'financials', component: FinancialsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
