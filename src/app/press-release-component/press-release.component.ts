import { Component, OnInit } from '@angular/core';
import { buttonStyles } from '../shared/btn/btn.component';

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.scss']
})

export class PressReleaseComponent implements OnInit {
    buttonStyles = buttonStyles;
    constructor () {}
    ngOnInit(): void {}
}