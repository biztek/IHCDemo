import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HistoryComponent } from './history/history.component';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { MissionStatementComponent } from './aboutus/mission-statement/mission-statement.component';
import { BoardDirectorsComponent } from './aboutus/board-directors/board-directors.component';
import { StaffDirectoryComponent } from './aboutus/staff-directory/staff-directory.component';
import { CollaborativePartnersComponent } from './aboutus/collaborative-partners/collaborative-partners.component';
import { LocationsComponent } from './contact/locations/locations.component';
import { StaffDirectoryContactComponent } from './contact/staff-directory/staff-directory.component';
import { ServicesProgramsComponent } from './services-programs/services-programs.component';
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
import {MatChipsModule} from '@angular/material/chips';
import { VolunteerOpportunitiesComponent } from './get-involved/volunteer-opportunities/volunteer-opportunities.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    HistoryComponent,
    MedicalAppointmentComponent,
    MissionStatementComponent,
    BoardDirectorsComponent,
    StaffDirectoryComponent,
    CollaborativePartnersComponent,
    LocationsComponent,
    StaffDirectoryContactComponent,
    ServicesProgramsComponent,
    CommunityWellnessComponent,
    FundersComponent,
    DonorsComponent,
    AccreditationComponent,
    FinancialsComponent,
    CounselingServicesComponent,
    DentalServicesComponent,
    AmericanIndianResourcesComponent,
    IhcArchivesComponent,
    GetInvolvedComponent,
    EventsFundraisersComponent,
    NewsComponent,
    VolunteerOpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
