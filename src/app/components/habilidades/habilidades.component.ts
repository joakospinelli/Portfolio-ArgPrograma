import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadItems: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/habilidades').subscribe((data: any) => this.habilidadItems = data.sort( (a:any, b:any) =>{ return b.porcentaje - a.porcentaje }) );
  }

}

@Component({
  selector: 'habilidad-item',
  templateUrl: './habilidades-item.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesItem implements OnInit {

  @Input() item?: any;

  constructor() {

  }

  ngOnInit(): void {

  }

}
