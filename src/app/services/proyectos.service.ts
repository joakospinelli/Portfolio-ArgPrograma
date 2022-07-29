import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../classes/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Array<Proyecto>> {
    return this.http.get<Array<Proyecto>>(this.url + 'proyectos');
  }

}
