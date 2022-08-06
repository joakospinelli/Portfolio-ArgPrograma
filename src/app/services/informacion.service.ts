import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Informacion } from '../classes/informacion';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  url: string = 'https://jspinelli-ap-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public getInformacion(): Observable<Informacion> {
    return this.http.get<Informacion>(this.url + 'informacion/get');
  }

  public editInformacion(id: number, e: Informacion): Observable<Informacion> {
    return this.http.put<Informacion>(this.url + `informacion/edit/${id}`, e);
  }

}
