import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  constructor(private httpClient: HttpClient) {}

  createUser(user: user): Observable<any> {
    const url: string = 'http://localhost:5001/users/signup';
    return this.httpClient.post(url, user);
  }
}
