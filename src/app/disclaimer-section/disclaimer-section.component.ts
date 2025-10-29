import { Component, OnInit } from '@angular/core';
import { buttonStyles } from '../shared/btn/btn.component';

@Component({
  selector: 'app-disclaimer-section',
  templateUrl: './disclaimer-section.component.html',
  styleUrls: ['./disclaimer-section.component.scss']
})
export class DisclaimerSectionComponent implements OnInit {
  buttonStyles = buttonStyles;

  constructor() { }

  ngOnInit(): void {
  }

}
