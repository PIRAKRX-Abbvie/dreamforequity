import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {


    images = [
        {
            desktopSrc: '/assets/img/GROUP12_5182_lrg.jpg',
            mobileSrc: '/assets/img/GROUP12_5182_sml.jpg',
            caption: 'Women of all races strongly believe that "one of us cannot represent all of us."'
        },
        {
            desktopSrc: '/assets/img/Andrea_4652_lrg.jpg',
            mobileSrc: '/assets/img/Andrea_4652_sml.jpg',
            caption: 'Black women feel aesthetic treatments are not for them because many doctors lack training in treating Black skin.'
        },
        {
            desktopSrc: '/assets/img/Kara_4836_lrg.jpg',
            mobileSrc: '/assets/img/Kara_4836_sml.jpg',
            caption: 'Asian and American beauty standards drastically differ. And Asian-American women face the duality of wanting to fit both.'
        },
        {
            desktopSrc: '/assets/img/Patricia_4321_lrg.jpg',
            mobileSrc: '/assets/img/Patricia_4321_sml.jpg',
            caption: 'Black and Hispanic women don\'t want their beauty to just be "accepted." They want it as celebrated as Eurocentric standards.'
        },

        {
            desktopSrc: '/assets/img/Starla_4481_lrg.jpg',
            mobileSrc: '/assets/img/Starla_4481_sml.jpg',
            caption: 'The change most women want in the beauty industry is to see "real women" reflected in beauty advertising.'
        }
    ];

    constructor() {

    }

    @ViewChild('carousel', { read: ElementRef }) carousel: any;

    ngOnInit(): void {
    }
        
    // Angular carousel does not have a way to directly target the navigation or selectors, so grabbing those elements on load and adding a tab index for accessibility purposes.
   
}
