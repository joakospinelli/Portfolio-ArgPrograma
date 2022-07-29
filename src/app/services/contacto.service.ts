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
    return this.http.get<Array<Contacto>>(this.url + 'contactos');
  }
}
