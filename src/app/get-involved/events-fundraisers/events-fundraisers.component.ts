import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-fundraisers',
  templateUrl: './events-fundraisers.component.html',
  styleUrls: ['./events-fundraisers.component.scss']
})
export class EventsFundraisersComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

}
