import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { distinctUntilChanged, filter } from 'rxjs/operators';

declare global {
  interface Window {
    dataLayer: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private gtmService: GoogleTagManagerService, private router: Router,) {
    this.gtmService.addGtmToDom();
  }

  init() {
     this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        this.trackPageView();
      });
  }

  trackPageView() {
    this.pushEvent('pageView');
  }

  pushEvent(eventName: string, eventData = {}) {
    const gtmTag = {
      event: eventName,
      ...eventData,
    };

    /*
      Was getting a double event push when using 
      gtmService.pushTag(). So instead of using 
      the plugin to push the tag, we are going 
      straight to window.dataLayer.
    */
    window.dataLayer.push(gtmTag);
  }
}
