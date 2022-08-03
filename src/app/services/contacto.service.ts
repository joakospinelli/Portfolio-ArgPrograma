import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../classes/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getContacto(): Observable<Array<Contacto>> {
    return this.http.get<Array<Contacto>>(this.url + 'contactos/get');
  }

  public addContacto(c: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.url + 'add/contactos', c);
  }

  public editContacto(id: number, c: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(this.url + `edit/contactos/${id}`, c);
  }

  public deleteContacto(id: number): Observable<Contacto> {
    return this.http.delete<Contacto>(this.url + `delete/contactos/${id}`);
  }

}
