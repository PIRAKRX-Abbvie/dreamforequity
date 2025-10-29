import { Component, ElementRef, OnInit } from '@angular/core';
import { buttonStyles } from '../shared/btn/btn.component';
import { ViewChild } from '@angular/core';
@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    styleUrls: ['./about-section.component.scss']
})

export class AboutSectionComponent implements OnInit {
    constructor() { }

    buttonStyles = buttonStyles;

    videoId: string = 'T_up1joThrA'
    poster: string = '/assets/img/About_FOB_tb.png'
    id: string = 'about-section-video'
    
    @ViewChild('video') video: ElementRef;

    ngOnInit(): void { }
}