import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { shareReplay } from 'rxjs/operators';

const headers = new HttpHeaders({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'Access-Control-Allow-Origin': '*',
});

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  get<T = null>(url: string) {
    return this.http
      .get<T>(this.getApiUrl(url), { headers })
      .pipe(shareReplay());
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  post<T>(url: string, data: object = {}) {
    return this.http
      .post<T>(this.getApiUrl(url), data, { headers })
      .pipe(shareReplay());
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  put<T>(url: string, data: object = {}) {
    return this.http
      .put<T>(this.getApiUrl(url), data, { headers })
      .pipe(shareReplay());
  }

  delete(url: string) {
    return this.http
      .delete(this.getApiUrl(url), { headers })
      .pipe(shareReplay());
  }

  private getApiUrl(url: string): string {
    return `${this.configService.config.apiBase}${url}`;
  }
}
