import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HeaderService } from '../header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

    constructor(private renderer: Renderer2, private router: Router, private headerService: HeaderService) {
        router.events.subscribe((val) => {
            console.log(val);
        });
    }
    public searchList:any = []
    public searchKey:string = '';
    public selectedList:any = [];

    ngOnInit() {
        this.headerService.getSearchData()
        .subscribe((data) => {
            this.searchList = data.data;
        })
    }

    fnSearchList() {
        if(!this.searchKey || this.searchKey.length < 2) {
            this.selectedList = [];
            return;
        }
        this.selectedList = this.searchList.filter((row, index) => {
            if(row.name.toLowerCase().indexOf(this.searchKey.trim().toLowerCase()) > -1) {
                return row;
            }
        })
    }

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

    clickedInside($event: Event){
        $event.preventDefault();
        $event.stopPropagation(); 
      }

    @HostListener('document:click', ['$event']) clickedOutside($event){
        this.selectedList = [];
    }
}

