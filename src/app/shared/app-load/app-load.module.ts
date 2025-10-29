import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config/config.service';

// See Environment Variables in the README
export const gtmIdFactory = (configService: ConfigService) => {
  return configService.config.googleAnalytics.id;
};

export const gtmAuthFactory = (configService: ConfigService) => {
  return configService.config.googleAnalytics.auth;
};

export const gtmPreviewFactory = (configService: ConfigService) => {
  return configService.config.googleAnalytics.preview;
};
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // With GTM
    {
      provide: 'googleTagManagerId',
      useFactory: gtmIdFactory,
      deps: [ConfigService],
    },
    {
      provide: 'googleTagManagerAuth',
      useFactory: gtmAuthFactory,
      deps: [ConfigService],
    },
    {
      provide: 'googleTagManagerPreview',
      useFactory: gtmPreviewFactory,
      deps: [ConfigService],
    },
  ],
})
export class AppLoadModule {}
