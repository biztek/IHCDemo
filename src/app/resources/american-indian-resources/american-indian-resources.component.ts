import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-american-indian-resources',
  templateUrl: './american-indian-resources.component.html',
  styleUrls: ['./american-indian-resources.component.scss']
})
export class AmericanIndianResourcesComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  addAnimation(event, animationClass) {
    if(event.visible) this.renderer.addClass(event.target, animationClass);
    if(!event.visible) this.renderer.removeClass(event.target, animationClass);
  }

}
