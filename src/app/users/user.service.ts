import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsersList(): any {
    const URL = 'https://uitest.free.beeceptor.com/usernames';
    // INFO: Operator take 1 to avoid handle unsubscribed subscriptions
    return this.http.get(URL).pipe(take(1));
  }
}
