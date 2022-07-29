import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/classes/habilidad';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadItems: Array<Habilidad> = [];

  constructor(private service: HabilidadesService) {

  }

  ngOnInit(): void {
    this.service.getHabilidades().subscribe((data: Array<Habilidad>) => this.habilidadItems = data.sort( (a:Habilidad, b:Habilidad) =>{ return b.porcentaje - a.porcentaje }) );
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
