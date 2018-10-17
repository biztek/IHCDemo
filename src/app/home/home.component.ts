import { Component, Renderer2 } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public divID = -1;
    public mouseOvered = false;
    constructor(private renderer: Renderer2){};

    addAnimation(event, animationClass) {
        if(event.visible) this.renderer.addClass(event.target, animationClass);
        if(!event.visible) this.renderer.removeClass(event.target, animationClass);
    }
}