import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Informacion } from '../classes/informacion';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getInformacion(): Observable<Informacion> {
    return this.http.get<Informacion>(this.url + 'informacion');
  }

  public editInformacion(id: number, e: Informacion): Observable<Informacion> {
    return this.http.put<Informacion>(this.url + `edit/informacion/${id}`, e);
  }

}
