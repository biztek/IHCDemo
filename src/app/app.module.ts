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
import { InViewportModule } from 'ng-in-viewport';

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
    DentalServicesComponent
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
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
