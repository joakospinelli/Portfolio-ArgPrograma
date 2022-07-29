import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../classes/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  url: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getHabilidades(): Observable<Array<Habilidad>>{
    return this.http.get<Array<Habilidad>>(this.url + 'habilidades');
  }
}
