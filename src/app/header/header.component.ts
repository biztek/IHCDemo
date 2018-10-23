import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

    constructor(private renderer: Renderer2, private router: Router) {
        router.events.subscribe((val) => {
            debugger;
            // if(val instanceOf NavigationStart) {
            //     console.log('here');
            // }
        });
    }
    ngOnInit() {}

    fnCloseList() {
        $('#menuAlignButton').click();
    }
    
    toggleMenuList(event) {
        if($('#menuAlignButton').attr('aria-expanded') == "true") {
            $('#bodyDisable').hide();
        } else {
            $('#bodyDisable').show();
        }
    }
}
