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
    return this.http.get<Array<Proyecto>>(this.url + 'proyectos/get');
  }

  public addProyecto(e: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url + 'add/proyectos', e);
  }

  public editProyecto(id: number, e: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.url + `edit/proyectos/${id}`, e);
  }

  public deleteProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(this.url + `delete/proyectos/${id}`);
  }

}
