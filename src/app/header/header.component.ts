import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { buttonStyles } from '../shared/btn/btn.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger("myScrollTrigger", [
            state('collapsed', style({
                height: '100px',
                background: 'black',
                color: 'white'
            })
            ), state('expanded', style({
                height: '150px',
                background: 'rgba(0,0,0,0.25)'
            })
            ), transition('expanded => collapsed', [
                animate('1s ease-in-out')
            ]), transition('collapsed => expanded', [
                animate('1s ease-in-out')
            ])
        ])
    ]
})

export class HeaderComponent implements OnInit {

    buttonStyles = buttonStyles;

    animationState = 'expanded';

    currentLogo = '/assets/img/DREAM_logo_dark.png'

    currentButtonStyle = buttonStyles.primarySmallSolid;

    mobileHeaderOpen = false;

    faBars = faBars;

    constructor() { }
    ngOnInit(): void { }

    @HostListener('window:scroll', ['$event'])

    onScroll(event: any) {
        if (window.scrollY > 0) {
            this.animationState = 'collapsed';
            this.currentButtonStyle = buttonStyles.secondarySmallSolid;
            this.currentLogo = '/assets/img/DREAM_logo_light.png'
        } else {
            this.animationState = 'expanded';
            this.currentButtonStyle = buttonStyles.primarySmallSolid;
            this.currentLogo = '/assets/img/DREAM_logo_dark.png'
        }
    }

    onClickScroll(elementId: string): void {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }


    mobileHeaderToggle(): void {
        this.mobileHeaderOpen = !this.mobileHeaderOpen;
    }

    updateHeaderState(state: boolean): void {
        this.mobileHeaderOpen = state;
    }

    onClickScrollTop(): void {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}