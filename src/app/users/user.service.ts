import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsersList(): Observable<User[]> {
    const URL = 'https://uitest.free.beeceptor.com/usernames';
    // INFO: Operator take 1 to avoid handle unsubscribed subscriptions
    return <Observable<User[]>>this.http.get(URL).pipe(take(1));
  }
}
