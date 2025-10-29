import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Allergan Aesthetics | An AbbVie Company';

  constructor(
    private analyticsService: AnalyticsService,
  ) {}

  ngOnInit() {
    this.analyticsService.init();
  }

  onActive() {
     window.scroll(0,0);
  }
}
