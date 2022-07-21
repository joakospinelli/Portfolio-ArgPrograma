import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosItems: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/proyectos').subscribe((data: any) => this.proyectosItems = data );
  }

}

@Component({
  selector: 'proyectos-item',
  templateUrl: './proyectos-item.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosItem implements OnInit {

  @Input() data?: any;

  constructor() { }

  ngOnInit(): void {

  }
}
