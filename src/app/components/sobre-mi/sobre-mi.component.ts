import { Component, OnInit } from '@angular/core';
import { Informacion } from 'src/app/classes/informacion';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  data: Informacion = new Informacion(0,'','','');

  constructor(private service: InformacionService) { }

  ngOnInit(): void {
    this.service.getInformacion().subscribe((data: Informacion) => this.data = data);
  }

}
