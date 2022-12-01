import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(): Observable<any> {
    // TODO: Implement login
    return this.http.post('http://localhost:3000/user/login', {
      email:null,
      passwd:null
    });
  }

  register(): Observable<any> {
    // TODO: Implement register
    return this.http.post('http://localhost:3000/user/register', {
      email:null,
      passwd:null,
      pseudonyme:null
    });
  }
}
