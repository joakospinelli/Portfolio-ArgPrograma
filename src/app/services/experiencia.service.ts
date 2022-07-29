import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../classes/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Array<Experiencia>> {
    return this.http.get<Array<Experiencia>>(this.url + 'trabajos');
  }

}
