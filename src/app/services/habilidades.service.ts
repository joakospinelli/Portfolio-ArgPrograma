import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../classes/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  url: string = 'https://jspinelli-ap-backend.herokuapp.com/'

  constructor(private http: HttpClient) { }

  public getHabilidades(): Observable<Array<Habilidad>>{
    return this.http.get<Array<Habilidad>>(this.url + 'habilidades/get');
  }

  public addHabilidad(e: Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(this.url + 'habilidades/add/', e);
  }

  public editHabilidad(id: number, e: Habilidad): Observable<Habilidad> {
    return this.http.put<Habilidad>(this.url + `habilidades/edit/${id}`, e);
  }

  public deleteHabilidad(id: number): Observable<Habilidad> {
    return this.http.delete<Habilidad>(this.url + `habilidades/delete/${id}`);
  }

}
