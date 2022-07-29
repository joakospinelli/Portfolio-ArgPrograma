import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/classes/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoItems: Array<Contacto> = [];

  constructor(private service: ContactoService) { }

  ngOnInit(): void {
    this.service.getContacto().subscribe((data: Array<Contacto>) => this.contactoItems = data);
  }

}

@Component({
  selector: 'contacto-item',
  templateUrl: './contacto-item.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoItem implements OnInit {

  @Input() data?: Contacto;

  ngOnInit(): void {

  }

  getLink(): string {
    if (this.data?.descripcion.includes('@')){
      return `mailto:${this.data.descripcion}`;
    } else return (this.data?.descripcion ?? '');
  }

}
