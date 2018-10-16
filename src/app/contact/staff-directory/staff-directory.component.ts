import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-staff-directory-contact',
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.scss']
})
export class StaffDirectoryContactComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  addAnimation(event, animationClass) {
    if(event.visible) this.renderer.addClass(event.target, animationClass);
    if(!event.visible) this.renderer.removeClass(event.target, animationClass);
  }

}
