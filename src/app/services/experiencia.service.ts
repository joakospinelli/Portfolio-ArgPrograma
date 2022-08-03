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
    return this.http.get<Array<Experiencia>>(this.url + 'trabajos/get');
  }

  public addExperiencia(e: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.url + 'add/trabajos', e);
  }

  public editExperiencia(id: number, e: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.url + `edit/trabajos/${id}`, e);
  }

  public deleteExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.url + `delete/trabajos/${id}`);
  }

}
