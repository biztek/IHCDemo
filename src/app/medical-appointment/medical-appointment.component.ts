import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.component.html',
  styleUrls: ['./medical-appointment.component.scss']
})
export class MedicalAppointmentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // myControl = new FormControl();
  }

}
