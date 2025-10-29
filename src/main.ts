import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { config } from 'rxjs';
import 'zone.js';
import '@angular/localize/init';

import { AppModule } from './app/app.module';
import { ConfigService } from './app/shared/config/config.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('./assets/configs/config.json').then(async (res) => {
  const configService = new ConfigService();
  configService.config = await res.json();

  platformBrowserDynamic([{ provide: ConfigService, useValue: configService }])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
