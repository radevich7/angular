import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from 'src/app_config/app_config.service';
import { AppConfig } from 'src/app_config/app_config.interface';
import { User } from '../user';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {}
  headers = new HttpHeaders({ token: '123abc' });

  getUsers$ = this.http
    .get<User[]>(`${this.config.apiEndpoint}/users`)
    .pipe(shareReplay(1));

  getUsers() {
    return this.http.get<User[]>(`${this.config.apiEndpoint}/users`);
  }
  postUsers(user: User) {
    console.log(user);
    return this.http.post<User>(`${this.config.apiEndpoint}/users`, user);
  }
  putUsers(user: User) {
    const url = `${this.config.apiEndpoint}/users/${user.id}`;
    return this.http.put<User[]>(url, user);
  }
  deleteUsers(id: number) {
    const url = `${this.config.apiEndpoint}/users/${id}`;
    return this.http.delete(url);
  }
}
