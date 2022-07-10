import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionItems: any;
  prueba: String = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/educacion').subscribe((data: any) => this.educacionItems = data);
  }

}

@Component({
  selector: 'educacion-item',
  templateUrl: './educacion-item.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionItem implements OnInit {

  @Input() item?: any;

  constructor () {

  }

  ngOnInit(): void {
    console.log(this.item);
  }

}
