import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  addAnimation(event, animationClass) {
    if(event.visible) this.renderer.addClass(event.target, animationClass);
    if(!event.visible) this.renderer.removeClass(event.target, animationClass);
  }

}
