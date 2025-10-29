import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api/api.service';
import { ConfigService } from '../shared/config/config.service';
import { apiRoutes } from '../shared/constants/route.constants';
import { RecaptchaSiteKey } from '../shared/models/recaptcha-site-key.model';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  constructor(private apiService: ApiService, private configService: ConfigService) {}

  getRecaptchaSiteKey(): Observable<RecaptchaSiteKey> {
    const { recaptchaKey } = this.configService.config;
    return this.apiService.get(apiRoutes.recaptcha.getSiteKey(recaptchaKey));
  }
}
