import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../classes/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url: string = 'https://jspinelli-ap-backend.herokuapp.com/'

  constructor(private http: HttpClient) { }

  public getContacto(): Observable<Array<Contacto>> {
    return this.http.get<Array<Contacto>>(this.url + 'contactos/get');
  }

  public addContacto(c: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.url + 'contactos/add', c);
  }

  public editContacto(id: number, c: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(this.url + `contactos/edit/${id}`, c);
  }

  public deleteContacto(id: number): Observable<Contacto> {
    return this.http.delete<Contacto>(this.url + `contactos/delete/${id}`);
  }

}
