import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../classes/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Array<Educacion>> {
    return this.http.get<Array<Educacion>>(this.url + 'educacion');
  }

}
