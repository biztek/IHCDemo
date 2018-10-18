import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ihc-archives',
  templateUrl: './ihc-archives.component.html',
  styleUrls: ['./ihc-archives.component.scss']
})
export class IhcArchivesComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  addAnimation(event, animationClass) {
    if(event.visible) this.renderer.addClass(event.target, animationClass);
    if(!event.visible) this.renderer.removeClass(event.target, animationClass);
  }

}
