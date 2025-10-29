import { Component, OnInit } from '@angular/core';
import { buttonStyles } from '../shared/btn/btn.component';
@Component({
  selector: 'app-shutterstock-section',
  templateUrl: './shutterstock-section.component.html',
  styleUrls: ['./shutterstock-section.component.scss']
})
export class ShutterstockSectionComponent implements OnInit {

  buttonStyles = buttonStyles;
  constructor() { }

  ngOnInit(): void {
  }

  openShutterstockLink(href: string): void { 
    window.open(href);
  }

}
