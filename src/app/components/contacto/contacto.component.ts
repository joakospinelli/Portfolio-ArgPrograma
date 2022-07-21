import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoItems: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/contactos').subscribe((data: any) => this.contactoItems = data);
  }

}

@Component({
  selector: 'contacto-item',
  templateUrl: './contacto-item.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoItem implements OnInit {

  @Input() data?: any;

  ngOnInit(): void {

  }

  getLink(): string {
    if (this.data.descripcion.includes('@')){
      return `mailto:${this.data.descripcion}`;
    } else return this.data.descripcion;
  }

}
