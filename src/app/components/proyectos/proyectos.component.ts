import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/classes/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosItems: Array<Proyecto> = [];

  constructor(private service: ProyectosService) { }

  ngOnInit(): void {
    this.service.getProyectos().subscribe((data: Array<Proyecto>) => this.proyectosItems = data );
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
