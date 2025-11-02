import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly user$;

  constructor(private http: HttpClient) {
  this.user$ = this.http
    .get(environment.getUrl('profile', 'accounts'))
    .pipe(shareReplay(1));
}
}
