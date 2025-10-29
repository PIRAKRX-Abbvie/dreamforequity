import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss'],
    animations: [
        trigger("mobileOpenTrigger", [
            state('closed', style({
                height: '0px',
                opacity: '0',
                display: 'none'
            })
            ), state('open', style({
                height: 'fit-content',
                opacity: '1',
                display: 'inherit'
            })
            ), transition('closed => open', [
                animate('1s ease-in-out')
            ]), transition('open => closed', [
                animate('1s ease-in-out')
            ])
        ])
    ]
})

export class MobileMenuComponent implements OnInit, OnChanges {

    animationState = 'closed';

    constructor() { }
    ngOnInit(): void {
    
    }

    @Input() mobileHeaderState: boolean
    @Output() updateHeaderState = new EventEmitter<boolean>();

    onUpdateHeaderState(value: boolean) {
        this.updateHeaderState.emit(value);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.animationState = changes.mobileHeaderState.currentValue ? 'open' : 'closed';
    } 

    onClickScroll(elementId: string) :void { 
        this.mobileHeaderState = false;
        this.onUpdateHeaderState(false);
        const element = document.getElementById(elementId);
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }
}