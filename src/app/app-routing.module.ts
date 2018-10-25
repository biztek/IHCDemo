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
import { StaffDirectoryContactComponent } from './contact/staff-directory/staff-directory.component';
import { CommunityWellnessComponent } from './services-programs/community-wellness/community-wellness.component';
import { FundersComponent } from './aboutus/funders/funders.component';
import { DonorsComponent } from './aboutus/donors/donors.component';
import { AccreditationComponent } from './aboutus/accreditation/accreditation.component';
import { FinancialsComponent } from './aboutus/financials/financials.component';
import { CounselingServicesComponent } from './services-programs/counseling-services/counseling-services.component';
import { DentalServicesComponent } from './services-programs/dental-services/dental-services.component';
import { AmericanIndianResourcesComponent } from './resources/american-indian-resources/american-indian-resources.component';
import { IhcArchivesComponent } from './resources/ihc-archives/ihc-archives.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { EventsFundraisersComponent } from './get-involved/events-fundraisers/events-fundraisers.component';
import { NewsComponent } from './get-involved/news/news.component';
import { VolunteerOpportunitiesComponent } from './get-involved/volunteer-opportunities/volunteer-opportunities.component';
import { FAQComponent } from './resources/faq/faq.component';
import { MedicalServicesComponent } from './services-programs/medical-services/medical-services.component';
import { NutritionServicesComponent } from './services-programs/nutrition-services/nutrition-services.component';
import { NewPatientComponent } from './services-programs/new-patient/new-patient.component';
import { AiPatientComponent } from './services-programs/ai-patient/ai-patient.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',component: HomeComponent },
  {path: 'aboutus',component: AboutusComponent },
  {path: 'history', component: HistoryComponent},
  {path: 'medicalAppointment', component: MedicalAppointmentComponent},
  {path: 'board-directors', component: BoardDirectorsComponent},
  {path: 'staff-directory', component: StaffDirectoryComponent},
  {path: 'mission-statement', component: MissionStatementComponent},
  {path: 'collaborative-partners', component: CollaborativePartnersComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'staff-contact', component: StaffDirectoryContactComponent},
  {path: 'community-wellness', component: CommunityWellnessComponent},
  {path: 'funders', component: FundersComponent},
  {path: 'donors', component: DonorsComponent},
  {path: 'accreditation', component: AccreditationComponent},
  {path: 'financials', component: FinancialsComponent},
  {path: 'counseling-services', component: CounselingServicesComponent},
  {path: 'dental-services', component: DentalServicesComponent},
  {path: 'americanIndian', component: AmericanIndianResourcesComponent},
  {path: 'ihcArchives', component: IhcArchivesComponent},
  {path: 'Get-Involved', component: GetInvolvedComponent},
  {path: 'events-fundraisers', component: EventsFundraisersComponent},
  {path: 'news', component: NewsComponent},
  {path: 'volunteer-opportunities', component: VolunteerOpportunitiesComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'medical-services', component: MedicalServicesComponent},
  {path: 'nutrition-services', component: NutritionServicesComponent},
  {path: 'new-patient', component: NewPatientComponent},
  {path: 'ai-patient', component: AiPatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
