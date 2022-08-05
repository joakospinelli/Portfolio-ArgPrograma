import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/';
  authenticated: boolean = false;

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem("current")){
      this.http.get(this.url + 'validate').subscribe(
        data => { this.authenticated = true },
        error => { sessionStorage.clear() })
    }
  }

  login(user: Usuario): Observable<any>{
    return this.http.post(this.url + 'login', user, {responseType: "text"}).pipe(map(data => {
        this.authenticated = true;
        sessionStorage.setItem("current", data);
      })
    );
  }

  get Authenticated(){
    return this.authenticated;
  }

  logout() {
    sessionStorage.clear();
    this.authenticated = false;
  }
}
