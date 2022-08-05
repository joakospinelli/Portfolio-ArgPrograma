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
    return this.http.get<Array<Educacion>>(this.url + 'educacion/get');
  }

  public addEducacion(e: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.url + 'educacion/add', e);
  }

  public editEducacion(id: number, e: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.url + `educacion/edit/${id}`, e);
  }

  public deleteEducacion(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(this.url + `educacion/delete/${id}`);
  }

}
